
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface HeaderWithActionProps {
  title: string;
  actionLabel: string;
}

export const HeaderWithAction = ({ title, actionLabel }: HeaderWithActionProps) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <Button size="sm" className="flex items-center gap-1">
        <Plus size={16} />
        {actionLabel}
      </Button>
    </div>
  );
};
