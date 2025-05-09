'use client'
import React, { useEffect, useState } from 'react';


export default function Banner() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className="relative flex flex-col items-center justify-center min-h-screen bg-[#111312] px-4 overflow-hidden"
        >
            {/* Background with Parallax */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <img
                    src="https://www.shutterstock.com/shutterstock/videos/3606751217/thumb/1.jpg?ip=x480"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="relative w-44 h-44 mb-8 rounded-full overflow-hidden border-4 border-[#23272b]">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpxEMeqEMP2Ly9y5E7PmEYf6NXPrjdggylw&s"
                        alt="profile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="flex gap-3 mb-4 justify-center">
                    <span className="bg-white  px-4 py-1 rounded-full text-xs font-medium tracking-wide">Programmer</span>
                    <span className="bg-white  px-4 py-1 rounded-full text-xs font-medium tracking-wide">Software Developer</span>
                    <span className="bg-white  px-4 py-1 rounded-full text-xs font-medium tracking-wide">Problem Solver</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 text-center">
                    <span className="text-[#e5e7eb]">MD Al Amin Hasan</span>
                </h1>
                <h2 className="text-base md:text-xl text-gray-300 font-medium mb-4 text-center">
                    Full-Stack Software Developer from Bangladesh
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-xl text-center mb-8">
                    Passionate about building innovative solutions and solving complex problems to create impactful digital experiences.
                </p>
                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow hover:bg-[#35393e] transition-colors duration-200"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
