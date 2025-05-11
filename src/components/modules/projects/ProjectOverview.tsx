"use client"

import { useState } from "react";
import { projectData } from "@/data/project-data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function ProjectOverview() {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...new Set(projectData.map((project) => project.category))];

    const filteredProjects = activeCategory === "All"
        ? projectData
        : projectData.filter((project) => project.category === activeCategory);

    return (
        <div>
            <section className="py-10 max-w-6xl mx-auto">

                <div className="flex justify-center mb-6">
                    <div className="flex overflow-hidden rounded-full">
                        {categories.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 font-medium ${activeCategory === category
                                    ? "bg-black text-white"
                                    : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {filteredProjects.map((project, idx) => (
                        <div key={idx} className="bg-white shadow-lg overflow-hidden flex flex-col h-full">
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="flex flex-col flex-grow p-4 gap-2">
                                <h3 className="text-xl font-semibold ">{project.title}</h3>

                                <span className="flex flex-wrap gap-1 text-gray-700 text-sm">
                                    Technologies: {project.technologies?.map((tech, idx) => (
                                        <span key={idx} className="inline-block bg-slate-800 text-white text-xs px-2 py-1 rounded mr-1">
                                            {tech}
                                        </span>
                                    ))}
                                </span>
                                <div className="mt-auto flex justify-between items-center ">
                                    <div className="">
                                        {project.isCompanyProject || project.isPrivate ? (
                                            <span className="text-red-500 font-semibold text-sm mt-1">
                                                Source code is private for commercial issue
                                            </span>
                                        ) : (
                                            project.githubLink && (
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 text-sm mt-1">
                                                    <FaGithub className="mr-1" /> View on GitHub
                                                </a>
                                            )
                                        )}
                                    </div>

                                </div>
                                <div className=" border-t border-gray-200 pt-4 flex justify-between items-center">
                                    <Link href={`/projects/${project.id}`} className="bg-black text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105">Details</Link>
                                    <div className=" " >
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 text-sm mt-1">
                                                <FaExternalLinkAlt className="mr-1" /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
