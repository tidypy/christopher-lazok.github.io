'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ResumePage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
            <Navbar />

            <div className="pt-32 pb-20 px-6 md:px-12 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center border-b border-slate-800 pb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        Christopher <span className="text-cyan-400">Lazok</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-emerald-400 font-medium mb-6">
                        IT Director | Project Manager | BI Specialist
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                        <a href="mailto:chrislazok@gmail" className="hover:text-cyan-400 transition-colors">chrislazok@gmail</a>
                        <span>•</span>
                        <a href="tel:281-690-2992" className="hover:text-cyan-400 transition-colors">281-690-2992</a>
                        <span>•</span>
                        <a href="https://linkedin.com/in/2816902992" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={() => window.print()}
                            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all text-sm flex items-center gap-2 mx-auto"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2-4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                            Print Resume
                        </button>
                    </div>
                </motion.div>

                {/* Summary */}
                <motion.section
                    {...fadeIn}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-8 h-1 bg-cyan-500 mr-4"></span>
                        Executive Summary
                    </h2>
                    <p className="text-slate-300 leading-relaxed text-lg bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        18 years combined experience in IT Project Management, DBA, Business Intelligence, Network Admin Design, and Consultation.
                        Former Director of Ferpa, and current Partner at DFK Express LLC. Proven track record in orchestrating cross-functional teams,
                        implementing SaaS solutions, and driving operational efficiency through data-driven strategies.
                    </p>
                </motion.section>

                {/* Skills */}
                <motion.section
                    {...fadeIn}
                    transition={{ delay: 0.1 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-8 h-1 bg-cyan-500 mr-4"></span>
                        Core Competencies
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                            <h3 className="text-emerald-400 font-bold mb-4">Technical Skills</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li>• ERP Systems: MS Dynamics, SAP, Oracle BI, AWS</li>
                                <li>• Data Analytics: PowerBI, SQL SSMS, Azure Synapse, Tableau</li>
                                <li>• Development: Python, DAX, Excel Power Pivot</li>
                                <li>• Infrastructure: Azure, SharePoint, Network Admin</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                            <h3 className="text-emerald-400 font-bold mb-4">Leadership & Strategy</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li>• IT Project Management</li>
                                <li>• Data Compliance & Governance</li>
                                <li>• Cross-Functional Leadership & Training</li>
                                <li>• Six Sigma Green Belt / Agile Methodologies</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Experience */}
                <motion.section
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-cyan-500 mr-4"></span>
                        Professional Experience
                    </h2>

                    <div className="space-y-12 border-l-2 border-slate-800 ml-3 pl-8 relative">
                        {/* Experience Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Partner</h3>
                                <span className="text-emerald-400 font-mono text-sm">Nov 2024 - Current</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">DFK Express LLC</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>Providing strategic oversight for SaaS governance and compliance, including Texas Comptroller regulations.</li>
                                <li>Developing and implementing governance for dispatching and expediting operations.</li>
                                <li>Managing contractual agreements and contributing to partnership-level operational efficiency.</li>
                                <li>Developing a partnership trucking school to provide CDL training and empower owner-operators.</li>
                            </ul>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Director of IT Operations and HR</h3>
                                <span className="text-emerald-400 font-mono text-sm">Feb 2024 - Nov 2024</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">Ferpa Precision</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>Developed and implemented strategic HR initiatives: ISO Audit best practices, talent acquisition, training.</li>
                                <li>Operations and Process Creation for: SaaS Time and Attendance, Onboarding, SharePoint workflows, VOIP, Quoting.</li>
                                <li>Azure Active Directory Admin, SharePoint Admin, Office 365 Admin.</li>
                                <li>Managed IT Software Licensing, Department Budget control, and IT project management.</li>
                            </ul>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Sr. Technical Analyst, Business Intelligence</h3>
                                <span className="text-emerald-400 font-mono text-sm">Apr 2022 - Mar 2023</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">Continental Carbon</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>Managed Azure DevOps, PowerBI, Synapse, Dataverse D365 Entity Store.</li>
                                <li>KPI Reporting on: OPACC, AOP, Capital Expense, Production, Manufacturing, Quality.</li>
                                <li>SSMS Paginated reports, Database normalization with TimeExtender Jet DB migration.</li>
                                <li>Liaison for stakeholder business requirements and 3PL developer management.</li>
                            </ul>
                        </div>

                        {/* Experience Item 4 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Senior Technical Analyst</h3>
                                <span className="text-emerald-400 font-mono text-sm">Aug 2019 - May 2021</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">Mahindra USA</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>Managed SAP iBolt and PI/PO issue tracking, HR Process Flow Development, QLIK dash with SAP data.</li>
                                <li>Lead Consultant for host package of production environment.</li>
                                <li>Agile Kanban Project Planner, IT Project Management and Budget Control.</li>
                                <li>Dealer Portal administration and enhancement.</li>
                            </ul>
                        </div>

                        {/* Experience Item 5 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Sr. Business Analyst / Technical Data Analyst</h3>
                                <span className="text-emerald-400 font-mono text-sm">Feb 2018 - July 2019</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">Caterpillar Resource Industries</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>Created reports using Business Objects, LogNet, SAP, Oracle, Tableau.</li>
                                <li>Governance reporting on quality KPIs: PPM SSP Warranty OTS.</li>
                                <li>Collaborated with procurement and supply developer engineers on supplier quality (RCCP).</li>
                                <li>Six Sigma Green Belt trained.</li>
                            </ul>
                        </div>

                        {/* Experience Item 6 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">Global Logistics Analyst</h3>
                                <span className="text-emerald-400 font-mono text-sm">Jan 2013 - Mar 2017</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">GE Oil & Gas</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>SAP-Hybris, email response processes, and commercial documents templates.</li>
                                <li>Improved 3PL warehouse communications with use of EDI such as Ariba SAP.</li>
                                <li>Coordinated multiple projects that captured substantial gains in efficiency.</li>
                                <li>Build reports providing insight for strategic business planning of logistics operations worldwide.</li>
                            </ul>
                        </div>

                        {/* Experience Item 7 */}
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-700 rounded-full border-4 border-slate-950"></span>
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-bold text-white">ERP Manufacturing Design & Admin</h3>
                                <span className="text-emerald-400 font-mono text-sm">Jan 2010 - Nov 2016</span>
                            </div>
                            <h4 className="text-lg text-slate-400 mb-4">Ferpa Precision</h4>
                            <ul className="list-disc list-outside text-slate-300 space-y-2 ml-4">
                                <li>Design/Install/Implementation: MS SBS Server Env, Exchange, Wi-Fi, VPN, ERP integration.</li>
                                <li>Maintained accountability for computer hardware, inventory, and networking design.</li>
                                <li>Recognized for contributing to gains in productivity and logistics capabilities.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Education & Certifications */}
                <motion.section
                    {...fadeIn}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-8 h-1 bg-cyan-500 mr-4"></span>
                        Education & Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800">
                                <h4 className="text-emerald-400 font-bold">BS Logistics Sciences, Minor in DBA</h4>
                                <p className="text-slate-400">University of Houston</p>
                                <p className="text-slate-500 text-sm">2009 - 2013</p>
                            </div>
                            <div className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 mt-4">
                                <h4 className="text-emerald-400 font-bold">Network Systems Administration</h4>
                                <p className="text-slate-400">ITT Tech Cittone</p>
                                <p className="text-slate-500 text-sm">2000</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-start">
                                    <span className="text-cyan-500 mr-2">✓</span>
                                    <span>Microsoft DBA, MCP (2012)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-500 mr-2">✓</span>
                                    <span>CompTIA Net+, Essentials+, Sec+</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-500 mr-2">✓</span>
                                    <span>Six Sigma Green Belt (GE, Bechtel)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-cyan-500 mr-2">✓</span>
                                    <span>AIPCS AST&L - CTL, CPIM, AES</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

            </div>
            <Footer />
        </main>
    );
};

export default ResumePage;
