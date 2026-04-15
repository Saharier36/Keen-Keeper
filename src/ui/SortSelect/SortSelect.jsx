const SortSelect = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="relative">
      <select
        className="select select-bordered w-full bg-white text-slate-600"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  );
};

export default SortSelect;
