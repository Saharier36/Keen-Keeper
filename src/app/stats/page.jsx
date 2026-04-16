"use client";

import { useTimeline } from "@/context/TimelineContext";
import { PieChartIcon } from "lucide-react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const StatsPage = () => {
  const { timeline } = useTimeline();

  const StatsData = [
    { name: "Call", value: timeline.filter((t) => t.type === "Call").length },
    { name: "Text", value: timeline.filter((t) => t.type === "Text").length },
    { name: "Video", value: timeline.filter((t) => t.type === "Video").length },
  ].filter((item) => item.value > 0);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-slate-800">
          Friendship Analytics
        </h1>

        <div className="card bg-white shadow-sm border border-slate-100 p-8">
          <h2 className="text-xl font-medium mb-6 text-emerald-900">
            By Interaction Type
          </h2>

          {timeline.length === 0 && (
            <div className="py-24 flex flex-col items-center justify-center text-slate-400 gap-3">
              <PieChartIcon size={48} strokeWidth={1.5} />
              <p>No data to visualize yet</p>
            </div>
          )}

          {timeline.length > 0 && (
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={StatsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {StatsData.map((item, index) => (
                      <Cell
                        key={index}
                        fill={
                          item.name === "Call"
                            ? "#244D3F"
                            : item.name === "Text"
                              ? "#7E35E1"
                              : "#37A163"
                        }
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
