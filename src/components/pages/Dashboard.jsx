import SummaryCard from "../dashboard/SummaryCard";
import BalanceChart from "../dashboard/BalanceChart";
import CategoryChart from "../dashboard/CategoryChart";
const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <SummaryCard title="Total Balance" amount="50,000" />
        <SummaryCard title="Income" amount="70,000" />
        <SummaryCard title="Expenses" amount="20,000" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BalanceChart />
        <CategoryChart />
      </div>
    </div>
  );
};

export default Dashboard;