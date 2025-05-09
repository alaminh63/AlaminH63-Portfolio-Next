import { skills } from '@/data/home-data';
import Image from 'next/image';
import React from 'react';

export default function Skills() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-10">
            <h3 className="text-red-500 text-sm mb-2">AREAS OF KNOWLEDGE</h3>
            <h2 className="text-3xl font-bold mb-6">My Skill</h2>
            <div className="flex space-x-6 mb-6">
                {skills.map((skill, index) => (
                    <div 
                        key={index}
                        className="group relative flex items-center justify-center border p-2 rounded-md" 
                    >
                        <Image
                            src={skill.image}
                            alt={skill.name}
                            height={80}
                            width={80}
                            className="transition-transform duration-300 group-hover:scale-110 "
                        />
                        <div className="absolute  -bottom-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                                {skill.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105">
                See More
            </button>
        </div>
    );
}
