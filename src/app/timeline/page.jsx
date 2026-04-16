"use client";
import { useTimeline } from "@/context/TimelineContext";
import { FileX } from "lucide-react";

import call from "@/assets/call.png";
import text from "@/assets/text.png";
import video from "@/assets/video.png";

import Image from "next/image";
import { useState } from "react";

import FilterDropdown from "@/ui/FilterDropdown/FilterDropdown";
import SearchBar from "@/ui/SearchBar/SearchBar";
import SortSelect from "@/ui/SortSelect/SortSelect";

const TimelinePage = () => {
  const { timeline } = useTimeline();
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const timelineItems = timeline
    .filter((item) => {
      const typeMatch = activeFilter === "All" || item.type === activeFilter;
      const searchMatch = item.friendName
        .toLowerCase()
        .includes(search.toLowerCase());
      return typeMatch && searchMatch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const getImg = (type) => {
    if (type === "Call") return call;
    if (type === "Text") return text;
    if (type === "Video") return video;
    return call;
  };

  return (
    <div className="min-h-screen py-10 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Timeline</h1>

        <div className="flex flex-col sm:flex-row sm:justify-between">
          <FilterDropdown
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <div className="flex gap-2 mb-4">
            <SearchBar search={search} setSearch={setSearch} />
            <SortSelect sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>
        </div>

        {timelineItems.length === 0 && (
          <div className="card bg-base-100 shadow-sm border border-slate-100 py-20">
            <div className="flex flex-col items-center gap-3 justify-center text-slate-400">
              <FileX size={48} strokeWidth={1.5} />
              <p>No data found</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {timelineItems.map((card, index) => {
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
