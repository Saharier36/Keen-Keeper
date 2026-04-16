import { Plus } from "lucide-react";

const Banner = ({ stats }) => {
  const { total, onTrack, overdue } = stats;

  const cardData = [
    { count: total, label: "Total Friends" },
    { count: onTrack, label: "On Track" },
    { count: overdue, label: "Need Attention" },
    { count: 12, label: "Interactions This Month" },
  ];

  return (
    <section className="py-10">
      <div className="text-center space-y-4 mb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>

        <button className="btn bg-emerald-900 text-white hover:bg-emerald-700">
          <Plus /> Add a Friend
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card text-center shadow-sm border border-slate-100 bg-base-100 p-6  transition-transform hover:scale-105"
          >
            <h3 className="text-3xl font-bold text-emerald-900">
              {card.count}
            </h3>
            <p className="text-slate-500">{card.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
