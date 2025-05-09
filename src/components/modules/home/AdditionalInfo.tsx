'use client'
import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaUsers, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-50 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200 hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
    <div className="text-emerald-500 text-2xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export default function AdditionalInfo() {
  const stats = [
    {
      icon: <FaUsers />,
      title: "Personal Development",
      description: "Dedicated to continuous learning and growth in software development and emerging technologies."
    },
    {
      icon: <FaChartLine />,
      title: "Technical Excellence",
      description: "Committed to writing clean, efficient code and following best practices in software development."
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Passionate about finding innovative solutions to complex technical challenges."
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      description: "Focused on advancing my career through meaningful projects and continuous improvement."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            My Professional Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I am passionate about creating efficient, scalable solutions while continuously learning and growing as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>

        <div className="mt-20 bg-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                My Development Approach
              </h3>
              <p className="text-slate-600 mb-6">
                I focus on writing clean, maintainable code while following best practices and design patterns. My development process emphasizes quality, efficiency, and continuous learning.
              </p>
              <ul className="space-y-3">
                {[
                  "Clean Code Principles",
                  "Test-Driven Development",
                  "Code Review & Documentation",
                  "Performance Optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/coding-workstation.jpg"
                  alt="Development Environment"
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
