import {
  FaBell,
  FaCheckCircle,
  FaTools,
  FaCalendarAlt,
  FaExchangeAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "Asset Assigned",
    message: "Dell Latitude 5440 assigned to Raj Mehta.",
    type: "success",
    time: "5 min ago",
    icon: <FaCheckCircle />,
  },
  {
    id: 2,
    title: "Maintenance Approved",
    message: "Toyota Innova maintenance request approved.",
    type: "warning",
    time: "15 min ago",
    icon: <FaTools />,
  },
  {
    id: 3,
    title: "Booking Reminder",
    message: "Conference Room B2 booking starts in 30 minutes.",
    type: "info",
    time: "30 min ago",
    icon: <FaCalendarAlt />,
  },
  {
    id: 4,
    title: "Transfer Approved",
    message: "Laptop AF-0001 transfer request approved.",
    type: "primary",
    time: "1 hour ago",
    icon: <FaExchangeAlt />,
  },
  {
    id: 5,
    title: "Overdue Return",
    message: "MacBook Pro AF-0010 is overdue for return.",
    type: "danger",
    time: "Yesterday",
    icon: <FaExclamationTriangle />,
  },
];

const getColor = (type) => {
  switch (type) {
    case "success":
      return "bg-green-100 text-green-600";

    case "warning":
      return "bg-yellow-100 text-yellow-600";

    case "info":
      return "bg-cyan-100 text-cyan-600";

    case "primary":
      return "bg-blue-100 text-blue-600";

    case "danger":
      return "bg-red-100 text-red-600";

    default:
      return "bg-gray-100 text-gray-600";
  }
};

const NotificationPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          Notifications
        </h2>

        <FaBell className="text-cyan-600 text-2xl" />
      </div>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border-b pb-4 last:border-b-0"
          >
            <div
              className={`p-3 rounded-full ${getColor(item.type)}`}
            >
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {item.message}
              </p>

              <span className="text-xs text-gray-400">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700
                   text-white py-3 rounded-lg font-semibold transition"
      >
        View All Notifications
      </button>
    </div>
  );
};

export default NotificationPanel;