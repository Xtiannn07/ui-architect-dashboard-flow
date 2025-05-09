
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface Field {
  label: string;
  value: string;
}

interface ProfileInformationProps {
  fields: Field[];
  actions: string[];
}

export const ProfileInformation = ({ fields, actions }: ProfileInformationProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 py-2 border-b last:border-b-0 last:pb-0">
            <span className="text-sm font-medium">{field.label}:</span>
            <span className="text-sm col-span-2 text-muted-foreground">{field.value}</span>
          </div>
        ))}
        <p className="text-sm pt-2">
          I'm a creative UI/UX designer that loves to craft beautiful and functional user experiences. I've worked with notable companies and have a track record of delivering high-quality designs.
        </p>
      </CardContent>
      <CardFooter>
        {actions.map((action, index) => (
          <Button key={index} variant="outline" size="sm" className="flex gap-1 items-center">
            <Pencil size={14} />
            {action}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};
