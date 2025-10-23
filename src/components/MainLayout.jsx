import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/Slice/authSlice";
import Footer from "../components/Footer"; // ✅ Import Footer

export default function MainLayout() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col z-10 relative">
        <div className="p-4 text-xl font-bold border-b">📘 Appointment Booking</div>
        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? "bg-blue-200 font-semibold" : ""
              }`
            }
          >
            📅 Calendar View
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? "bg-blue-200 font-semibold" : ""
              }`
            }
          >
            📋 User Dashboard
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `block px-4 py-2 rounded hover:bg-blue-100 ${
                isActive ? "bg-blue-200 font-semibold" : ""
              }`
            }
          >
            🛠️ Admin Panel
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-3 border-b z-50 relative">
          <h1 className="text-xl font-semibold"></h1>

          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">{user?.name || "User"}</span>
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name || "U"}`}
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-6 relative z-0">
          <Outlet />
        </main>

        {/* ✅ Global Footer */}
        <Footer />
      </div>
    </div>
  );
}
