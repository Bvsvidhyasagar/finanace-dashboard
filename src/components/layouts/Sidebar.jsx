import { FaHome, FaExchangeAlt, FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">Finance</h1>

      <nav className="flex flex-col gap-6">
        
        <Link to="/" className="flex items-center gap-3 hover:text-gray-300">
          <FaHome />
          <span>Dashboard</span>
        </Link>

        <Link to="/transactions" className="flex items-center gap-3 hover:text-gray-300">
          <FaExchangeAlt />
          <span>Transactions</span>
        </Link>

        <Link to="/insights" className="flex items-center gap-3 hover:text-gray-300">
          <FaChartPie />
          <span>Insights</span>
        </Link>

      </nav>
    </div>
  );
};

export default Sidebar;