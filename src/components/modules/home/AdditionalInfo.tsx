'use client'

import React from 'react';
import { FaUsers, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa';

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description }) => (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="text-indigo-500 text-3xl mb-4">{icon}</div> {/* Subtle Indigo Accent */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
);

export default function AdditionalInfo() {
    const stats = [
        {
            icon: <FaUsers />,
            title: "Personal Development",
            description: "Continuous learning and growth in software development and emerging technologies are my priorities."
        },
        {
            icon: <FaChartLine />,
            title: "Technical Excellence",
            description: "I'm committed to writing clean, efficient, and well-documented code, adhering to best practices."
        },
        {
            icon: <FaLightbulb />,
            title: "Innovative Problem Solving",
            description: "Passionate about devising innovative solutions to complex technical challenges, driving progress."
        },
        {
            icon: <FaRocket />,
            title: "Career Advancement",
            description: "I'm focused on advancing my career through impactful projects and continuous self-improvement."
        }
    ];

    return (
        <section className="py-24 bg-gray-50"> {/* Light Gray Background */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"> {/* Stronger Heading */}
                        My Professional Journey
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"> {/* Improved Readability */}
                        I am dedicated to crafting efficient, scalable solutions while constantly learning and evolving as a developer. My focus extends to creating user-centric and accessible web experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased Spacing */}
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            title={stat.title}
                            description={stat.description}
                        />
                    ))}
                </div>

                <div className="mt-24 bg-indigo-50 rounded-3xl p-10 md:p-16"> {/* Indigo Accent Container */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6"> {/* Stronger Subheading */}
                                Development Philosophy
                            </h3>
                            <p className="text-gray-700 mb-8 leading-relaxed"> {/* Improved Readability */}
                                I believe in writing modular, well-tested code that is easy to understand and maintain. My development process emphasizes collaboration, continuous integration, and a relentless pursuit of quality.
                            </p>
                            <ul className="space-y-4"> {/* Increased Spacing */}
                                {[
                                    "Clean Code Architecture",
                                    "Test-Driven Development (TDD)",
                                    "Comprehensive Code Reviews",
                                    "Performance and Accessibility Optimization",
                                    "Agile Development Methodologies"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center text-gray-700 text-lg"> {/* Increased Text Size */}
                                        <span className="w-3 h-3 bg-indigo-500 rounded-full mr-4"></span> {/* Indigo Accent Bullet */}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden shadow-xl">
                            <div className="aspect-w-16 aspect-h-9">
                                <img
                                    src="/images/coding-workstation.jpg"
                                    alt="Development Environment"
                                    width={640} // Specify width
                                    height={360} // Specify height
                                    className="object-cover w-full h-full"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}