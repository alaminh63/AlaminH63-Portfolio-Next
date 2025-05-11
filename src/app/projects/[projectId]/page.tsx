"use client";

import { useParams } from "next/navigation";
import { projectData } from "@/data/project-data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SecondaryBanner from "@/components/modules/Shared/SecondaryBanner";
export default function ProjectDetails() {
    const { projectId } = useParams();

    const project = projectData.find((proj) => proj.id === parseInt(projectId as string));

    if (!project) {
        return <div className="text-center text-red-500 font-bold py-10">Project not found</div>;
    }

    return (
        <div>

            <SecondaryBanner title={project.title} />
            <div className="max-w-6xl mx-auto py-10 px-4">
                <div className="mb-4">
                    <button onClick={() => window.history.back()} className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                        &larr; Back
                    </button>
                </div>

                <img src={project.image} alt={project.title} className="w-full h-80 object-cover mb-6 rounded-lg shadow-lg" />
                <p className="text-xl mb-6 leading-relaxed">{project.longDescription}</p>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Features & Key Points</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.featuresAndKeypoints?.map((feature, idx) => (
                            <li key={idx} className="text-lg">{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.challenges?.map((challenge, idx) => (
                            <li key={idx} className="text-lg">{challenge}</li>
                        ))}
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">What I Learned</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.WhatIlearned?.map((learning, idx) => (
                            <li key={idx} className="text-lg">{learning}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-4 mt-8">
                    {project.githubLink && !project.isPrivate && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700 transition">
                            <FaGithub className="mr-1" /> View on GitHub
                        </a>
                    )}
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700 transition">
                            <FaExternalLinkAlt className="mr-1" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
