"use client";

const OrderItemComponent = ({ order }: { order: OrderAdmin }) => {
  const formatStatus = (status: string) => {
    const statusColors: Record<string, string> = {
      pending: "text-yellow-500",
      shipping: "text-green-500",
      delivered: "text-blue-500",
    };
    return statusColors[status.toLowerCase()] || "text-red-500";
  };
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <div className="mt-6 w-full max-w-lg bg-white p-6 rounded shadow-lg">
      {/* Order Details */}
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Order Details
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-700">
        <div className="font-medium text-gray-600">Order ID:</div>
        <div>{order.id}</div>

        <div className="font-medium text-gray-600">Status:</div>
        <div className={formatStatus(order.status)}>{order.status}</div>

        <div className="font-medium text-gray-600">Order Date:</div>
        <div>{order.orderDate}</div>
        <div className="font-medium text-gray-600">Tax:</div>
        <div>
          {formatMoney(order.tax)} <span className="text-gray-500">(10%)</span>
        </div>
        <div className="font-medium text-gray-600">Total:</div>
        <div>
          {formatMoney(order.total)}{" "}
          <span className="text-gray-500">
            ({order.orderDetails.length} items)
          </span>
        </div>

        <div className="font-medium text-gray-600">Payment Method:</div>
        <div>{order.paymentMethod}</div>

        <div className="font-medium text-gray-600">Shipping Method:</div>
        <div>{order.shippingMethod}</div>

        <div className="font-medium text-gray-600">Shipping Fee:</div>
        <div>
          {formatMoney(order.shippingFee)}{" "}
          <span className="text-gray-500">({order.shippingMethod})</span>
        </div>

        <div className="font-medium text-gray-600">Address:</div>
        <div>{order.address}</div>

        <div className="font-medium text-gray-600">Phone Number:</div>
        <div>{order.phoneNumber}</div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Order Items */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">Items:</h3>
      <ul className="space-y-4 text-gray-700">
        {order.orderDetails.map((item) => (
          <li key={item.id} className="border p-3 rounded bg-gray-50 shadow-sm">
            <div>
              <span className="font-medium text-gray-600">Name:</span>{" "}
              {item.product.name}
            </div>
            <div>
              <span className="font-medium text-gray-600">Quantity:</span>{" "}
              {item.quantity}
            </div>
            <div>
              <span className="font-medium text-gray-600">Price:</span>
              {formatMoney(item.price)}
            </div>
            <div>
              <span className="font-medium text-gray-600">Subtotal:</span>
              {formatMoney(item.price * item.quantity)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderItemComponent;
