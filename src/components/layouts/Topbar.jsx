import { FaUserCircle } from "react-icons/fa";

const Topbar = ({ role, setRole }) => {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      
      {/* Page Title */}
      <h1 className="text-xl font-semibold">Dashboard</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Role Switch */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border rounded px-3 py-1"
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

        {/* User Icon */}
        <FaUserCircle size={28} />

      </div>
    </div>
  );
};

export default Topbar;