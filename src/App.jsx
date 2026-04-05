import { useState } from "react";
import MainLayout from "./components/layouts/MainLayout"
import Transactions from "./components/pages/Transactions";


function App() {
  const [role, setRole] = useState("viewer");

  return (
    <MainLayout role={role} setRole={setRole}>
      <Transactions />
    </MainLayout>
  );
}

export default App;