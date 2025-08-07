import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import profilePhoto from "/lovable-uploads/20383925-82c9-4ab1-9df4-51c1f8f316e6.png";

const AboutSection = () => {
  const skills = [
    "Java", "Spring Boot", "Spring Framework", "JavaScript", "MySQL", "Git", 
    "Python", "PHP", "AI & ML", "Bootstrap", "HTML/CSS"
  ];

  return (
    <div className="tab-enter">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 hero-gradient rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Vinay Kumar - Developer"
                  className="w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Floating elements */}
              <div className="absolute top-10 -right-6 w-4 h-4 bg-primary rounded-full animate-float"></div>
              <div className="absolute bottom-20 -left-8 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -right-12 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-5xl font-bold">
                  Hi, I'm <span className="text-gradient">Vinay Kumar</span>
                </h1>
                <h2 className="text-2xl text-accent font-medium">Developer & AI Enthusiast</h2>
              </div>

              <div className="w-20 h-1 hero-gradient rounded-full"></div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate fresher developer with a strong foundation in software development, 
                AI & Data Science. I am currently working as a <span className="text-primary font-semibold">PHP Developer Intern at Evenforce Technologies Pvt Ltd</span>, 
                contributing to a modular garage management SaaS product.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I love building impactful tech solutions and growing through real-world coding. 
                My journey spans from machine learning projects to full-stack web applications, 
                always with a focus on creating meaningful user experiences.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              {/* <Button
  onClick={() => {
    const section = document.querySelector("#projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
  size="lg"
  className="hero-gradient hover:scale-105 transition-transform duration-300 shadow-lg glow-primary font-semibold"
>
  View My Work
</Button> */}



              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale"
                onClick={() => window.open("/Vinay_RESUME.pdf", "_blank")}

              >
                Download CV
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-gradient">Fresher</div>
                <div className="text-sm text-muted-foreground">Graduated</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-2xl font-bold text-gradient">9.25</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;