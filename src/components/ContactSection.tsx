"use client";

import React from 'react';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <SectionContainer id="contact" className="bg-gradient-to-b from-slate-950 to-slate-900 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                    Ready to optimize your <span className="text-emerald-400">Business Intelligence</span>?
                </h2>
                <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                    Let&apos;s discuss how we can leverage technology to streamline your operations and drive growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="mailto:chrislazok@gmail"
                        className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-200 rounded-full font-bold text-lg transition-colors"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://linkedin.com/in/2816902992"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border border-slate-700 text-white hover:border-cyan-500 hover:text-cyan-400 rounded-full font-bold text-lg transition-all"
                    >
                        Connect on LinkedIn
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-800/50">
                    <p className="text-slate-500">
                        Based in Houston, Texas | Available for Consulting & Projects
                    </p>
                </div>
            </motion.div>
        </SectionContainer>
    );
};

export default ContactSection;
