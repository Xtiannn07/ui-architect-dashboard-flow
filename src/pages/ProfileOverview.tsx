
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileHeaderCard } from "../components/profile/ProfileHeaderCard";
import { PlatformSettings } from "../components/profile/PlatformSettings";
import { ProfileInformation } from "../components/profile/ProfileInformation";
import { ConversationsList } from "../components/profile/ConversationsList";
import { ProjectsShowcase } from "../components/profile/ProjectsShowcase";

const ProfileOverview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile Overview</h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-1 space-y-6">
          <ProfileHeaderCard
            avatarUrl="/placeholder.svg"
            name="Alec Thompson"
            role="CEO / Co-Founder"
            quickActions={["App", "Messages", "Settings"]}
          />
          
          <PlatformSettings
            sections={[
              {
                title: "Account",
                toggles: [
                  "Email me when someone follows me",
                  "Email me when someone answers on my post",
                  "Email me when someone mentions me"
                ]
              },
              {
                title: "Application",
                toggles: [
                  "New launches and projects",
                  "Monthly product updates",
                  "Subscribe to newsletter"
                ]
              }
            ]}
          />
        </div>
        
        {/* Right Column */}
        <div className="xl:col-span-2 space-y-6">
          <ProfileInformation
            fields={[
              { label: "Full Name", value: "Alec Thompson" },
              { label: "Mobile", value: "(44) 123 1234 123" },
              { label: "Email", value: "alecthompson@mail.com" },
              { label: "Location", value: "USA" },
              { label: "Social Links", value: "https://twitter.com/alecthompson" }
            ]}
            actions={["Edit Profile"]}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ConversationsList
              threads={[
                { name: "Sophie B.", avatar: "/placeholder.svg", message: "Hi! I need more information about..." },
                { name: "Anne Marie", avatar: "/placeholder.svg", message: "Awesome work, can you please..." },
                { name: "Ivanna", avatar: "/placeholder.svg", message: "About that presentation you gave yesterday..." },
                { name: "Peterson", avatar: "/placeholder.svg", message: "Have you had a chance to look at the..." },
                { name: "Nick Daniel", avatar: "/placeholder.svg", message: "Can we schedule a call this afternoon?" }
              ]}
            />
            
            <ProjectsShowcase
              projects={[
                {
                  title: "Modern",
                  subtitle: "As Uber works through a huge amount of internal management turmoil.",
                  imageUrl: "/placeholder.svg",
                  imageBlur: true,
                  cta: "View Project",
                  teamAvatars: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
                },
                {
                  title: "Scandinavian",
                  subtitle: "Music is something that everyone has their own specific opinion about.",
                  imageUrl: "/placeholder.svg",
                  imageBlur: true,
                  cta: "View Project",
                  teamAvatars: ["/placeholder.svg", "/placeholder.svg"]
                },
                {
                  title: "Minimalist",
                  subtitle: "Different people have different taste, and various types of music.",
                  imageUrl: "/placeholder.svg",
                  imageBlur: true,
                  cta: "View Project",
                  teamAvatars: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
