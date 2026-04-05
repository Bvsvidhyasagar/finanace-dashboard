import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", balance: 20000 },
  { name: "Feb", balance: 30000 },
  { name: "Mar", balance: 25000 },
  { name: "Apr", balance: 40000 },
];

const BalanceChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;