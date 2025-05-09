'use client'
import React from 'react';

export default function Banner() {
    return (
        <div
            className="flex flex-col h-screen items-center justify-center bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M1BQZKqdp2CV3QV5nUEsqSg1ygegLmqRygjlbnwwfHwwfHx8MA%3D%3D)',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="w-48 h-48 mb-8 relative">
                <img
                    src="/path/to/profile-picture.jpg"
                    alt="Profile Picture"
                    className="w-full h-full rounded-full shadow-2xl"
                    style={{
                        boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.5)',
                    }}
                />
            </div>
            <h1 className="text-6xl font-extrabold mb-4 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                John Doe
            </h1>
            <h2 className="text-4xl mb-6 text-white" style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)' }}>
                Full Stack Developer
            </h2>
            <a
                href="/path/to/resume.pdf"
                download
                className="bg-white text-indigo-500 px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
                style={{
                    boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.5)',
                }}
            >
                Download Resume
            </a>
        </div>
    );
}
