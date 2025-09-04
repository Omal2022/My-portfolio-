"use client";

import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono font-semibold">ChikaE.dev</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 Chika Egulemu</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="font-mono">Made with Next.js & Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;