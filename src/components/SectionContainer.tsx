import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const SectionContainer: React.FC<SectionContainerProps> = ({
    children,
    id,
    className,
    ...props
}) => {
    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
};

export default SectionContainer;
