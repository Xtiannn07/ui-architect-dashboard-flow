
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Plus } from "lucide-react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Contact new leads from trade show",
    completed: false,
    priority: "high",
    dueDate: "Today"
  },
  {
    id: 2,
    title: "Prepare quarterly sales report",
    completed: false,
    priority: "high",
    dueDate: "Tomorrow"
  },
  {
    id: 3,
    title: "Follow up with Enterprise clients",
    completed: true,
    priority: "medium",
    dueDate: "Yesterday"
  },
  {
    id: 4,
    title: "Schedule demo with potential client",
    completed: false,
    priority: "medium",
    dueDate: "05/15"
  },
  {
    id: 5,
    title: "Review new marketing materials",
    completed: false,
    priority: "low",
    dueDate: "05/18"
  }
];

const priorityColors = {
  high: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  low: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
};

export function TasksList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTaskCompleted = (taskId: number) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
      <div className="flex justify-between items-center pb-2">
        <span className="text-sm font-medium">Your Tasks ({tasks.length})</span>
        <button className="p-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
      
      {tasks.map((task) => (
        <div 
          key={task.id} 
          className={`flex items-start p-2 rounded hover:bg-muted/50 ${
            task.completed ? "opacity-50" : ""
          }`}
        >
          <Checkbox 
            id={`task-${task.id}`} 
            checked={task.completed} 
            onCheckedChange={() => toggleTaskCompleted(task.id)}
            className="mt-0.5"
          />
          <div className="ml-2 flex-1">
            <label 
              htmlFor={`task-${task.id}`} 
              className={`text-sm cursor-pointer ${task.completed ? "line-through" : ""}`}
            >
              {task.title}
            </label>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="outline" className={`text-xs ${priorityColors[task.priority]}`}>
                {task.priority}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {task.dueDate}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
