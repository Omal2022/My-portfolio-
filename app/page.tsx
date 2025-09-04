"use client";

import { Suspense } from 'react';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ExperienceSection from '@/components/experience-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import MatrixBackground from '@/components/matrix-background';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="relative">
      <MatrixBackground />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
      <Toaster />
    </div>
  );
}