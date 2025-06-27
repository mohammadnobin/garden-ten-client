import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col dark:bg-red-400 lg:flex-row bg-[rgb(60,60,60)] text-white font-sans">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 dark:bg-red-800 bg-[#216d20] p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">🌿 Dashboard</h2>
          <nav className="space-y-3">
                      {/* 🏠 Home Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full cursor-pointer bg-white text-[#216d20] font-semibold py-2 rounded shadow hover:bg-green-100 transition"
          >
            🏠 Go Home
          </button>
            <NavLink
              to="/dashboard/all-items"
              className={({ isActive }) =>
                isActive
                  ? "block bg-white text-[#216d20] font-semibold px-4 py-2 rounded shadow"
                  : "block hover:bg-[#1a561b] px-4 py-2 rounded transition-all"
              }
            >
              📋 All Items
            </NavLink>
            <NavLink
              to="/dashboard/add-item"
              className={({ isActive }) =>
                isActive
                  ? "block bg-white text-[#216d20] font-semibold px-4 py-2 rounded shadow"
                  : "block hover:bg-[#1a561b] px-4 py-2 rounded transition-all"
              }
            >
              ➕ Add Item
            </NavLink>
            <NavLink
              to="/dashboard/my-item"
              className={({ isActive }) =>
                isActive
                  ? "block bg-white text-[#216d20] font-semibold px-4 py-2 rounded shadow"
                  : "block hover:bg-[#1a561b] px-4 py-2 rounded transition-all"
              }
            >
              🗂 My Item
            </NavLink>
          </nav>

        </div>

        <footer className="text-center text-sm text-white/70 mt-10">
          &copy; 2025 YourSite
        </footer>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-white text-[rgb(60,60,60)] rounded-tl-2xl overflow-hidden">
        {/* Header */}
        <header className="bg-[#216d20] text-white px-6 py-4 shadow-md flex flex-col sm:flex-row justify-between items-center gap-2">
          <h1 className="text-xl font-semibold">🌱 Welcome to Your Dashboard</h1>
          <p className="text-sm opacity-80">Manage your items smartly</p>
        </header>

        {/* Dashboard Cards */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50">
          <div className="bg-white border rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold text-[#216d20] mb-2">Total Items</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white border rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold text-[#216d20] mb-2">My Items</h3>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-white border rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold text-[#216d20] mb-2">Pending Items</h3>
            <p className="text-3xl font-bold">2</p>
          </div>
        </div>

        {/* Route content */}
        <main className="p-6 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
