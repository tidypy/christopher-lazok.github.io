import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                        Christopher Lazok
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Empowering businesses with intelligent SaaS solutions.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a href="https://linkedin.com/in/2816902992" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:chrislazok@gmail" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        Email
                    </a>
                    <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
            <div className="border-t border-slate-900 mt-12 pt-8 text-center text-slate-600 text-sm">
                © {new Date().getFullYear()} Christopher Lazok. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
