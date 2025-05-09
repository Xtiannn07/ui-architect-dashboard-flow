
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface AddNewProjectButtonProps {
  label: string;
}

export const AddNewProjectButton = ({ label }: AddNewProjectButtonProps) => {
  return (
    <Button className="flex items-center gap-1">
      <Plus size={16} />
      {label}
    </Button>
  );
};
