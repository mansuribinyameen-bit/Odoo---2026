import { useNavigate } from "react-router-dom";
import {
  FaPlusCircle,
  FaCalendarAlt,
  FaTools,
} from "react-icons/fa";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      title: "Register Asset",
      description: "Add a new asset to the inventory.",
      icon: <FaPlusCircle size={30} />,
      color: "bg-blue-600",
      path: "/dashboard/assets/register",
    },
    {
      id: 2,
      title: "Book Resource",
      description: "Reserve a room, vehicle or shared asset.",
      icon: <FaCalendarAlt size={30} />,
      color: "bg-green-600",
      path: "/dashboard/bookings",
    },
    {
      id: 3,
      title: "Raise Maintenance",
      description: "Create a maintenance request.",
      icon: <FaTools size={30} />,
      color: "bg-orange-600",
      path: "/dashboard/maintenance",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="space-y-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => navigate(action.path)}
            className="w-full flex items-center gap-4 p-4 border rounded-xl hover:shadow-lg hover:border-cyan-500 transition text-left"
          >
            <div
              className={`${action.color} text-white p-4 rounded-lg`}
            >
              {action.icon}
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                {action.title}
              </h3>

              <p className="text-sm text-gray-500">
                {action.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;