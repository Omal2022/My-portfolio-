"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Globe,
  CheckCircle,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "hackathon",
      title: "Africa's Talking Hackathon",
      position: "2nd Place Winner",
      date: "August 2025",
      location: "GOMYCODE Yaba, Lagos",
      icon: <Trophy className="w-6 h-6" />,
      description:
        "Developed Agri App during Africa’s Talking Hackathon — a solution designed to empower farmers with real-time access to crop, weather, and market information.",
      details: [
        "Built a scalable MVP that delivered agricultural insights within the hackathon timeframe",
        "Integrated Africa’s Talking APIs (SMS/USSD) to ensure accessibility for farmers with low-tech devices",
        "Collaborated closely with a cross-functional team to design, develop, and pitch the solution",
        "Recognized as 2nd place winner for addressing food security challenges with an innovative approach",
      ],
      tech: ["React", "Node.js", "MongoDB", "Africa's Talking APIs"],
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const projects = [
    {
      title: "SafeCo Security Platform",
      description:
        "A modern security services platform showcasing security professionals with responsive design.",
      url: "https://securityapp-delta.vercel.app",
      tech: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
      features: [
        "Responsive and engaging design",
        "Professional service showcase",
        "Modern UI/UX implementation",
        "Performance optimized",
      ],
    },
    {
      title: "Todo Application",
      description:
        "A beautiful, feature-rich todo application with smart filtering and glassmorphism design.",
      url: "https://todoapp-lake-seven.vercel.app",
      tech: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Lucide React",
        "Vite",
      ],
      features: [
        "Add, edit, delete, toggle tasks",
        "Smart filtering system",
        "Visual task statistics",
        "Local storage persistence",
        "Responsive glassmorphism UI",
      ],
    },
    {
      title: "AI Notepad",
      description:
        "A smart note-taking application with AI-assisted features for enhanced productivity.",
      url: "#",
      tech: ["React", "TypeScript", "AI Integration", "Modern UI"],
      features: [
        "Create, edit, delete notes",
        "Advanced search functionality",
        "Clean, intuitive interface",
        "AI-assisted note management",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Experience & Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
        </motion.div>

        {/* Hackathon Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-muted-foreground">
            Competition Experience
          </h3>
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white`}
                  >
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {exp.position}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2 mb-4">
                  {exp.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-muted-foreground">
            Freelance Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:bg-card/70 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-3 h-3 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {project.url !== "#" && (
                      <Button
                        variant="outline"
                        className="w-full border-primary/50 hover:bg-primary/10 group"
                        onClick={() => window.open(project.url, "_blank")}
                      >
                        View Project
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
