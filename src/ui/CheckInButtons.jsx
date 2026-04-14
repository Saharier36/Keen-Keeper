import { MessageSquareMore, PhoneCall, Video } from "lucide-react";
import Link from "next/link";
import React from "react";

const CheckInButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <Link href="#" className="btn flex flex-col h-20">
        <PhoneCall />
        Call
      </Link>
      <Link href="#" className="btn flex flex-col h-20">
        <MessageSquareMore />
        Text
      </Link>
      <Link href="#" className="btn flex flex-col h-20">
        <Video />
        Video
      </Link>
    </div>
  );
};

export default CheckInButtons;
