
import React from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const salesData = [
  { month: "Jan", sales: 12400 },
  { month: "Feb", sales: 15600 },
  { month: "Mar", sales: 19800 },
  { month: "Apr", sales: 17500 },
  { month: "May", sales: 21300 },
  { month: "Jun", sales: 25600 },
  { month: "Jul", sales: 28900 },
  { month: "Aug", sales: 32500 },
  { month: "Sep", sales: 36800 },
  { month: "Oct", sales: 39500 },
  { month: "Nov", sales: 42100 },
  { month: "Dec", sales: 43600 },
];

export function SalesChart() {
  const formatYAxisValue = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}k`;
    }
    return `$${value}`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border p-3 rounded-lg shadow-md">
          <p className="font-medium text-sm">{label}</p>
          <p className="text-primary text-sm font-semibold">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={salesData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={formatYAxisValue} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
