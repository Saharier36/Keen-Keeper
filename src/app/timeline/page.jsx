"use client";
import { useTimeline } from "@/context/TimelineContext";
import { ArrowDown, FileX } from "lucide-react";

import call from "@/assets/call.png";
import text from "@/assets/text.png";
import video from "@/assets/video.png";
import Image from "next/image";
import { useState } from "react";

const TimelinePage = () => {
  const { timeline } = useTimeline();
  const [activeFilter, setActiveFilter] = useState("All");

  const filterTimeline =
    activeFilter === "All"
      ? timeline
      : timeline.filter((item) => item.type === activeFilter);

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

        <div>
          <div className="dropdown w-full max-w-xs mb-8">
            <div
              tabIndex={0}
              role="button"
              className="btn w-full justify-between border-slate-200 bg-white text-slate-500 h-12"
            >
              <span>
                {activeFilter === "All" ? "Filter timeline" : activeFilter}
              </span>

              <ArrowDown />
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
        </div>

        {filterTimeline.length === 0 && (
          <div className="card bg-base-100 shadow-sm border border-slate-100 py-20">
            <div className="flex flex-col items-center gap-3 justify-center text-gray-500">
              <FileX size={40} />
              <p className="text-lg">No data found</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {filterTimeline.map((card, index) => {
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
