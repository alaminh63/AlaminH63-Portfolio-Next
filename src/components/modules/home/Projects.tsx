'use client'
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectData } from '../../../data/project-data';
import Image from 'next/image';

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    githubLink?: string | null;
    liveLink?: string | null;
    technologies: string[];
    image: string;
    features: string[];
    challenges: string[];
    screenshots: string[];
    fullDetails: string;
    category: 'Web' | 'Mobile' | 'Backend' | 'Data Science';
    date: string;
    rank: number;
}

export default function Projects() {
    // Sort projects by rank and get top 3
    const topProjects: ProjectProps[] = [...projectData]
        .map(project => ({
            ...project,
            category: project.category as 'Web' | 'Mobile' | 'Backend' | 'Data Science',
            rank: project.rank ?? Infinity // Assign default rank for null values
        }))
        .sort((a, b) => (a.rank || 0) - (b.rank || 0))
        .slice(0, 3);

    return (
        <div className="py-16 bg-white min-h-screen">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                    Top Ranked Projects
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Here are my top 3 ranked projects that showcase my best work and expertise.
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8">
                {topProjects.map((project: ProjectProps) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-lg shadow-md p-6 mb-8 flex flex-col md:flex-row items-stretch hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="md:w-1/3 flex items-center justify-center p-4">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg"
                               
                            />
                        </div>
                        <div className="md:w-2/3 flex flex-col justify-between p-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {project.title}
                                    </h3>

                                </div>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2 text-gray-700">
                                        Key Features:
                                    </h4>
                                    <ul className="list-disc pl-5 mb-4">
                                        {project.features.slice(0, 3).map((feature: string, idx: number) => (
                                            <li key={idx} className="text-gray-600">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <h4 className="font-semibold mb-2 text-gray-700">
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech: string, idx: number) => (
                                            <span key={idx} className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-6">
                                <a
                                    href={project.githubLink || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <a
                    href="https://github.com/username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 inline-flex items-center gap-2"
                >
                    <FaGithub /> View All Projects on GitHub
                </a>
            </div>
        </div>
    );
}
