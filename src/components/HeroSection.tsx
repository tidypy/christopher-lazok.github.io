"use client";

import React from 'react';
import { motion } from 'framer-motion';
import VantaBackground from './VantaBackground';

const HeroSection = () => {
  return (
    <VantaBackground>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-emerald-400 font-medium tracking-wide text-sm md:text-base mb-4 uppercase">
              IT Consulting & Business Intelligence
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
              Christopher <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Lazok</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10">
              Transforming medium-sized businesses with expert SaaS solutions, data compliance, and operational efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:shadow-[0_0_30px_rgba(8,145,178,0.7)]"
              >
                Let&apos;s Talk
              </a>
              <a
                href="#experience"
                className="px-8 py-4 bg-transparent border border-slate-500 text-slate-300 hover:border-white hover:text-white rounded-full font-bold text-lg transition-all"
              >
                View Experience
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
        </motion.div>
      </section>
    </VantaBackground>
  );
};

export default HeroSection;
