"use client";

import React, { useState } from 'react';
import SectionContainer from './SectionContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
    const isCode = project.type === 'code';
    const isDoc = project.type === 'doc';
    const isVideo = project.type === 'video';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all overflow-hidden flex flex-col h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div className="text-3xl">
                        {isCode && '💻'}
                        {isDoc && '📂'}
                        {isVideo && '🎥'}
                    </div>
                    <div className="flex gap-2">
                        {project.techStack?.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-cyan-500 text-sm font-semibold hover:text-cyan-400"
                    >
                        {isCode ? 'View Code' : isDoc ? 'View Documents' : 'Watch Video'}
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectSection = () => {
    const [filter, setFilter] = useState<'all' | 'code' | 'doc'>('all');

    const filteredProjects = projects.filter(p => {
        if (filter === 'all') return true;
        return p.type === filter;
    });

    return (
        <SectionContainer id="projects" className="bg-slate-950/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                    Explore my code repositories, documentation, and technical demonstrations.
                </p>

                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    {['all', 'code', 'doc'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f as 'all' | 'code' | 'doc')}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === f
                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                                : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
                                }`}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </SectionContainer>
    );
};

export default ProjectSection;
