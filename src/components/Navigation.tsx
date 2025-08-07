import { useState } from "react";
import { Button } from "./ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const tabs = [
    { id: "about", label: "About" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-sm font-bold text-background">VK</span>
            </div>
            <span className="text-lg font-semibold text-gradient">Vinay Kumar</span>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex items-center space-x-2 bg-secondary/50 rounded-full p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant="ghost"
                size="sm"
                onClick={() => onTabChange(tab.id)}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`relative px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg glow-primary"
                    : hoveredTab === tab.id
                    ? "bg-accent/20 text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow" />
                )}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => {
              // Mobile menu logic can be added here
            }}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-current rounded"></div>
              <div className="w-full h-0.5 bg-current rounded"></div>
              <div className="w-full h-0.5 bg-current rounded"></div>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(tab.id)}
              className={`rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;