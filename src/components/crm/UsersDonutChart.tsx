
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const userData = [
  { name: "Admins", value: 12, color: "#8B5CF6" },
  { name: "Managers", value: 28, color: "#3B82F6" },
  { name: "Clients", value: 160, color: "#10B981" }
];

export function UsersDonutChart() {
  const totalUsers = userData.reduce((sum, item) => sum + item.value, 0);

  const renderLegend = (props: any) => {
    const { payload } = props;
    
    return (
      <div className="flex flex-col items-center justify-center gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-xs">{entry.value}: {entry.payload.value} users</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-[200px] w-full flex flex-col items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={userData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={5}
            dataKey="value"
          >
            {userData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            content={renderLegend} 
            verticalAlign="bottom" 
            align="center" 
            layout="vertical"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute text-center">
        <div className="text-2xl font-bold">{totalUsers}</div>
        <div className="text-xs text-muted-foreground">Total Users</div>
      </div>
    </div>
  );
}
