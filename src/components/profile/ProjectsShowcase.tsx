
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "../ui/avatar-group";
import { getInitials } from "../../utils/stringUtils";

interface Project {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageBlur: boolean;
  cta: string;
  teamAvatars: string[];
}

interface ProjectsShowcaseProps {
  projects: Project[];
}

export const ProjectsShowcase = ({ projects }: ProjectsShowcaseProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg">
            <div className="relative h-40 w-full">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className={`h-full w-full object-cover ${project.imageBlur ? 'filter blur-sm group-hover:blur-none transition-all duration-300' : ''}`}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-xs">{project.subtitle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <AvatarGroup>
                    {project.teamAvatars.map((avatar, idx) => (
                      <Avatar key={idx} className="border-2 border-white h-7 w-7">
                        <AvatarImage src={avatar} alt={`Team member ${idx + 1}`} />
                        <AvatarFallback className="text-xs">TM</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  <Button size="sm" variant="outline" className="bg-white/20 text-white hover:bg-white hover:text-black transition-all duration-300">
                    {project.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
