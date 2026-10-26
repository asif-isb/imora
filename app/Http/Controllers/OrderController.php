<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\Setting;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\CustomerOrderConfirmation;
use App\Mail\OwnerNewOrderNotification;

class OrderController extends Controller
{

    public function index()
    {
        $orders = Order::with('product.category')
            ->orderBy('created_at', 'desc')
            ->paginate(100);

        $statusCounts = Order::selectRaw('order_status, COUNT(DISTINCT order_number) as total')
            ->groupBy('order_status')
            ->pluck('total', 'order_status');

        $stats = [
            'total'      => Order::distinct()->count('order_number'),
            'new_today'  => Order::whereDate('created_at', today())->distinct()->count('order_number'),
            'pending'    => $statusCounts['pending'] ?? 0,
            'dispatched' => $statusCounts['dispatched'] ?? 0,
            'completed'  => $statusCounts['completed'] ?? 0,
            'canceled'   => $statusCounts['canceled'] ?? 0,
        ];

        return Inertia::render('Admin/Orders', [
            'orders' => $orders,
            'stats'  => $stats
        ]);
    }

    public function show($order_number)
    {
        $orders = Order::with('product.category')
            ->where('order_number', $order_number)
            ->get();

        return Inertia::render('Admin/Orders/OrderDetail', [
            'orders' => $orders,
            'orderNumber' => $order_number,
        ]);
    }

    public function updateStatus(Request $request, $orderNumber)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,dispatched,completed,canceled',
        ]);
        
        \Log::info('Received status from frontend: ' . $request->status);


        Order::where('order_number', $orderNumber)->update([
            'order_status' => $validated['status']
        ]);

        return back()->with('success', 'Order status updated successfully.');
    }



     public function store(Request $request)
    {
        // Normalize Pakistani phone numbers to local format
        // "+92 333 5411140", "++9203335411140", "923335411140", "0333-5411140" -> 03335411140
        $phone = preg_replace('/\D+/', '', (string) $request->phone); // keep digits only

        if (str_starts_with($phone, '0092')) {
            $phone = substr($phone, 4);
        } elseif (str_starts_with($phone, '92')) {
            $phone = substr($phone, 2);
        }

        $phone = '0' . ltrim($phone, '0'); // exactly one leading zero

        $request->merge(['phone' => $phone]);

        $validated = $request->validate([
            'product_ids'     => 'required|array|min:1',
            'product_ids.*'   => 'exists:products,id',
            'name'            => 'required|string|max:255',
            'phone'           => ['required', 'regex:/^(03\d{9}|0[1-9]\d{8,9})$/'],
            'email'           => 'nullable|email',
            'address'         => 'required|string',
            'payment_method'  => 'required|in:cash,easypaisa,jazzcash,bank',
            'transaction_id'  => 'nullable|string|max:255',
        ], [
            'phone.regex' => 'Please enter a valid number.',
        ]);

        // Save names in Title Case: "mUhammad aSIF" -> "Muhammad Asif"
        $validated['name'] = Str::title(trim(preg_replace('/\s+/', ' ', $validated['name'])));

        // Generate a unique order number
        $orderNumber = 'ORD-' . date('Ymd') . '-' . strtoupper(Str::random(6));

        foreach ($validated['product_ids'] as $productId) {
            Order::create([
                'order_number'    => $orderNumber,
                'product_id'      => $productId,
                'name'            => $validated['name'],
                'phone'           => $validated['phone'],
                'email'           => $validated['email'] ?? null,
                'address'         => $validated['address'],
                'payment_method'  => $validated['payment_method'],
                'transaction_id'  => $validated['transaction_id'] ?? null,
            ]);
        }

        $orders = Order::with('product.category')->where('order_number', $orderNumber)->get();

        // Mail problems should not make a saved order look like a failure
        try {
            // Send confirmation email to customer (only if an email was given)
            if (!empty($validated['email'])) {
                Mail::to($validated['email'])->send(new CustomerOrderConfirmation($orderNumber, $orders));
            }

            // Get owner email from settings table
            $ownerEmail = Setting::where('key', 'order_notification_email')->value('value');
            if ($ownerEmail) {
                Mail::to($ownerEmail)->send(new OwnerNewOrderNotification($orderNumber, $orders));
            }
        } catch (\Throwable $e) {
            \Log::error('Order email failed: ' . $e->getMessage());
        }

        return response()->json(['message' => 'Order placed successfully', 'order_number' => $orderNumber]);
    }


}
