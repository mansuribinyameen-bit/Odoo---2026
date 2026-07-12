import { FaClock, FaExclamationTriangle } from "react-icons/fa";

const UpcomingReturns = () => {
  const returns = [
    {
      id: 1,
      assetTag: "AF-0001",
      assetName: "Dell Latitude 5440",
      employee: "Raj Mehta",
      returnDate: "15 Jul 2026",
      daysLeft: 3,
      status: "Upcoming",
    },
    {
      id: 2,
      assetTag: "AF-0007",
      assetName: "HP EliteBook",
      employee: "Priya Shah",
      returnDate: "12 Jul 2026",
      daysLeft: 0,
      status: "Due Today",
    },
    {
      id: 3,
      assetTag: "AF-0010",
      assetName: "MacBook Pro",
      employee: "Amit Patel",
      returnDate: "09 Jul 2026",
      daysLeft: -3,
      status: "Overdue",
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-700";

      case "Due Today":
        return "bg-yellow-100 text-yellow-700";

      case "Overdue":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Upcoming Returns
        </h2>

        <FaClock className="text-cyan-600 text-2xl" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Asset</th>
              <th className="text-left py-3">Employee</th>
              <th className="text-left py-3">Return Date</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            {returns.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="py-4">
                  <div className="font-semibold">
                    {item.assetTag}
                  </div>

                  <div className="text-gray-500 text-xs">
                    {item.assetName}
                  </div>
                </td>

                <td>{item.employee}</td>

                <td>{item.returnDate}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadge(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                  {item.status === "Overdue" && (
                    <FaExclamationTriangle
                      className="inline ml-2 text-red-500"
                    />
                  )}
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UpcomingReturns;