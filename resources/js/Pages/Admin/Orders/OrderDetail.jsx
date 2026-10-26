import React from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import Dashboard from "../../Dashboard";
import { toast, Toaster } from "sonner";

const PAYMENT_LABELS = {
  cash: "Cash on Delivery",
  easypaisa: "EasyPaisa",
  jazzcash: "JazzCash",
  bank: "Bank Transfer",
};

const STATUS_STYLES = {
  pending: "bg-yellow-100 text-yellow-800",
  dispatched: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800",
};

const priceInfo = (product) => {
  const price = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  return { price, discount, final: price - (price * discount) / 100 };
};

export default function OrderDetail() {
  const { orders, orderNumber } = usePage().props;
  const order = orders[0];
  const orderDate = new Date(order.created_at).toLocaleString();

  const originalTotal = orders.reduce((sum, o) => sum + priceInfo(o.product).price, 0);
  const totalAmount = orders.reduce((sum, o) => sum + priceInfo(o.product).final, 0);
  const savings = originalTotal - totalAmount;

  const { data, setData, post, processing } = useForm({
    status: order.order_status,
  });

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;

    router.post(
      route("dashboard.orders.updatestatus", orderNumber),
      { status: newStatus },
      {
        preserveScroll: true,
        onSuccess: () => {
          toast.success("Order status updated!");
          setData("status", newStatus);
        },
        onError: () => toast.error("Failed to update status."),
      }
    );
  };

  return (
    <Dashboard title={`Order Details – ${orderNumber}`}>
      <Toaster richColors position="top-center" />

      <div id="printable-area" className="max-w-4xl mx-auto mt-10 bg-white rounded-xl shadow overflow-hidden">
        {/* Brand bar */}
        <div className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: "#c29522" }}>
          <span className="text-white text-2xl font-extrabold tracking-widest">IMORA</span>
          <span className="text-white text-sm opacity-90">Order Invoice</span>
        </div>

        <div className="p-6">
          {/* Header with status and print */}
          <div className="flex flex-col md:flex-row justify-between md:items-start mb-6 border-b pb-4 gap-4">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Order #: {orderNumber}</h2>
              <p className="text-gray-500 text-sm">Order Date: {orderDate}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold capitalize ${
                  STATUS_STYLES[data.status] || "bg-gray-100 text-gray-700"
                }`}
              >
                {data.status}
              </span>
            </div>
            <div className="flex items-center space-x-4 print:hidden">
              <div>
                <label className="text-sm font-medium text-gray-600 mr-2">Status:</label>
                <select
                  value={data.status}
                  onChange={handleStatusChange}
                  disabled={processing}
                  className="border px-3 py-2 pr-10 rounded text-sm focus:outline-none focus:ring focus:border-blue-400 transition"
                >
                  <option value="pending">Pending</option>
                  <option value="dispatched">Dispatched</option>
                  <option value="completed">Completed</option>
                  <option value="canceled">Canceled</option>
                </select>
              </div>
              <button
                onClick={() => window.print()}
                className="bg-gray-500 text-white text-sm px-4 py-2 rounded hover:bg-gray-800"
              >
                🖨️ Print
              </button>
            </div>
          </div>

          {/* Customer Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6 bg-gray-50 rounded-lg p-4">
            <div>
              <p className="text-gray-500">Customer Name</p>
              <p className="font-semibold text-gray-800">{order.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Phone</p>
              <p className="font-semibold text-gray-800">{order.phone}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-semibold text-gray-800">{order.email || "—"}</p>
            </div>
            <div>
              <p className="text-gray-500">Address</p>
              <p className="font-semibold text-gray-800">{order.address}</p>
            </div>
            <div>
              <p className="text-gray-500">Payment Method</p>
              <p className="font-semibold text-gray-800">
                {PAYMENT_LABELS[order.payment_method] || order.payment_method}
              </p>
            </div>
            <div>
              <p className="text-gray-500">Transaction ID</p>
              <p className="font-semibold text-gray-800">{order.transaction_id || "—"}</p>
            </div>
          </div>

          {/* Products Table */}
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 border">Product</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border text-right">Price</th>
                  <th className="px-4 py-2 border text-right">Discount</th>
                  <th className="px-4 py-2 border text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o, i) => {
                  const { price, discount, final } = priceInfo(o.product);
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">
                        <div className="flex items-center gap-3">
                          <img
                            src={o.product.image}
                            alt={o.product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <span className="font-medium">{o.product.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-2 border">{o.product.category?.name || "—"}</td>
                      <td className="px-4 py-2 border text-right">Rs {price.toFixed(2)}</td>
                      <td className="px-4 py-2 border text-right">
                        {discount > 0 ? (
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#c29522" }}>
                            -{discount}%
                          </span>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="px-4 py-2 border text-right font-semibold" style={{ color: "#9b5d24" }}>
                        Rs {final.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="mt-6 flex justify-end">
            <div className="w-full sm:w-72 text-sm space-y-1">
              {savings > 0 && (
                <>
                  <div className="flex justify-between text-gray-500">
                    <span>Subtotal</span>
                    <span className="line-through">Rs {originalTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>Discount</span>
                    <span>- Rs {savings.toFixed(2)}</span>
                  </div>
                </>
              )}
              <div className="flex justify-between text-lg font-bold border-t-2 pt-2" style={{ borderColor: "#c29522" }}>
                <span>Total Amount</span>
                <span style={{ color: "#9b5d24" }}>Rs {totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}