'use client';

import { motion } from 'framer-motion';
import VantaBackground from '@/components/VantaBackground';

export default function HeroSection() {
  // Variants for staggering animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <main className="relative">
      <VantaBackground>
        <section className="text-white">
        {/* z-10 ensures content is on top of the background grid */}
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              variants={itemVariants}
            >
              Christopher Lazok: IT Consulting &amp; Business Intelligence
            </motion.h1>

            <motion.p
              className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"
              variants={itemVariants}
            >
              Expert SaaS Solutions for Medium Businesses. Unlock your potential
              with our innovative and tailored IT strategies.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <motion.a
                className="block w-full rounded border border-slate-600 bg-slate-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                Get Started
              </motion.a>

              <motion.a
                className="block w-full rounded border border-slate-700 px-12 py-3 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring active:bg-slate-500 sm:w-auto"
                href="/learn-more"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        </section>
      </VantaBackground>
    </main>
  );
}