"use client";

import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingAnimation from './typing-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux Toolkit', 
    'Next.js', 'MongoDB', 'APIs', 'TypeScript', 'Tailwind CSS'
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hi, I'm Chika Egulemu
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-normal">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Enthusiastic, growth-oriented, collaborative developer with 5 months of experience 
            building modern web applications and solving real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="text-lg md:text-xl mb-4">
              <span className="text-muted-foreground">Specializing in:</span>
            </div>
            <div className="text-xl md:text-2xl font-mono text-primary min-h-[2rem]">
              <TypingAnimation texts={skills} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => scrollToSection('experience')}
              className="group bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-3 text-lg"
            >
              View Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 px-8 py-3 text-lg"
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <div className="flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">Scroll to explore</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;