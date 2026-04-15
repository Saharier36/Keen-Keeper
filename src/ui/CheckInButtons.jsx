"use client";
import { useTimeline } from "@/context/TimelineContext";
import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

const CheckInButtons = ({ friendName }) => {
  const { addEntry } = useTimeline();

  const handleCheckIn = (type) => {
    toast.dismiss();
    addEntry(type, friendName);
    toast.success(`${type} with ${friendName}`);
  };

  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={() => handleCheckIn("Call")}
          className="btn flex flex-col h-20 bg-slate-50 hover:bg-emerald-50"
        >
          <PhoneCall />
          Call
        </button>
        <button
          onClick={() => handleCheckIn("Text")}
          className="btn flex flex-col h-20 bg-slate-50 hover:bg-emerald-50"
        >
          <MessageSquareMore />
          Text
        </button>
        <button
          onClick={() => handleCheckIn("Video")}
          className="btn flex flex-col h-20 bg-slate-50 hover:bg-emerald-50"
        >
          <Video />
          Video
        </button>
      </div>
    </div>
  );
};

export default CheckInButtons;
