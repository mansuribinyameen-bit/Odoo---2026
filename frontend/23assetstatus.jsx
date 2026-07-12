import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Available", value: 84 },
  { name: "Allocated", value: 126 },
  { name: "Reserved", value: 15 },
  { name: "Maintenance", value: 8 },
  { name: "Lost", value: 2 },
  { name: "Retired", value: 5 },
];

const COLORS = [
  "#22C55E", // Green
  "#3B82F6", // Blue
  "#FACC15", // Yellow
  "#F97316", // Orange
  "#EF4444", // Red
  "#6B7280", // Gray
];

const AssetStatusChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">
        Asset Status Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AssetStatusChart;