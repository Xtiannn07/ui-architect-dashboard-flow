
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: string;
  changeType: "positive" | "negative";
  gradient: "blue" | "green" | "red" | "orange" | "purple";
}

export function StatCard({ title, value, icon, change, changeType, gradient }: StatCardProps) {
  const gradientClass = `bg-gradient-${gradient}`;
  const changeColor = changeType === "positive" ? "text-green-600" : "text-red-600";
  const changePrefix = changeType === "positive" ? "+" : "";

  return (
    <div className="stat-card bg-white dark:bg-slate-800 shadow-card transform hover:shadow-lg">
      <div className={`stat-card-icon ${gradientClass}`}>
        {icon}
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
      <div className="flex items-center gap-1 mt-2">
        <span className={`text-xs font-semibold ${changeColor}`}>
          {changePrefix}{change}
        </span>
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          from previous period
        </span>
      </div>
    </div>
  );
}
