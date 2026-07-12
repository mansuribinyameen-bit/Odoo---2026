import {
  FaBoxOpen,
  FaLaptop,
  FaTools,
  FaCalendarCheck,
  FaExchangeAlt,
  FaUndoAlt,
} from "react-icons/fa";

const KPICards = () => {
  const cards = [
    {
      id: 1,
      title: "Assets Available",
      value: 84,
      icon: <FaBoxOpen size={26} />,
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "Assets Allocated",
      value: 126,
      icon: <FaLaptop size={26} />,
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "Maintenance Today",
      value: 8,
      icon: <FaTools size={26} />,
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Active Bookings",
      value: 22,
      icon: <FaCalendarCheck size={26} />,
      color: "bg-purple-500",
    },
    {
      id: 5,
      title: "Pending Transfers",
      value: 5,
      icon: <FaExchangeAlt size={26} />,
      color: "bg-orange-500",
    },
    {
      id: 6,
      title: "Upcoming Returns",
      value: 17,
      icon: <FaUndoAlt size={26} />,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} text-white p-4 rounded-full`}
            >
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;