'use client'

import React from 'react';
import { FaUsers, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa';
import TitleHeader from '../Shared/TitleHeader'; // Import TitleHeader

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description }) => (
    <div className=" bg-[#e025259c] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
        <div className="text-blue-600 text-3xl mb-4">{icon}</div> {/* Blue Accent */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
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
        <section className="py-24  "> {/* Light Gray Background */}
            <div className=" ">
                <TitleHeader
                    title="My Professional Journey"
                    subtitle="Crafting efficient, scalable solutions while constantly learning and evolving as a developer."
                    className="mb-8"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Increased Spacing */}
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            title={stat.title}
                            description={stat.description}
                        />
                    ))}
                </div>

               
            </div>
        </section>
    );
}