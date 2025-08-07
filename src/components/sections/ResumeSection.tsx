import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, MapPin, Award, GraduationCap, FileText, ExternalLink } from "lucide-react";

const ResumeSection = () => {
  const experience = {
    role: "PHP Developer Intern",
    company: "Evenforce Technologies Pvt Ltd",
    duration: "May 2025 - Present",
    location: "On-site",
    description: "Building multi-tenant SaaS for garage management. Fresh graduate available for remote, on-site, or hybrid opportunities.",
    technologies: ["PHP 7.4", "MySQL", "Apache", "Bootstrap 5", "jQuery", "Custom MVC", "Ubuntu"]
  };

  const education = [
    {
      degree: "B.E. in AI & Data Science",
      institution: "Shridevi Institute of Engineering and Technology",
      duration: "2021 - 2025",
      grade: "CGPA: 9.25"
    },
    {
      degree: "12th Grade",
      institution: "Mahabiri Saraswati Vidya Mandir",
      duration: "2018 - 2020",
      grade: "92.4%"
    }
  ];

  const achievements = [
    "🥇 1st Place – WIE CODE Hackathon by IEEE, SIT Tumkur",
    "⚡ Participated in 24-hr Hackathon (EMPATH Project) – Shridevi Institute",
    "🎓 Teaching volunteer – Agastya International Foundation"
  ];

  const certifications = [
    {
      title: "DevOps Virtual Experience Program",
      organization: "Rooman Technologies",
      description: "Conducted as part of the university curriculum",
      details: [
        "Containerized applications and managed multi-container deployments using Docker and Docker Compose",
        "Built and managed CI/CD pipelines using Git/GitHub Actions to automate testing and deployment processes",
        "Developed Python scripts to automate cloud infrastructure tasks and system administration duties",
        "Collaborated with a team in a project-based setting to troubleshoot deployment issues"
      ],
      skills: ["Docker", "Kubernetes", "CI/CD", "Python", "Git", "GitHub", "Cloud Automation", "Team Collaboration"],
      link: "https://drive.google.com/drive/folders/1pUhh4N1AM4yURUCD2epSBjjny-9nFBaO?usp=sharing" // DevOps

    },
    {
      title: "Java Full Stack - Campus to Technical Careers (C2TC)",
      organization: "TNS India Foundation & Accenture",
      description: "Transformative program enhancing technical and professional skills",
      details: [
        "Successfully completed comprehensive training in Java programming and full-stack development",
        "Gained expertise in MySQL database management and design",
        "Developed proficiency in HTML/CSS for frontend development",
        "Learned Spring Boot framework for building enterprise-level applications",
        "Improved professional communication skills for corporate environments"
      ],
      skills: ["Java", "MySQL", "HTML/CSS", "Spring Boot", "Problem Solving", "Professional Communication"],
      link: "https://drive.google.com/file/d/1yEtd-iVLKfs_TpMXftEo_7n4EnG1H0dR/view?usp=sharing" // Link to certificate

    },
    {
      title: "Java Programming",
      organization: "NPTEL",
      description: "",
      details: [],
      skills: ["Java", "Programming Fundamentals"],
      link: "https://drive.google.com/file/d/1DAAqOH_Foho4oHXvx2MujGR_dqlEl6qm/view?usp=sharing"
    }
  ];

  return (
    <div className="tab-enter">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive overview of my professional journey
          </p>
          <Button
            size="lg"
            className="hero-gradient hover:scale-105 transition-transform duration-300 shadow-lg glow-primary font-semibold"
            onClick={() => window.open("/Vinay_RESUME.pdf", "_blank")}
            
          >
            <FileText className="mr-2 h-5 w-5" />
            Download CV
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Experience */}
            <Card className="card-gradient border-border hover-scale transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full glow-primary"></div>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
                      <Badge variant="secondary" className="w-fit">
                        {experience.duration}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{experience.company}</span>
                      <span className="text-muted-foreground">• {experience.location}</span>
                    </div>
                    <p className="text-muted-foreground">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-gradient border-border hover-scale transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-accent" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-accent">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full glow-accent"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <Badge variant="secondary" className="w-fit bg-accent/20 text-accent">
                          {edu.grade}
                        </Badge>
                      </div>
                      <p className="text-accent font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.duration}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements */}
            <Card className="card-gradient border-border hover-scale transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                      <p className="text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="card-gradient border-border hover-scale transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-accent" />
                  </div>
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="text-foreground font-semibold">{cert.title}</h3>
                            {cert.organization && (
                              <Badge variant="outline" className="w-fit text-xs">
                                {cert.organization}
                              </Badge>
                            )}
                          </div>
                          {cert.description && (
                            <p className="text-sm text-muted-foreground italic">{cert.description}</p>
                          )}
                          {cert.details.length > 0 && (
                            <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                              {cert.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start gap-2">
                                  <span className="text-accent">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {cert.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {cert.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          )}
                          {cert.link && (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 underline text-sm mt-2 inline-block"
  >
    View Certificate
  </a>
)}

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills Summary */}
            <Card className="card-gradient border-border hover-scale transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Backend</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Java</div>
                      <div>MySQL, APIs</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-accent">Frontend</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>HTML, CSS, JavaScript</div>
                      <div>Bootstrap, jQuery</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">AI/ML</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Python, Prompt Engineer</div>
                      <div>ML, AI tools</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-accent">Tools</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>Git, Ubuntu</div>
                      <div>Postman, Jira</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;