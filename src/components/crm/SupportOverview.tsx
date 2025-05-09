
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const supportData = [
  { name: "Open", value: 12, color: "#F59E0B" },
  { name: "Pending", value: 8, color: "#3B82F6" },
  { name: "Resolved", value: 24, color: "#10B981" }
];

export function SupportOverview() {
  const totalTickets = supportData.reduce((sum, item) => sum + item.value, 0);
  
  const stats = [
    { label: "Open Tickets", value: "12", color: "bg-amber-500" },
    { label: "Resolved Today", value: "8", color: "bg-green-500" },
    { label: "Avg. Response", value: "42m", color: "bg-blue-500" }
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-2 h-2 ${stat.color} rounded-full mx-auto mb-1`}></div>
            <div className="text-sm font-medium">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
      
      <div className="h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={supportData}
              cx="50%"
              cy="50%"
              innerRadius={35}
              outerRadius={50}
              paddingAngle={2}
              dataKey="value"
            >
              {supportData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <div className="flex justify-center gap-4 mt-2">
          {supportData.map((entry, index) => (
            <div key={index} className="flex items-center gap-1">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-xs">{entry.name}: {entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
