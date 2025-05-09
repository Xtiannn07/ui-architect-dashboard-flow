
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "../../utils/stringUtils";

interface ProfileHeaderCardProps {
  avatarUrl: string;
  name: string;
  role: string;
  quickActions: string[];
}

export const ProfileHeaderCard = ({ avatarUrl, name, role, quickActions }: ProfileHeaderCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-500 to-violet-500"></div>
      <CardContent className="relative pt-0">
        <div className="-mt-16 flex flex-col items-center">
          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-xl font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          
          <div className="mt-6 flex space-x-2">
            {quickActions.map((action, index) => (
              <Button key={index} variant="outline" size="sm">{action}</Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
