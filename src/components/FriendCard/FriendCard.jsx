import Image from "next/image";

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;

  const statusStyles = {
    "on-track": "bg-emerald-900",
    "almost due": "bg-amber-500",
    overdue: "bg-red-500",
  };

  return (
    <div className="card text-center shadow-sm border border-slate-100 bg-base-100 p-6  transition-transform hover:scale-105 cursor-pointer">
      <div className="avatar flex justify-center mb-4">
        <div className="w-24 rounded-full">
          <Image src={picture} alt={name} width={96} height={96} />
        </div>
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-slate-500">{days_since_contact}d ago</p>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="badge bg-green-100 text-green-800 rounded-full capitalize font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2">
        <span
          className={`badge text-white rounded-full capitalize ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
