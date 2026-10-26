@php
    $first = $orders[0];
    $grandTotal = $orders->sum(fn ($o) => $o->product->final_price);
    $originalTotal = $orders->sum(fn ($o) => $o->product->price);
    $savings = $originalTotal - $grandTotal;
    $paymentLabels = [
        'cash' => 'Cash on Delivery',
        'easypaisa' => 'EasyPaisa',
        'jazzcash' => 'JazzCash',
        'bank' => 'Bank Transfer',
    ];
    $paymentLabel = $paymentLabels[$first->payment_method] ?? ucfirst($first->payment_method);
@endphp
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;color:#222;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:24px 0;">
<tr><td align="center">
<table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:14px;overflow:hidden;">

    {{-- Header --}}
    <tr>
        <td style="background:#9b5d24;padding:28px 32px;text-align:center;">
            <div style="font-size:26px;font-weight:800;letter-spacing:2px;color:#ffffff;">IMORA</div>
            <div style="font-size:14px;color:#f5e3cc;margin-top:4px;">New Order Received</div>
        </td>
    </tr>

    {{-- Intro --}}
    <tr>
        <td style="padding:28px 32px 8px;">
            <p style="margin:0 0 8px;font-size:16px;">Hello Admin,</p>
            <p style="margin:0;font-size:14px;line-height:1.6;color:#555;">
                A new order has just been placed on <strong>IMORA</strong>. Please review the details below.
            </p>
        </td>
    </tr>

    {{-- Order + customer details --}}
    <tr>
        <td style="padding:16px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#faf6ea;border-radius:10px;">
                <tr>
                    <td style="padding:14px 16px 6px;font-size:13px;color:#777;">Order Number</td>
                    <td style="padding:14px 16px 6px;font-size:14px;font-weight:700;text-align:right;color:#9b5d24;">{{ $orderNumber }}</td>
                </tr>
                <tr>
                    <td style="padding:6px 16px;font-size:13px;color:#777;">Customer</td>
                    <td style="padding:6px 16px;font-size:14px;font-weight:600;text-align:right;">{{ $first->name }}</td>
                </tr>
                <tr>
                    <td style="padding:6px 16px;font-size:13px;color:#777;">Phone</td>
                    <td style="padding:6px 16px;font-size:14px;font-weight:600;text-align:right;">{{ $first->phone }}</td>
                </tr>
                <tr>
                    <td style="padding:6px 16px;font-size:13px;color:#777;">Email</td>
                    <td style="padding:6px 16px;font-size:14px;font-weight:600;text-align:right;">{{ $first->email ?: '—' }}</td>
                </tr>
                <tr>
                    <td style="padding:6px 16px;font-size:13px;color:#777;">Payment Method</td>
                    <td style="padding:6px 16px;font-size:14px;font-weight:600;text-align:right;">{{ $paymentLabel }}</td>
                </tr>
                @if ($first->transaction_id)
                <tr>
                    <td style="padding:6px 16px;font-size:13px;color:#777;">Transaction ID</td>
                    <td style="padding:6px 16px;font-size:14px;font-weight:600;text-align:right;">{{ $first->transaction_id }}</td>
                </tr>
                @endif
                <tr>
                    <td style="padding:6px 16px 14px;font-size:13px;color:#777;vertical-align:top;">Address</td>
                    <td style="padding:6px 16px 14px;font-size:14px;font-weight:600;text-align:right;">{{ $first->address }}</td>
                </tr>
            </table>
        </td>
    </tr>

    {{-- Products --}}
    <tr>
        <td style="padding:8px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr style="background:#f4f1ea;">
                    <th align="left" style="padding:10px;font-size:12px;color:#777;text-transform:uppercase;">Product</th>
                    <th align="right" style="padding:10px;font-size:12px;color:#777;text-transform:uppercase;">Price</th>
                    <th align="right" style="padding:10px;font-size:12px;color:#777;text-transform:uppercase;">Discount</th>
                    <th align="right" style="padding:10px;font-size:12px;color:#777;text-transform:uppercase;">Total</th>
                </tr>
                @foreach ($orders as $order)
                    @php $p = $order->product; @endphp
                    <tr>
                        <td style="padding:12px 10px;border-bottom:1px solid #eee;">
                            <table cellpadding="0" cellspacing="0"><tr>
                                <td style="padding-right:10px;">
                                    <img src="{{ $p->image }}" alt="{{ $p->name }}" width="52" height="52"
                                         style="width:52px;height:52px;object-fit:cover;border-radius:8px;display:block;">
                                </td>
                                <td>
                                    <div style="font-size:14px;font-weight:700;">{{ $p->name }}</div>
                                    @if ($p->category)
                                        <div style="font-size:12px;color:#9b5d24;">{{ $p->category->name }}</div>
                                    @endif
                                </td>
                            </tr></table>
                        </td>
                        <td align="right" style="padding:12px 10px;border-bottom:1px solid #eee;font-size:13px;">
                            Rs {{ number_format($p->price, 2) }}
                        </td>
                        <td align="right" style="padding:12px 10px;border-bottom:1px solid #eee;font-size:13px;">
                            @if ($p->discount > 0)
                                <span style="background:#c29522;color:#fff;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:700;">
                                    -{{ rtrim(rtrim(number_format($p->discount, 2), '0'), '.') }}%
                                </span>
                            @else
                                &mdash;
                            @endif
                        </td>
                        <td align="right" style="padding:12px 10px;border-bottom:1px solid #eee;font-size:14px;font-weight:700;color:#9b5d24;">
                            Rs {{ number_format($p->final_price, 2) }}
                        </td>
                    </tr>
                @endforeach
            </table>
        </td>
    </tr>

    {{-- Totals --}}
    <tr>
        <td style="padding:12px 32px 16px;">
            <table width="100%" cellpadding="0" cellspacing="0">
                @if ($savings > 0)
                <tr>
                    <td style="padding:4px 0;font-size:13px;color:#777;">Subtotal</td>
                    <td align="right" style="padding:4px 0;font-size:13px;color:#777;text-decoration:line-through;">Rs {{ number_format($originalTotal, 2) }}</td>
                </tr>
                <tr>
                    <td style="padding:4px 0;font-size:13px;color:#2e7d32;">Discount</td>
                    <td align="right" style="padding:4px 0;font-size:13px;color:#2e7d32;font-weight:700;">- Rs {{ number_format($savings, 2) }}</td>
                </tr>
                @endif
                <tr>
                    <td style="padding:10px 0 0;font-size:16px;font-weight:800;border-top:2px solid #c29522;">Total Amount</td>
                    <td align="right" style="padding:10px 0 0;font-size:18px;font-weight:800;color:#9b5d24;border-top:2px solid #c29522;">Rs {{ number_format($grandTotal, 2) }}</td>
                </tr>
            </table>
        </td>
    </tr>

    {{-- Footer --}}
    <tr>
        <td style="background:#faf6ea;padding:20px 32px;text-align:center;font-size:13px;color:#777;line-height:1.6;">
            Please begin processing and dispatching the order.<br><br>
            <strong style="color:#9b5d24;">IMORA ADmin Dashboard</strong>
        </td>
    </tr>

</table>
</td></tr>
</table>
</body>
</html>