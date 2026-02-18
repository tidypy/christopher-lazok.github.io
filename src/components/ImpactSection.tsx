"use client";

import React from 'react';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

const impacts = [
    {
        company: "CCC",
        metric: "$250k",
        description: "Found in budgeted spend & optimized D365 processes.",
        color: "text-emerald-400"
    },
    {
        company: "Mahindra",
        metric: "90%",
        description: "Dealer involvement achieved through new portal & dashboard.",
        color: "text-cyan-400"
    },
    {
        company: "CAT",
        metric: "$15k/mo",
        description: "Spend reduction through forgery analysis & SDE analytics.",
        color: "text-blue-400"
    },
    {
        company: "SIDO",
        metric: "300%",
        description: "Increase in interest & substantial savings as President.",
        color: "text-purple-400"
    }
];

const ImpactSection = () => {
    return (
        <SectionContainer id="impact" className="bg-slate-950 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Measurable Impact</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Delivering tangible results and ROI through strategic data initiatives and process optimization.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {impacts.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-900 transition-colors text-center group"
                    >
                        <div className={`text-4xl md:text-5xl font-black mb-2 ${item.color} drop-shadow-lg`}>
                            {item.metric}
                        </div>
                        <div className="text-white font-bold text-lg mb-2 group-hover:text-slate-200 transition-colors">
                            {item.company}
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="inline-block p-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 max-w-3xl"
                >
                    <p className="text-slate-300 italic">
                        &quot;Voted MVP and later employee of the year by peers for substantial gains realized in AGILE processes at GE OG&amp;C.&quot;
                    </p>
                </motion.div>
            </div>
        </SectionContainer>
    );
};

export default ImpactSection;
