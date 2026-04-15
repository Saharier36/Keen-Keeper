"use client";
import { useTimeline } from "@/context/TimelineContext";
import { FileX } from "lucide-react";

import call from "@/assets/call.png";
import text from "@/assets/text.png";
import video from "@/assets/video.png";
import Image from "next/image";

const TimelinePage = () => {
  const { timeline } = useTimeline();

  const getImg = (type) => {
    if (type === "Call") return call;
    if (type === "Text") return text;
    if (type === "Video") return video;
    return call;
  };

  return (
    <div className="py-15 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Timeline</h1>

        {timeline.length === 0 && (
          <div className="card bg-base-100 shadow-sm border border-slate-100 py-20">
            <div className="flex flex-col items-center gap-3 justify-center text-gray-500">
              <FileX size={40} />
              <p className="text-lg">No data found</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {timeline.map((card, index) => {
            const imgSrc = getImg(card.type);
            return (
              <div
                key={index}
                className="card bg-base-100 shadow-sm border border-slate-100 p-6"
              >
                <div className="flex items-center gap-4">
                  <Image src={imgSrc} alt={card.type} width={40} height={40} />
                  <div>
                    <h3>
                      <span className="font-medium text-xl text-emerald-900">
                        {card.type}
                      </span>{" "}
                      <span className="text-slate-500">
                        with {card.friendName}
                      </span>
                    </h3>
                    <p className="text-slate-500 font-medium">{card.date}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
