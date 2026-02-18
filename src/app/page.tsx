'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillSection from '@/components/SkillSection';
import ProjectSection from '@/components/ProjectSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

import ImpactSection from '@/components/ImpactSection';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ImpactSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}