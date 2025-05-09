
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUp, ArrowDown, MoreHorizontal } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  performance: number;
  change: {
    value: string;
    type: 'positive' | 'negative';
  };
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Sales Lead",
    avatar: "AJ",
    performance: 42,
    change: { value: "+12%", type: "positive" }
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Support Manager",
    avatar: "SM",
    performance: 36,
    change: { value: "+5%", type: "positive" }
  },
  {
    id: 3,
    name: "David Clark",
    role: "Account Executive",
    avatar: "DC",
    performance: 28,
    change: { value: "-3%", type: "negative" }
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Customer Success",
    avatar: "EW",
    performance: 31,
    change: { value: "+7%", type: "positive" }
  }
];

export function TeamPerformance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {teamData.map((member) => (
        <div key={member.id} className="flex items-center space-x-4 p-3 border rounded-lg">
          <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
            {member.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{member.name}</p>
            <p className="text-xs text-muted-foreground">{member.role}</p>
            <div className="flex items-center mt-1">
              <Badge variant="outline" className="text-xs mr-2">
                {member.performance} deals
              </Badge>
              <div className="flex items-center text-xs">
                {member.change.type === "positive" ? (
                  <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <span className={member.change.type === "positive" ? "text-green-500" : "text-red-500"}>
                  {member.change.value}
                </span>
              </div>
            </div>
          </div>
          <button className="p-1 rounded-full hover:bg-muted">
            <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      ))}
    </div>
  );
}
