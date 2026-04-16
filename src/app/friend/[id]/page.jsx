import CheckInButtons from "@/ui/CheckInButtons/CheckInButtons";
import { Archive, BellOff, Trash2 } from "lucide-react";
import Image from "next/image";

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://keen-keeper-sigma.vercel.app/friends.json", {
    cache: "no-store",
  });

  const friends = await res.json();

  const friend = friends.find((f) => f.id === parseInt(id));

  const statusStyles = {
    "on-track": "bg-emerald-900",
    "almost due": "bg-amber-500",
    overdue: "bg-red-500",
  };

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friend;

  return (
    <div className="min-h-screen px-6 py-10 bg-slate-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4">
        <div className="flex flex-col gap-3">
          <div className="card text-center shadow-sm border border-slate-100 bg-base-100 p-6 space-y-1">
            <div className="avatar flex justify-center">
              <div className="w-24 rounded-full">
                <Image src={picture} alt={name} width={96} height={96} />
              </div>
            </div>
            <h3 className="font-bold text-lg">{name}</h3>
            <div>
              <span
                className={`badge text-white font-medium rounded-full capitalize ${statusStyles[status]}`}
              >
                {status}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="badge bg-green-100 text-green-800 rounded-full capitalize font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-slate-500 font-medium italic">
              &quot;{bio}&quot;
            </p>
            <p className="text-slate-500 text-sm font-medium">
              Preferred: {email}
            </p>
          </div>
          <button className="btn btn-block bg-white hover:bg-emerald-50">
            <BellOff />
            Snooze 2 weeks
          </button>
          <button className="btn btn-block bg-white hover:bg-emerald-50">
            <Archive />
            Archive
          </button>
          <button className="btn btn-block bg-white text-red-500 hover:bg-red-50">
            <Trash2 />
            Delete
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 text-center">
              <h3 className="text-emerald-900 text-3xl font-bold">
                {days_since_contact}
              </h3>
              <p className="text-slate-500 font-medium mt-1">
                Days Since Contact
              </p>
            </div>

            <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 text-center">
              <h3 className="text-emerald-900 text-3xl font-bold">{goal}</h3>
              <p className="text-slate-500 font-medium mt-1">Goal (Days)</p>
            </div>

            <div className="card bg-base-100 shadow-sm border border-slate-100 p-6 text-center">
              <h3 className="text-emerald-900 text-2xl font-bold">
                {new Date(next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <p className="text-slate-500 font-medium mt-1">Next Due</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body flex-row justify-between items-center">
              <div>
                <p className="text-emerald-900 text-xl font-medium mb-2">
                  Relationship Goal
                </p>
                <p className="text-slate-500 text-lg">
                  Connect every{" "}
                  <span className="font-bold text-black">{goal} days</span>
                </p>
              </div>
              <button className="btn btn-sm bg-slate-50 hover:bg-emerald-50">
                Edit
              </button>
            </div>
          </div>

          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <p className="text-emerald-900 text-xl font-medium mb-2">
                Quick Check-In
              </p>

              <CheckInButtons friendName={name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
