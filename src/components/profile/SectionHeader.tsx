
import React from "react";

interface SectionHeaderProps {
  title: string;
  intro: string;
}

export const SectionHeader = ({ title, intro }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-muted-foreground">{intro}</p>
    </div>
  );
};
