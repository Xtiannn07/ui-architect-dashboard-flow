
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ToggleSection {
  title: string;
  toggles: string[];
}

interface PlatformSettingsProps {
  sections: ToggleSection[];
}

export const PlatformSettings = ({ sections }: PlatformSettingsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            <h3 className="font-medium text-sm">{section.title}</h3>
            <div className="space-y-3">
              {section.toggles.map((toggle, toggleIndex) => (
                <div key={toggleIndex} className="flex items-center justify-between">
                  <Label htmlFor={`toggle-${sectionIndex}-${toggleIndex}`} className="flex-grow text-sm">
                    {toggle}
                  </Label>
                  <Switch id={`toggle-${sectionIndex}-${toggleIndex}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
