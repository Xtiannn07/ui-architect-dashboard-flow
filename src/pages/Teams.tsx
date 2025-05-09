
import React from "react";
import { HeaderWithAction } from "../components/profile/HeaderWithAction";
import { StoryCarousel } from "../components/profile/StoryCarousel";
import { PeopleToFollow } from "../components/profile/PeopleToFollow";
import { PostFeed } from "../components/profile/PostFeed";
import { TeamManagement } from "../components/profile/TeamManagement";
import { UpcomingMeetings } from "../components/profile/UpcomingMeetings";

const Teams = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Teams</h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-6">
          <HeaderWithAction
            title="Teams"
            actionLabel="Add Story"
          />
          
          <StoryCarousel
            users={[
              { name: "Abbie W.", avatar: "/placeholder.svg" },
              { name: "Boris U.", avatar: "/placeholder.svg" },
              { name: "Kay R.", avatar: "/placeholder.svg" },
              { name: "Tom M.", avatar: "/placeholder.svg" },
              { name: "Nicole N.", avatar: "/placeholder.svg" }
            ]}
          />
          
          <PostFeed
            posts={[
              {
                author: "Michael Lewis",
                avatar: "/placeholder.svg",
                content: "Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
                stats: { likes: 24, shares: 5 }
              },
              {
                author: "Jessica Stones",
                avatar: "/placeholder.svg",
                content: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
                stats: { likes: 18, shares: 3 }
              }
            ]}
          />
          
          <TeamManagement
            teams={[
              {
                name: "Digital Marketing",
                fields: { industry: "Marketing", rating: "4.5/5" },
                actions: ["Edit Team", "Add Member", "See Details", "Remove Team"],
                avatars: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
              },
              {
                name: "Design",
                fields: { industry: "UI/UX Design", rating: "4.8/5" },
                actions: ["Edit Team", "Add Member", "See Details", "Remove Team"],
                avatars: ["/placeholder.svg", "/placeholder.svg"]
              }
            ]}
          />
        </div>
        
        {/* Right Column */}
        <div className="xl:col-span-1 space-y-6">
          <PeopleToFollow
            users={[
              { name: "John Snow", role: "UI Designer", avatar: "/placeholder.svg", action: "Follow" },
              { name: "Jessica Smith", role: "Marketing Lead", avatar: "/placeholder.svg", action: "Follow" },
              { name: "Robert Brown", role: "Developer", avatar: "/placeholder.svg", action: "Follow" }
            ]}
          />
          
          <UpcomingMeetings
            meetings={[
              {
                title: "Slack Meet",
                time: "10:00 AM",
                meetingId: "123-456-789",
                participants: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
                action: "Join"
              },
              {
                title: "Invision",
                time: "2:00 PM",
                meetingId: "987-654-321",
                participants: ["/placeholder.svg", "/placeholder.svg"],
                action: "Join"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;
