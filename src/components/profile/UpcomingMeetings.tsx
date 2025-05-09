
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarGroup } from "../ui/avatar-group";
import { Calendar } from "lucide-react";

interface Meeting {
  title: string;
  time: string;
  meetingId: string;
  participants: string[];
  action: string;
}

interface UpcomingMeetingsProps {
  meetings: Meeting[];
}

export const UpcomingMeetings = ({ meetings }: UpcomingMeetingsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar size={18} />
          Upcoming Meetings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {meetings.map((meeting, index) => (
          <div key={index} className="p-4 rounded-lg border">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{meeting.title}</h3>
              <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">
                {meeting.time}
              </span>
            </div>
            
            <p className="text-xs text-muted-foreground mt-1">
              Meeting ID: {meeting.meetingId}
            </p>
            
            <div className="mt-4 flex items-center justify-between">
              <AvatarGroup className="justify-start">
                {meeting.participants.map((participant, idx) => (
                  <Avatar key={idx} className="border-2 border-white dark:border-slate-900 h-6 w-6">
                    <AvatarImage src={participant} alt={`Participant ${idx + 1}`} />
                    <AvatarFallback>P{idx + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </AvatarGroup>
              <Button size="sm" variant="primary" className="bg-green-500 hover:bg-green-600 text-white">{meeting.action}</Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
