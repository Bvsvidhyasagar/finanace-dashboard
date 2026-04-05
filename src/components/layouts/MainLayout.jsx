import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = ({ children, role, setRole }) => {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <Topbar role={role} setRole={setRole} />

        {/* Main Content */}
        <div className="p-5 bg-gray-100 min-h-screen">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MainLayout;