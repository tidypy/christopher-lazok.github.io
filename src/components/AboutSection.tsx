"use client";

import React from 'react';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <SectionContainer id="about" className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/20">
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Bridging the gap between <span className="text-cyan-400">Technical Complexity</span> and <span className="text-emerald-400">Business Strategy</span>.
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">
                        With over 18 years of combined experience in IT Project Management, DBA, Business Intelligence, and Network Admin Design, I specialize in creating scalable solutions for medium-sized businesses.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        As a former Director of Ferpa and current Partner at DFK Express LLC, I bring a unique perspective that combines hands-on technical expertise with executive-level strategic planning.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {[
                        { label: "Years Experience", value: "18+" },
                        { label: "Projects Lead", value: "50+" },
                        { label: "Certifications", value: "12+" },
                        { label: "Systems Mastered", value: "10+" },
                    ].map((stat, index) => (
                        <div key={index} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                            <div className="text-slate-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default AboutSection;
