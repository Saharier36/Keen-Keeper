import { ArrowDown } from 'lucide-react';

const FilterDropdown = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="dropdown w-full max-w-xs mb-4">
      <div
        tabIndex={0}
        role="button"
        className="btn w-40 md:w-full justify-between bg-white text-slate-500"
      >
        <span>{activeFilter === "All" ? "Filter timeline" : activeFilter}</span>

        <ArrowDown size={16} />
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm mt-1"
      >
        {["All", "Call", "Text", "Video"].map((category) => (
          <li key={category}>
            <a
              className={`py-3 ${activeFilter === category ? "bg-emerald-50 text-emerald-900 font-bold" : ""}`}
              onClick={() => {
                setActiveFilter(category);
                document.activeElement.blur();
              }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDropdown;