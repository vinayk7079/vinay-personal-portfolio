import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Github, Brain, Building2 } from "lucide-react";
import heartDiseaseImage from "../../assets/heart-disease-project.jpg";
import placementManagementImage from "../../assets/placement-management-project.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Heart Disease Prediction Web App",
      description: "An advanced machine learning web application that predicts heart disease risk using multiple algorithms. Features comprehensive data visualization and user-friendly interface for medical assessments.",
      image: heartDiseaseImage,
      technologies: ["Python", "Flask", "ML Algorithms", "Matplotlib", "Seaborn", "HTML/CSS"],
      highlights: [
        "Implemented Logistic Regression, Random Forest, SVM, KNN",
        "Built responsive user frontend with Flask backend",
        "Data visualizations using Matplotlib & Seaborn",
        "Comprehensive model evaluation and comparison"
      ],
      githubUrl: "https://github.com/vinayk7079/heart-disease-prediction",
      liveUrl: null,
      icon: Brain,
      gradient: "from-pink-500 to-red-500"
    },
    {
      id: 2,
      title: "Placement Management System",
      description: "A comprehensive Spring Boot application for managing college placement activities. Features complete CRUD operations, student-company matching, and robust API architecture.",
      image: placementManagementImage,
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Postman"],
      highlights: [
        "Complete CRUD operations for placement data",
        "Spring Boot + MySQL backend architecture",
        "RESTful API design and implementation",
        "Thorough API testing using Postman",
        "Student-company matching algorithms"
      ],
      githubUrl: "https://github.com/vinayk7079/placement-management",
      liveUrl: null,
      icon: Building2,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div id ="projects" className="tab-enter">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical expertise through real-world applications, 
            from machine learning solutions to full-stack web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-gradient border-border overflow-hidden hover-scale transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} p-0.5 animate-float`}>
                        <div className="w-full h-full bg-background/90 rounded-xl flex items-center justify-center">
                          <project.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Tech badges overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-background/80 backdrop-blur-sm text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} p-0.5`}>
                        <div className="w-full h-full bg-background rounded-lg flex items-center justify-center">
                          <project.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                    <CardTitle className="text-2xl mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button
                        variant="default"
                        size="lg"
                        className="flex-1 hero-gradient hover:scale-105 transition-transform duration-300 shadow-lg"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                      
                      {project.liveUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl card-gradient border border-border">
          <h3 className="text-2xl font-bold mb-4">
            Interested in <span className="text-gradient">collaborating</span>?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects and explore new technologies. 
            Let's build something amazing together!
          </p>
          <Button 
  size="lg"
  className="hero-gradient hover:scale-105 transition-transform duration-300 shadow-lg glow-primary"
  onClick={() => window.location.href = "mailto:vk738393@gmail.com"}
>
  Get In Touch
</Button>

        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;