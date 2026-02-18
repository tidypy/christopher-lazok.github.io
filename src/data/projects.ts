export interface Project {
    id: string;
    title: string;
    description: string;
    type: 'code' | 'video' | 'doc';
    mediaUrl?: string; // YouTube URL or Image URL
    link: string; // GitHub, Drive, or Demo URL
    techStack: string[];
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'KomodoED Tidypy Chess Repertoire Builder',
        description: 'Chess Repertoire builder specifically designed for Komodo Chess Engines.',
        type: 'code',
        link: 'https://github.com/tidypy/KomodoED-Tidypy-Chess-Repertoire-Builder',
        techStack: ['Python'],
        featured: true
    },
    {
        id: '2',
        title: 'Tidypy Chess Rep Builder',
        description: 'Chess repertoire builder using interval analysis. Analyzes PGN files at configurable move intervals, injects UCI engine-verified lines into mainlines. Built with PyQt6.',
        type: 'code',
        link: 'https://github.com/tidypy/Tidypy-Chess-Rep-Builder',
        techStack: ['Python', 'PyQt6'],
        featured: true
    },
    {
        id: '3',
        title: 'KomodoTUNER',
        description: 'Optimization tool for Komodo chess engine parameters.',
        type: 'code',
        link: 'https://github.com/tidypy/KomodoTUNER',
        techStack: ['Python']
    },
    {
        id: '4',
        title: 'Portfolio Website',
        description: 'This responsive, modern portfolio website built with Next.js and Tailwind CSS.',
        type: 'code',
        link: 'https://github.com/tidypy/christopher-lazok.github.io',
        techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
        featured: true
    },
    {
        id: '5',
        title: 'Work Examples',
        description: 'A collection of professional work samples, demonstrating capabilities in various IT domains including Data Classification, Privacy, and ETL processes.',
        type: 'doc',
        link: 'https://drive.google.com/drive/folders/1ja11RQOJYF-xq5X5SfurXgvmOgNKI7Vf?usp=sharing',
        techStack: ['Documentation', 'Data Analysis'],
        featured: true
    }
];
