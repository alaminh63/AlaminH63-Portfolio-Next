'use client'
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import { projectData } from '../../../data/project-data';
import TitleHeader from '../Shared/TitleHeader';
import Link from 'next/link';

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    githubLink?: string | null;
    liveLink?: string | null;
    isPrivate?: boolean;
    technologies: string[];
    image: string;
    features?: string[];
    challenges: string[];
    screenshots: string[];
    fullDetails: string;
    category: 'Web' | 'Mobile' | 'Backend' | 'Data Science';
    date: string;
    rank: number | null;
}

export default function Projects() {
    const shapeRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            const xOffset = (clientX / innerWidth) * 20 - 10;
            const yOffset = (clientY / innerHeight) * 20 - 10;

            shapeRefs.current.forEach((shape, index) => {
                if (shape) {
                    const factor = (index + 1) * 0.5;
                    shape.style.transform = `translate(${xOffset * factor}px, ${yOffset * factor}px)`;
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const topProjects: ProjectProps[] = projectData
        .map(project => ({
            ...project,
            category: project.category as 'Web' | 'Mobile' | 'Backend' | 'Data Science',
            rank: project.rank !== null && project.rank !== undefined ? project.rank : Infinity,
            technologies: project.technologies ?? [] // Ensure technologies is always an array
        }))
        .sort((a, b) => (a.rank ?? Infinity) - (b.rank ?? Infinity))
        .slice(0, 3);

    return (
        <section className="relative py-20 bg-white min-h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {[
                    { className: "top-10 left-10 w-16 h-16 border-4", style: { borderColor: "rgb(252, 165, 165)", transform: "rotate(12deg)" }, refIndex: 0 },
                    { className: "bottom-10 right-10 w-16 h-16 border-4", style: { borderColor: "rgb(251, 146, 60)", transform: "rotate(-12deg)" }, refIndex: 1 },
                    { className: "top-1/2 left-1/2 w-24 h-24 border-4", style: { borderColor: "rgb(167, 243, 208)", transform: "translate(-50%, -50%) rotate(45deg)", opacity: 0.3 }, refIndex: 2 },
                    { className: "top-1/4 left-1/4 w-20 h-20 border-4", style: { borderColor: "rgb(147, 197, 253)", transform: "rotate(45deg)", opacity: 0.5 }, refIndex: 3 },
                    { className: "bottom-1/4 right-1/4 w-20 h-20 border-4", style: { borderColor: "rgb(192, 132, 252)", transform: "rotate(-45deg)", opacity: 0.5 }, refIndex: 4 },
                    { className: "top-5 right-1/3 w-12 h-12 border-4 rounded-full", style: { borderColor: "rgb(253, 224, 71)", opacity: 0.4 }, refIndex: 5 },
                    { className: "bottom-5 left-1/3 w-14 h-14 border-4 rounded-full", style: { borderColor: "rgb(244, 114, 182)", opacity: 0.4 }, refIndex: 6 },
                    { className: "top-1/3 right-1/4 w-16 h-16 border-4 rounded-full", style: { borderColor: "rgb(45, 212, 191)", opacity: 0.4 }, refIndex: 7 },
                    { className: "bottom-1/3 left-1/4 w-18 h-18 border-4 rounded-full", style: { borderColor: "rgb(129, 140, 248)", opacity: 0.4 }, refIndex: 8 },
                    { className: "top-1/5 left-1/5 w-10 h-10 border-4", style: { borderColor: "rgb(209, 213, 219)", transform: "rotate(45deg)", opacity: 0.4 }, refIndex: 9 },
                    { className: "bottom-1/5 right-1/5 w-10 h-10 border-4", style: { borderColor: "rgb(209, 213, 219)", transform: "rotate(-45deg)", opacity: 0.4 }, refIndex: 10 }
                ].map((shape, index) => (
                    <div
                        key={index}
                        ref={el => {
                            if (el) {
                                shapeRefs.current[shape.refIndex] = el;
                            }
                        }}
                        className={`absolute border-2 rounded-[8px] ${shape.className}`}
                        style={shape.style}
                    />
                ))}
            </div>
            <div className="relative z-10">
                <TitleHeader
                    title="Portfolio"
                    subtitle="Some of my featured projects"
                    className="mb-8"
                />

                <div className="mx-auto flex flex-col gap-16">
                    {topProjects.map((project: ProjectProps) => (
                        <div
                            key={project.id}
                            className="flex rounded-xl flex-col md:flex-row items-stretch bg-transparent overflow-hidden"
                        >
                            <div className="w-full md:w-[70%] flex items-center justify-center relative z-10">
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-lg border">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[400px] object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-[600px] md:max-w-[600px] md:-ml-12 mt-6 md:mt-0 relative z-20 flex items-center justify-center">
                                <div className="flex flex-col w-full bg-slate-950/80 text-gray-200 rounded-xl shadow-xl p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-base mb-3">{project.description}</p>
                                        {project.features && (
                                            <div>
                                                <span className="block font-semibold mb-1 text-sm">Features</span>
                                                <ul className="pl-4 mb-3 text-sm">
                                                    {project.features.slice(0, 3).map((feature, i) => (
                                                        <li key={i} className="mb-1 flex gap-1 items-center">
                                                            <span>
                                                                <FaCheck />
                                                            </span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-white bg-opacity-20 text-black px-3 py-1.5 rounded-md text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mt-4">
                                        {project.githubLink && !project.isPrivate && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition"
                                                title="GitHub"
                                            >
                                                <FaGithub className="text-lg text-black" />
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <Link
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition"
                                                title="Live Demo"
                                            >
                                                <FaExternalLinkAlt className="text-base text-black" />
                                            </Link>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center mt-10'>
                    <Link href="/projects" className="bg-black text-white px-6 py-2 rounded-full transition-transform transform hover:scale-105">
                        See All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
