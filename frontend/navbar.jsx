import { useSelector } from "react-redux";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaMoon,
  FaSun,
  FaUserCircle,
} from "react-icons/fa";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { notifications } = useSelector(
    (state) => state.notifications
  );

  const { user } = useSelector(
    (state) => state.auth
  );

  const unreadCount = notifications.filter(
    (item) => !item.isRead
  ).length;

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">

      {/* Left Section */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-xl text-gray-700"
        >
          <FaBars />
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-80">
          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search assets, employees..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        <span className="hidden lg:block text-sm text-gray-600">
          {today}
        </span>

        {/* Dark Mode Button (UI only for now) */}
        <button className="text-xl text-gray-700 hover:text-blue-600">
          <FaMoon />
        </button>

        {/* Notifications */}
        <div className="relative cursor-pointer">

          <FaBell className="text-2xl text-gray-700" />

          {unreadCount > 0 && (
            <span
              className="absolute -top-2 -right-2
                         bg-red-500 text-white
                         rounded-full
                         text-xs
                         px-2 py-0.5"
            >
              {unreadCount}
            </span>
          )}

        </div>

        {/* User */}
        <div className="flex items-center gap-3">

          <FaUserCircle
            size={34}
            className="text-blue-600"
          />

          <div className="hidden md:block">

            <h3 className="font-semibold">
              {user?.name || "Admin User"}
            </h3>

            <p className="text-sm text-gray-500">
              {user?.role || "Administrator"}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;