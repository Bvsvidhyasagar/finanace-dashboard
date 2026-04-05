const FilterBar = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="all">All</option>
      <option value="income">Income</option>
      <option value="expense">Expense</option>
    </select>
  );
};

export default FilterBar;