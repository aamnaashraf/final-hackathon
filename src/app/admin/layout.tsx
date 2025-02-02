import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5 mt-11">
        <h2 className="text-xl font-bold mb-5 mt-4">Admin Panel</h2>
        <nav className="space-y-3">
          <Link href="/admin" className="block p-2 bg-gray-700 rounded">Dashboard</Link>
          <Link href="/admin/products" className="block p-2 bg-gray-700 rounded">Manage Products</Link>
          <Link href="/admin/order" className="block p-2 bg-gray-700 rounded">Orders</Link>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
}

