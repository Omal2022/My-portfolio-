"use client";

import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about tackling complex challenges and building user-friendly applications that make a real difference."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaborator",
      description: "Strong believer in teamwork and knowledge sharing. I thrive in collaborative environments and value diverse perspectives."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always eager to learn new technologies and methodologies. I stay current with industry trends and best practices."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Adaptable and resilient, I see every challenge as an opportunity to grow and improve my craft."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a passionate frontend developer with 5 months of hands-on experience, I've discovered my love for 
                creating digital solutions that bridge the gap between innovative design and practical functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey began with curiosity and has evolved into a deep commitment to crafting exceptional user 
                experiences. I believe in the power of technology to solve real-world problems and am constantly 
                pushing myself to learn and grow in this ever-evolving field.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary/10 to-blue-400/10 border border-primary/20 rounded-xl p-6"
            >
              <p className="text-lg font-mono text-center">
                <span className="text-primary">"</span>
                Continuous growth is not a destination, but a journey of endless possibilities.
                <span className="text-primary">"</span>
              </p>
              <p className="text-right text-sm text-muted-foreground mt-2">- My Developer Philosophy</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 hover:bg-card/70 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {trait.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {trait.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {trait.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;