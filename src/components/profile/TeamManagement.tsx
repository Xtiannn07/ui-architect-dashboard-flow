
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "../ui/avatar-group";
import { getInitials } from "../../utils/stringUtils";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Team {
  name: string;
  fields: {
    industry: string;
    rating: string;
  };
  actions: string[];
  avatars: string[];
}

interface TeamManagementProps {
  teams: Team[];
}

export const TeamManagement = ({ teams }: TeamManagementProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {teams.map((team, index) => (
          <div key={index} className="p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{team.name}</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={18} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {team.actions.map((action, idx) => (
                    <DropdownMenuItem key={idx}>{action}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div>
                <p className="text-xs text-muted-foreground">Industry</p>
                <p className="text-sm">{team.fields.industry}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Rating</p>
                <p className="text-sm">{team.fields.rating}</p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <AvatarGroup className="justify-start">
                {team.avatars.map((avatar, idx) => (
                  <Avatar key={idx} className="border-2 border-white dark:border-slate-900 h-8 w-8">
                    <AvatarImage src={avatar} alt={`Team member ${idx + 1}`} />
                    <AvatarFallback className="text-xs">TM</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <Button size="sm" variant="outline">See Details</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
