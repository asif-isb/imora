<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CustomerOrderConfirmation extends Mailable
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
            return $order->product->final_price; // Ensure 'product' relationship is loaded
        });
    }

    public function build()
    {
        return $this->subject('Thank you for your order – IMORA')
                    ->view('emails.customer.order') // was ->markdown(...)
                    ->with([
                        'orderNumber' => $this->orderNumber,
                        'orders' => $this->orders,
                        'total' => $this->total,
                    ]);
    }
}