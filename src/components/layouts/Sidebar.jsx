import { FaHome, FaExchangeAlt, FaChartPie } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10">
        Finance
      </h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-6">
        
        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <FaExchangeAlt />
          <span>Transactions</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <FaChartPie />
          <span>Insights</span>
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;