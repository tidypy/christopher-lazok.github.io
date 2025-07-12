'use client';

import { motion, Variants } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import the VantaBackground component with SSR disabled.
// This is crucial for libraries that depend on browser-specific APIs like `window`.
const VantaBackground = dynamic(() => import('@/components/VantaBackground'), {
  ssr: false,
});
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

export default function Home() {
  return (
    <VantaBackground>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <motion.div
          className="max-w-xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            variants={itemVariants}
          >
            Christopher Lazok: IT Consulting & Business Intelligence
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-lg text-gray-300 sm:text-xl/relaxed"
            variants={itemVariants}
          >
            Empowering medium-sized businesses with cutting-edge SaaS solutions and actionable business intelligence.
          </motion.p>
        </motion.div>
      </div>
    </VantaBackground>
  );
}