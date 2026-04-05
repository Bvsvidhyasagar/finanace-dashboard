import { useState } from "react";
import SearchBar from "../transactions/SearchBar";
import FilterBar from "../transactions/FilterBar";

const Transactions = ({ role }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 200, category: "Food", type: "expense" },
    { id: 3, date: "2026-04-03", amount: 1000, category: "Freelance", type: "income" },
    { id: 4, date: "2026-04-04", amount: 300, category: "Shopping", type: "expense" },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Add Transaction Handler
  const handleAddTransaction = (newTxn) => {
    setTransactions([
      ...transactions,
      { id: Date.now(), ...newTxn },
    ]);
    setShowModal(false);
  };

  // Filter Logic
  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = txn.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" || txn.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>

      {/* Admin Button */}
      {role === "admin" && (
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          + Add Transaction
        </button>
      )}

      {/* Controls */}
      <div className="flex gap-4 mb-4">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar filter={filter} setFilter={setFilter} />
      </div>

      {/* Table */}
      <div className="bg-white p-5 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          
          <thead>
            <tr className="border-b">
              <th className="py-2">Date</th>
              <th className="py-2">Category</th>
              <th className="py-2">Type</th>
              <th className="py-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => (
                <tr key={txn.id} className="border-b">
                  <td className="py-2">{txn.date}</td>
                  <td className="py-2">{txn.category}</td>
                  <td className="py-2 capitalize">{txn.type}</td>
                  <td
                    className={`py-2 font-semibold ${
                      txn.type === "income"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    ₹ {txn.amount}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          
          <div className="bg-white p-6 rounded w-80">
            <h2 className="text-lg font-bold mb-4">Add Transaction</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;

                handleAddTransaction({
                  date: form.date.value,
                  category: form.category.value,
                  amount: Number(form.amount.value),
                  type: form.type.value,
                });
              }}
              className="flex flex-col gap-3"
            >
              <input
                name="date"
                type="date"
                className="border p-2 rounded"
                required
              />
              <input
                name="category"
                placeholder="Category"
                className="border p-2 rounded"
                required
              />
              <input
                name="amount"
                type="number"
                placeholder="Amount"
                className="border p-2 rounded"
                required
              />

              <select name="type" className="border p-2 rounded">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>

              <button className="bg-blue-500 text-white py-2 rounded">
                Add
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="mt-3 text-sm text-gray-500"
            >
              Cancel
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Transactions;