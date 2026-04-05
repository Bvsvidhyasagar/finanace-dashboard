import { useState } from "react";
import Sidebar from "./components/layouts/Sidebar";
import Topbar from "./components/layouts/Topbar";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <div className="flex">
      
      <Sidebar />

      <div className="flex-1">
        
        <Topbar role={role} setRole={setRole} />

        <div className="p-5">
          <h1>Main Content</h1>
          <p>Current Role: {role}</p>
        </div>

      </div>

    </div>
  );
}

export default App;