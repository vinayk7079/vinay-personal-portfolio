import { useState } from "react";
import Navigation from "../components/Navigation";
import AboutSection from "../components/sections/AboutSection";
import ResumeSection from "../components/sections/ResumeSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderActiveSection = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "resume":
        return <ResumeSection />;
      case "projects":
        return <ProjectsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content */}
      <div className="pt-20">
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default Index;
