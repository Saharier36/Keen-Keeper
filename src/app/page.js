import Banner from "@/components/Banner/Banner";
import FriendCard from "@/components/FriendCard/FriendCard";

export default async function Home() {
  const res = await fetch("https://keen-keeper-sigma.vercel.app/friends.json");
  const friends = await res.json();

  return (
    <div className="bg-slate-50">
      <Banner />

      <div className="max-w-6xl mx-auto border-t-2 border-base-300 px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Your Friends</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
