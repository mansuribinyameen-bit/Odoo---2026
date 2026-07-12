import {
  FaBoxOpen,
  FaExchangeAlt,
  FaCalendarAlt,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      icon: <FaBoxOpen />,
      title: "New Asset Registered",
      description: "Dell Latitude 5440 (AF-0004) added to IT Department.",
      time: "5 minutes ago",
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: <FaExchangeAlt />,
      title: "Asset Allocated",
      description: "Laptop AF-0001 allocated to Raj Mehta.",
      time: "30 minutes ago",
      color: "bg-green-500",
    },
    {
      id: 3,
      icon: <FaCalendarAlt />,
      title: "Resource Booked",
      description: "Conference Room B2 booked from 2:00 PM to 3:00 PM.",
      time: "1 hour ago",
      color: "bg-purple-500",
    },
    {
      id: 4,
      icon: <FaTools />,
      title: "Maintenance Approved",
      description: "Maintenance request for Toyota Innova approved.",
      time: "2 hours ago",
      color: "bg-orange-500",
    },
    {
      id: 5,
      icon: <FaClipboardCheck />,
      title: "Audit Completed",
      description: "Quarterly IT asset audit completed successfully.",
      time: "Yesterday",
      color: "bg-cyan-600",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-4 border-b pb-4 last:border-b-0"
          >
            <div
              className={`${activity.color} text-white p-3 rounded-full`}
            >
              {activity.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {activity.title}
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                {activity.description}
              </p>

              <span className="text-xs text-gray-400">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;