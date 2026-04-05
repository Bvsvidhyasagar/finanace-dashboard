const SummaryCard = ({ title, amount }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-2xl font-bold mt-2">₹ {amount}</p>
    </div>
  );
};

export default SummaryCard;