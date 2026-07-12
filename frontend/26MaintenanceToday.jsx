import {
  FaTools,
  FaUserCog,
  FaExclamationCircle,
} from "react-icons/fa";

const maintenanceList = [
  {
    id: 1,
    assetTag: "AF-0003",
    assetName: "Toyota Innova",
    technician: "Amit Patel",
    priority: "High",
    status: "In Progress",
  },
  {
    id: 2,
    assetTag: "AF-0015",
    assetName: "Dell Latitude 7420",
    technician: "Rahul Shah",
    priority: "Medium",
    status: "Approved",
  },
  {
    id: 3,
    assetTag: "AF-0020",
    assetName: "Canon Printer",
    technician: "Not Assigned",
    priority: "Low",
    status: "Pending",
  },
];

const priorityBadge = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";

    case "Medium":
      return "bg-yellow-100 text-yellow-700";

    case "Low":
      return "bg-green-100 text-green-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const statusBadge = (status) => {
  switch (status) {
    case "Pending":
      return "bg-gray-100 text-gray-700";

    case "Approved":
      return "bg-blue-100 text-blue-700";

    case "In Progress":
      return "bg-orange-100 text-orange-700";

    case "Resolved":
      return "bg-green-100 text-green-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

const MaintenanceToday = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Maintenance Today
        </h2>

        <FaTools className="text-orange-500 text-2xl" />
      </div>

      <div className="space-y-4">
        {maintenanceList.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  {item.assetTag}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.assetName}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityBadge(
                  item.priority
                )}`}
              >
                {item.priority}
              </span>
            </div>

            <div className="flex items-center mt-4 text-gray-600 text-sm">
              <FaUserCog className="mr-2" />

              {item.technician}
            </div>

            <div className="mt-4 flex justify-between items-center">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBadge(
                  item.status
                )}`}
              >
                {item.status}
              </span>

              {item.priority === "High" && (
                <FaExclamationCircle className="text-red-500 text-lg" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceToday;