
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "../../utils/stringUtils";

interface ProfileQuickNavProps {
  avatarUrl: string;
  name: string;
  role: string;
}

export const ProfileQuickNav = ({ avatarUrl, name, role }: ProfileQuickNavProps) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="h-10 w-10 border-2 border-white shadow">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};
