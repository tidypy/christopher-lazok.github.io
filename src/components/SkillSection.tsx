"use client";

import React from 'react';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

const skills = {
    "Core Competencies": [
        "IT Project Management", "Business Intelligence", "DevOps", "Data Compliance Audit", "Governance & Reviews", "Cross-Functional Leadership"
    ],
    "ERP & Systems": [
        "MS Dynamics", "SAP", "Oracle BI", "AWS", "Azure", "SuccessFactors"
    ],
    "Data & Analytics": [
        "Power BI", "SQL (SSMS)", "Azure Synapse", "Tableau", "Qlik", "Excel Power Pivot", "DAX"
    ],
    "Techniques & Methodologies": [
        "Six Sigma (Green Belt)", "Agile / Scrum", "Deep Thinking / PIP Sigma", "ETL Processes", "Data Classification", "Business Requirements"
    ]
};

const SkillSection = () => {
    return (
        <SectionContainer id="skills" className="bg-slate-950/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Expertise</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A comprehensive toolkit honed over nearly two decades of solving complex IT and business challenges.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/30 transition-all hover:-translate-y-1"
                    >
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6">{category}</h3>
                        <ul className="space-y-3">
                            {items.map((item) => (
                                <li key={item} className="flex items-center text-slate-300 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </SectionContainer>
    );
};

export default SkillSection;
