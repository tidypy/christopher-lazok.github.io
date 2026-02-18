"use client";

import React from 'react';
import SectionContainer from './SectionContainer';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "DFK Express LLC",
        role: "Partner",
        period: "Nov 2024 - Current",
        description: "Providing strategic oversight for SaaS governance and compliance. Developing a partnership trucking school to empower owner-operators with SaaS business management skills.",
        skills: ["SaaS Governance", "Strategic Oversight", "Compliance", "Business Management"]
    },
    {
        company: "Ferpa Precision",
        role: "Director of IT Operations and Human Resources",
        period: "Feb 2024 - Nov 2024",
        description: "Developed and implemented strategic HR initiatives and ISO Audit best practices. Managed operations for SaaS Time and Attendance, Onboarding, and SharePoint workflows.",
        skills: ["ISO Audit", "SharePoint", "Azure AD", "SaaS Admin", "Project Management"]
    },
    {
        company: "Continental Carbon",
        role: "Sr. Technical Analyst, Business Intelligence",
        period: "Apr 2022 - Mar 2023",
        description: "Managed Azure DevOps, PowerBI, and Synapse. Created KPI reporting on OPACC, AOP, and Manufacturing Quality. Led database normalization and migration projects.",
        skills: ["Azure DevOps", "PowerBI", "Synapse", "KPI Reporting", "Database Normalization"]
    },
    {
        company: "Mahindra USA",
        role: "Senior Technical Analyst",
        period: "Aug 2019 - May 2021",
        description: "Lead Consultant for production environment. Managed SAP iBolt/PI/PO issue tracking and created QLIK dashboards. Implemented Agile Kanban project planning.",
        skills: ["SAP", "QLIK", "Agile Kanban", "Technical Documentation", "Dealer Portal"]
    },
    {
        company: "Caterpillar Resource Industries",
        role: "Sr. Business Analyst, Technical Data Analyst",
        period: "Feb 2018 - July 2019",
        description: "Created reports using Business Objects, SAP, and Tableau. Collaborated on supplier quality and improvement. Six Sigma Green Belt trained.",
        skills: ["Tableau", "SAP", "Business Objects", "Six Sigma", "Supply Chain"]
    },
    {
        company: "GE Oil & Gas",
        role: "Global Logistics Analyst HSR LNG",
        period: "Jan 2013 - Mar 2017",
        description: "Coordinated global logistics and 3PL warehouse communications. Managed web-based Support Central and created inventory reports using SAP Business Objects.",
        skills: ["Logistics", "SAP Hybris", "3PL Management", "Inventory Reporting", "Lean Sigma"]
    }
];

const ExperienceSection = () => {
    return (
        <SectionContainer id="experience" className="bg-slate-950">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A track record of driving operational efficiency and technological innovation across industries.
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 transform -translate-x-1/2 md:-translate-x-1/2 mt-1.5 z-10" />

                            {/* Content */}
                            <div className="ml-8 md:ml-0 md:w-1/2 px-4">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                                    <span className="text-emerald-400 font-mono text-sm mb-2">{exp.period}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                    <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-300 border border-slate-800">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty Space for alternate side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default ExperienceSection;
