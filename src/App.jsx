import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import Transactions from "./components/pages/Transactions";
import Insights from "./components/insights/Insights";
import Sidebar from "./components/layouts/Sidebar";
import Topbar from "./components/layouts/Topbar";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
    { id: 3, date: "2026-04-03", amount: 1000, category: "Freelance", type: "income" },
    { id: 4, date: "2026-04-04", amount: 300, category: "Shopping", type: "expense" },
  ]);

  return (
    <Router>
      <MainLayout role={role} setRole={setRole}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/transactions"
            element={
              <Transactions
                role={role}
                transactions={transactions}
                setTransactions={setTransactions}
              />
            }
          />
          <Route path="/insights" element={<Insights transactions={transactions} />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;