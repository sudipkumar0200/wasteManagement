"use client";

import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  setActiveSection,
}: NavigationProps) {
  const sections = [
    "intro",
    "status",
    "impact",
    "disposal",
    "solutions",
    "faq",
    "contact",
  ];

  return (
    <nav className="sticky top-0 bg-background border-b z-50 px-4">
      <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto py-4">
        {sections.map((section, i) => (
          <a href={`#${section}`} key={i}>
            <Button
              
              variant={activeSection === section ? "default" : "ghost"}
              onClick={() => setActiveSection(section)}
              className="whitespace-nowrap"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          </a>
        ))}
      </div>
    </nav>
  );
}
