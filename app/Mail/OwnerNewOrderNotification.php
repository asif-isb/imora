<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OwnerNewOrderNotification extends Mailable
{
    use SerializesModels;

    public $orderNumber;
    public $orders;
    public $total;

    public function __construct($orderNumber, $orders)
    {
        $this->orderNumber = $orderNumber;
        $this->orders = $orders;

        // Total uses the discounted price (Product::final_price)
        $this->total = collect($orders)->sum(function ($order) {
            return $order->product->final_price; // Make sure 'product' relationship is loaded
        });
    }

    public function build()
    {
        return $this->subject('New Order Received – IMORA')
                    ->view('emails.owner.order') // was ->markdown(...)
                    ->with([
                        'orderNumber' => $this->orderNumber,
                        'orders' => $this->orders,
                        'total' => $this->total,
                    ]);
    }
}