
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "../../utils/stringUtils";
import { Plus } from "lucide-react";

interface User {
  name: string;
  avatar: string;
}

interface StoryCarouselProps {
  users: User[];
}

export const StoryCarousel = ({ users }: StoryCarouselProps) => {
  return (
    <div className="flex overflow-x-auto space-x-4 py-2 scrollbar-none">
      <div className="flex-shrink-0 flex flex-col items-center space-y-1">
        <div className="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600 cursor-pointer">
          <Plus size={24} className="text-slate-400" />
        </div>
        <span className="text-xs">Add Story</span>
      </div>
      
      {users.map((user, index) => (
        <div key={index} className="flex-shrink-0 flex flex-col items-center space-y-1">
          <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-0.5 cursor-pointer">
            <div className="h-full w-full rounded-full border-2 border-white dark:border-slate-900 overflow-hidden">
              <Avatar className="h-full w-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <span className="text-xs">{user.name}</span>
        </div>
      ))}
    </div>
  );
};
