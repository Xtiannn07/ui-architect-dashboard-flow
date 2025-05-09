
import React from "react";
import { SectionHeader } from "../components/profile/SectionHeader";
import { ProfileQuickNav } from "../components/profile/ProfileQuickNav";
import { ProjectGrid } from "../components/profile/ProjectGrid";
import { AddNewProjectButton } from "../components/profile/AddNewProjectButton";

const AllProjects = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Projects</h1>
      
      <SectionHeader
        title="Some of Our Awesome Projects"
        intro="From web design to complex applications, explore our diverse portfolio of projects. Each project showcases our expertise and dedication to excellence."
      />
      
      <div className="flex justify-between items-center">
        <ProfileQuickNav
          avatarUrl="/placeholder.svg"
          name="Alec Thompson"
          role="CEO / Co-Founder"
        />
        
        <AddNewProjectButton label="New Project" />
      </div>
      
      <ProjectGrid
        projects={[
          {
            title: "Slack Bot",
            imageUrl: "/placeholder.svg",
            imageBlur: true,
            teamAvatars: ["/placeholder.svg", "/placeholder.svg"],
            actions: ["Action", "Another action", "Something else here"],
            stats: { participants: 5, dueDate: "2022-03-02" }
          },
          {
            title: "Premium Support",
            imageUrl: "/placeholder.svg",
            imageBlur: true,
            teamAvatars: ["/placeholder.svg", "/placeholder.svg"],
            actions: ["Action", "Another action", "Something else here"],
            stats: { participants: 8, dueDate: "2022-04-15" }
          },
          {
            title: "Design System",
            imageUrl: "/placeholder.svg",
            imageBlur: true,
            teamAvatars: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
            actions: ["Action", "Another action", "Something else here"],
            stats: { participants: 3, dueDate: "2022-05-10" }
          },
          {
            title: "Mobile App",
            imageUrl: "/placeholder.svg",
            imageBlur: true,
            teamAvatars: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
            actions: ["Action", "Another action", "Something else here"],
            stats: { participants: 6, dueDate: "2022-05-30" }
          }
        ]}
      />
    </div>
  );
};

export default AllProjects;
