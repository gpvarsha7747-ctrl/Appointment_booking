import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Slice/authSlice";
import Navbar from "../components/Navbar"; // ✅ Import Navbar

export default function MainLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* ---------- Top Navbar ---------- */}
      <Navbar />

      {/* ---------- Sidebar + Main Content ---------- */}
      <div className="flex flex-1 overflow-hidden">
        {/* ---------- Sidebar ---------- */}
        <aside className="w-64 bg-white shadow-md flex flex-col">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-blue-600">
              Appointment App
            </h1>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 ${
                  isActive ? "bg-blue-500 text-white" : ""
                }`
              }
            >
              📋 Dashboard
            </NavLink>

            <NavLink
              to="/calendar"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 ${
                  isActive ? "bg-blue-500 text-white" : ""
                }`
              }
            >
              📅 Calendar
            </NavLink>

            {/* Show Admin link only if user is admin */}
            {user?.role === "admin" && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 ${
                    isActive ? "bg-blue-500 text-white" : ""
                  }`
                }
              >
                🛠️ Admin Panel
              </NavLink>
            )}
          </nav>

          {/* Logout button (optional since Navbar has logout too) */}
          <div className="p-4 border-t">
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* ---------- Main Content ---------- */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
