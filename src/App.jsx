import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./components/pages/Dashboard";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <MainLayout role={role} setRole={setRole}>
      <Dashboard />
    </MainLayout>
  );
}

export default App;