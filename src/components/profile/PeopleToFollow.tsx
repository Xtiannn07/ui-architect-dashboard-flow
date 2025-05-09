
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getInitials } from "../../utils/stringUtils";
import { Users } from "lucide-react";

interface User {
  name: string;
  role: string;
  avatar: string;
  action: string;
}

interface PeopleToFollowProps {
  users: User[];
}

export const PeopleToFollow = ({ users }: PeopleToFollowProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users size={18} />
          People to Follow
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {users.map((user, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-sm font-medium">{user.name}</h4>
                <p className="text-xs text-muted-foreground">{user.role}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">{user.action}</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
