import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [role, setRole] = useState("viewer");

  return (
    <MainLayout role={role} setRole={setRole}>
      <h1 className="text-2xl font-bold">Dashboard Page</h1>
      <p>Current Role: {role}</p>
    </MainLayout>
  );
}

export default App;