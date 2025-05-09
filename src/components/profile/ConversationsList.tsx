
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "../../utils/stringUtils";
import { MessageCircle } from "lucide-react";

interface Thread {
  name: string;
  avatar: string;
  message: string;
}

interface ConversationsListProps {
  threads: Thread[];
}

export const ConversationsList = ({ threads }: ConversationsListProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex gap-2 items-center">
          <MessageCircle size={18} /> Conversations
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="space-y-4">
          {threads.map((thread, index) => (
            <div 
              key={index}
              className="px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={thread.avatar} alt={thread.name} />
                  <AvatarFallback>{getInitials(thread.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">{thread.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">
                    {thread.message}
                  </p>
                </div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
