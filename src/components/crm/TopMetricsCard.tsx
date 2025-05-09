
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TopMetricsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ReactNode;
  description: string;
  accentColor: string;
}

export function TopMetricsCard({
  title,
  value,
  change,
  changeType,
  icon,
  description,
  accentColor,
}: TopMetricsCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`h-1 ${accentColor} w-full`}></div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-muted-foreground">{title}</div>
          <div className={`p-2 rounded-full ${accentColor} bg-opacity-20`}>
            {icon}
          </div>
        </div>
        <div className="mt-2">
          <div className="text-2xl font-bold">{value}</div>
          <div className="flex items-center gap-1 mt-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  <div className="flex items-center text-xs font-medium">
                    {changeType === "positive" ? (
                      <ArrowUp className="h-3 w-3 text-green-500" />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={changeType === "positive" ? "text-green-500" : "text-red-500"}>
                      {change}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="text-xs text-muted-foreground">compared to last period</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
