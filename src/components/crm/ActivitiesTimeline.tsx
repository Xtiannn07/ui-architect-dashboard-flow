
import React from "react";
import { CircleDollarSign, Mail, User, CheckCircle } from "lucide-react";

interface Activity {
  id: number;
  time: string;
  description: string;
  type: 'customer' | 'sale' | 'email' | 'ticket';
}

const activitiesData: Activity[] = [
  {
    id: 1,
    time: "10:42 AM",
    description: "New customer registered: Jane Cooper",
    type: "customer"
  },
  {
    id: 2,
    time: "09:35 AM",
    description: "Premium CRM Plan purchased by Acme Corp",
    type: "sale"
  },
  {
    id: 3,
    time: "08:15 AM",
    description: "Monthly newsletter campaign launched",
    type: "email"
  },
  {
    id: 4,
    time: "Yesterday",
    description: "Support ticket #45982 closed by Thomas",
    type: "ticket"
  },
  {
    id: 5,
    time: "Yesterday",
    description: "New customer registered: John Smith",
    type: "customer"
  }
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'customer':
      return <User className="h-4 w-4 text-blue-500" />;
    case 'sale':
      return <CircleDollarSign className="h-4 w-4 text-green-500" />;
    case 'email':
      return <Mail className="h-4 w-4 text-purple-500" />;
    case 'ticket':
      return <CheckCircle className="h-4 w-4 text-yellow-500" />;
    default:
      return <User className="h-4 w-4 text-gray-500" />;
  }
};

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'customer':
      return "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/20";
    case 'sale':
      return "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-900/20";
    case 'email':
      return "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-900/20";
    case 'ticket':
      return "border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-900/20";
    default:
      return "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/20";
  }
};

export function ActivitiesTimeline() {
  return (
    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
      {activitiesData.map((activity) => (
        <div key={activity.id} className="flex gap-3">
          <div className={`h-8 w-8 rounded-full border flex items-center justify-center ${getActivityColor(activity.type)}`}>
            {getActivityIcon(activity.type)}
          </div>
          <div className="flex-1">
            <p className="text-sm">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
