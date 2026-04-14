"use client";

import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, friendName) => {
    const newEntry = {
      id: Date.now(),
      title: `${type} with ${friendName}`,
      type: type,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setTimeline((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);

export default TimelineProvider;
