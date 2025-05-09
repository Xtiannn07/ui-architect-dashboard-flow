
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "../ui/avatar-group";
import { MoreHorizontal, Calendar } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  title: string;
  imageUrl: string;
  imageBlur: boolean;
  teamAvatars: string[];
  actions: string[];
  stats: {
    participants: number;
    dueDate: string;
  };
}

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="h-40 relative">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className={`h-full w-full object-cover ${project.imageBlur ? 'filter blur-sm hover:blur-none transition-all duration-300' : ''}`}
            />
            <div className="absolute top-2 right-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="bg-white/80 text-black rounded-full h-8 w-8">
                    <MoreHorizontal size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {project.actions.map((action, idx) => (
                    <DropdownMenuItem key={idx}>{action}</DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold">{project.title}</h3>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-1">
                <Calendar size={14} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(project.stats.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                {project.stats.participants} participants
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <AvatarGroup>
                {project.teamAvatars.map((avatar, idx) => (
                  <Avatar key={idx} className="border-2 border-white h-7 w-7">
                    <AvatarImage src={avatar} alt={`Team member ${idx + 1}`} />
                    <AvatarFallback className="text-xs">TM</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <div className="flex space-x-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
