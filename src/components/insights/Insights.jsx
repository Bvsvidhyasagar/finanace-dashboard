const Insights = ({ transactions }) => {
  if (!transactions.length) {
    return <p>No data available</p>;
  }

  const categoryMap = {};

  transactions.forEach((txn) => {
    if (txn.type === "expense") {
      categoryMap[txn.category] =
        (categoryMap[txn.category] || 0) + txn.amount;
    }
  });

  const highestCategory = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b
  );

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Insights</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Top Spending Category</h2>
          <p className="text-xl font-bold mt-2">
            {highestCategory || "N/A"}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Total Income</h2>
          <p className="text-xl font-bold mt-2 text-green-500">
            ₹ {totalIncome}
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-gray-500">Total Expenses</h2>
          <p className="text-xl font-bold mt-2 text-red-500">
            ₹ {totalExpense}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Insights;