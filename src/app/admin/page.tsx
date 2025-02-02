"use client";

export default function AdminDashboard() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mt-14 mb-5">Admin Dashboard</h1>
      <p className="text-lg mb-5">Welcome to the admin panel. Here you can manage products, orders, and more.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Total Products */}
        <div className="p-5 bg-blue-500 text-white rounded shadow">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">120</p>
        </div>

        {/* Total Orders */}
        <div className="p-5 bg-green-500 text-white rounded shadow">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">75</p>
        </div>

        {/* Total Revenue */}
        <div className="p-5 bg-yellow-500 text-white rounded shadow">
          <h2 className="text-xl font-semibold">Total Revenue</h2>
          <p className="text-2xl">$5,000</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Quick Links</h2>
        <div className="mt-3 flex gap-4">
          <a href="/admin/products" className="p-3 bg-gray-800 text-white rounded">
            Manage Products
          </a>
          <a href="/admin/orders" className="p-3 bg-gray-800 text-white rounded">
            Manage Orders
          </a>
          <a href="/admin/users" className="p-3 bg-gray-800 text-white rounded">
            Manage Users
          </a>
        </div>
      </div>
    </div>
  );
}

  