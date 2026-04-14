import { Plus } from "lucide-react";
import Link from "next/link";

const Banner = () => {
  const cardData = [
    { count: 10, label: "Total Friends" },
    { count: 3, label: "On Track" },
    { count: 6, label: "Need Attention" },
    { count: 12, label: "Interactions This Month" },
  ];

  return (
    <section className="py-12 rounded-3xl">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <Link href="/addFriend">
          <button className="btn bg-emerald-900 text-white hover:bg-emerald-700">
            <Plus /> Add a Friend
          </button>
        </Link>
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
