import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBuilding,
  FaBoxOpen,
  FaExchangeAlt,
  FaCalendarAlt,
  FaTools,
  FaClipboardCheck,
  FaChartBar,
  FaBell,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      title: "Organization",
      path: "/dashboard/departments",
      icon: <FaBuilding />,
    },
    {
      title: "Assets",
      path: "/dashboard/assets",
      icon: <FaBoxOpen />,
    },
    {
      title: "Allocation",
      path: "/dashboard/allocation",
      icon: <FaExchangeAlt />,
    },
    {
      title: "Bookings",
      path: "/dashboard/bookings",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Maintenance",
      path: "/dashboard/maintenance",
      icon: <FaTools />,
    },
    {
      title: "Audit",
      path: "/dashboard/audit",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Reports",
      path: "/dashboard/reports",
      icon: <FaChartBar />,
    },
    {
      title: "Notifications",
      path: "/dashboard/notifications",
      icon: <FaBell />,
    },
  ];

  return (
    <aside
      className={`bg-slate-900 text-white transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {sidebarOpen && (
          <h1 className="text-xl font-bold text-cyan-400">
            AssetFlow
          </h1>
        )}

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-xl"
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-3 mx-2 rounded-lg mb-2 transition ${
                isActive
                  ? "bg-cyan-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            {sidebarOpen && (
              <span className="font-medium">
                {item.title}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-0 w-full p-4 border-t border-slate-700">
        <button
          className="flex items-center gap-3 text-red-400 hover:text-red-300"
        >
          <FaSignOutAlt />

          {sidebarOpen && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;