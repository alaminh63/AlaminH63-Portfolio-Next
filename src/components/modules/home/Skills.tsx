import { skills } from '@/data/home-data';

import React from 'react';


export default function Skills() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-10">
            <h3 className="text-red-500 text-sm mb-2">AREAS OF KNOWLEDGE</h3>
            <h2 className="text-3xl font-bold mb-6">My Skill</h2>
            <div className="flex space-x-6 mb-6">
                {skills.map((skill, index) => (
                    <img
                        key={index}
                        src={skill.image}
                        alt={skill.name}
                        className="w-20 h-20"
                    />
                ))}
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105">
                See More
            </button>
        </div>
    );
}
