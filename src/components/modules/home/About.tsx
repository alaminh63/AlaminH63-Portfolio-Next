import React from "react";
import profile from "@/assets/user/profile.png";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaNode,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";
import { SiTypescript, SiNextdotjs, SiGraphql } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const aboutData = {
  name: "MD Al Amin Hasan",
  dob: "10th November 2002",
  address: "Jashore, Bangladesh",
  phone: "+8801775006663",
  email: "alaminhasanpro@gmail.com",
  title: "Full Stack Developer",
  contact: {
    email: "alaminhasanpro@gmail.com",
    resume: "/resume.pdf",
  },
  summary: `Hi! I'm MD Al Amin Hasan, a dedicated and creative full stack developer with a strong passion for building impactful digital experiences. With over 2 years of experience in web development, I specialize in crafting robust, scalable, and user-friendly applications using modern technologies.`,
  highlights: [

    { label: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { label: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { label: "React", icon: <FaReact className="text-sky-500" /> },
    { label: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
    { label: "Node.js", icon: <FaNode className="text-green-500" /> },
    { label: "Express", icon: <FaNodeJs className="text-green-600" /> },
    { label: "MongoDB", icon: <SiGraphql className="text-green-400" /> },
    { label: "Socket.io", icon: <TbBrandSocketIo className="text-gray-500" /> },
    { label: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { label: "Git", icon: <FaGitAlt className="text-black" /> },
    { label: "REST API", icon: <FaNodeJs className="text-green-400" /> },
  ],
  experience: [
    {

      joined: "Apr 2024",
      left: "Current",
      position: "Full Stack Developer",
      company: "DigitX Group",
      remoteOrOnsite: "Hybrid",
      origin: "USA/Bangladesh",
      responsibilities: [
        "Contributed to various projects as a Full Stack Developer.",
        "Transitioned to AI Innovations projects after 2025.",
        "Focused on real estate production-level applications.",
        "Collaborated with multiple AI platforms.",
        "Developed AI-driven websites.",
      ],
      official_website: "https://digitxgroup.com/",
    },
    {

      joined: "Sep 2023",
      left: "Apr 2024",
      position: "Web Developer",
      company: "Exotic It Hub",
      remoteOrOnsite: "Remote",
      origin: "Bangladesh",
      responsibilities: [
        "Developed and maintained the company's website.",
        "Worked on various web applications.",
        "Ensured website performance and security.",
      ],
      official_website: "https://exoticithub.com/",
    },

  ],
  courses: [
    {
      name: "Full Stack Development",
      institution: "Programming Hero",
      start: "Dec 2022",
      end: "June 2023",
      certificate: "https://www.programming-hero.com/certificate/alaminhasanpro",
    },
    {
      name: "Next Level Web Development",
      institution: "Programming Hero",
      start: "Nov 2024",
      end: "Apr 2025",
      certificate: "https://www.programming-hero.com/certificate/alaminhasanpro",
    },
    {
      name: "Reactive Excelerator ",
      institution: "Learn with Sumit - LWS",
      start: "May 2025",
      end: "Current",
    },

  ],

  education: [
    {
      degree: "Higher Secondary Certificate",
      institution: "Jashore Board",
      year: "2020",
    },
    {
      degree: "Secondary School Certificate",
      institution: "B.F.I.I High School, Jashore",
      year: "2018",
    },
  ],
  languages: [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Intermediate" },
  ],
};

const cardNeo =
  "bg-[#f5f6fa] rounded-2xl shadow-[0_4px_24px_0_rgba(31,38,135,0.10),0_1.5px_4px_0_rgba(31,38,135,0.08)] border border-[#e0e5ec] p-6 mb-6";
const sectionTitle =
  "text-lg font-semibold text-gray-700 mb-2 tracking-wide";
const labelClass =
  "font-medium text-gray-600";
const valueClass =
  "text-gray-900";
const iconBox =
  "w-9 h-9 flex items-center justify-center rounded-xl bg-white shadow-[0_2px_8px_0_rgba(31,38,135,0.08)] border border-[#e0e5ec]";

export default function About() {
  return (
    <section id="about" className="px-2 md:px-0 mx-auto bg-gray-200">
      {/* Short Banner */}
      <div className="relative mb-10 py-10 shadow-lg">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://www.shutterstock.com/shutterstock/videos/3606751217/thumb/1.jpg?ip=x480')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1),  rgba(0, 0, 0, 1))'
          }}
        ></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between text-center z-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-extrabold text-white mb-2">
              {aboutData.name}
            </h1>
            <h2 className="text-base text-gray-300 font-medium mb-4">
              {aboutData.title}
            </h2>
            <div className="flex gap-4 ">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
                <FaLinkedin className="text-2xl" />
              </a>
              <span className="text-white">{aboutData.phone}</span>
            </div>
          </div>
          <div className="relative w-44 h-44 mb-4 md:mb-0 rounded-full overflow-hidden border-4 border-[#23272b]">
            <Image
              src={profile}
              alt="Profile"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        {/* Intro Card */}
        <div className={cardNeo + " max-w-full"}>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Intro</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {aboutData.summary}
          </p>
        </div>
        {/* Grid Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* My Info */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>My Info</h3>
              <div className="space-y-2">
                <div>
                  <span className={labelClass}>Name: </span>
                  <span className={valueClass}>{aboutData.name}</span>
                </div>
                <div>
                  <span className={labelClass}>Date of Birth: </span>
                  <span className={valueClass}>{aboutData.dob}</span>
                </div>
                <div>
                  <span className={labelClass}>Address: </span>
                  <span className={valueClass}>{aboutData.address}</span>
                </div>
                <div>
                  <span className={labelClass}>Phone: </span>
                  <span className={valueClass}>{aboutData.phone}</span>
                </div>
                <div>
                  <span className={labelClass}>Email: </span>
                  <span className={valueClass}>{aboutData.email}</span>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>Skills</h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-1"
                    title={typeof item === "string" ? item : item.label}
                  >
                    <div className={iconBox + " text-2xl"}>
                      {typeof item === "string" ? <FaJsSquare /> : item.icon}
                    </div>
                    <span className="text-xs text-gray-600">
                      {typeof item === "string" ? item : item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Education */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>Education</h3>
              <ul className="space-y-2">
                {aboutData.education.map((edu, idx) => (
                  <li key={idx}>
                    <div className="font-semibold text-gray-800">{edu.degree}</div>
                    <div className="text-sm text-gray-600">{edu.institution}</div>
                    <div className="text-xs text-gray-400">{edu.year}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Languages */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>Languages</h3>
              <ul className="flex flex-col gap-1">
                {aboutData.languages.map((lang, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="text-gray-700">{lang.name}</span>
                    <span className="text-gray-500 text-sm">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Middle Spacer (for neomorphic shadow effect) */}
          <div className="hidden md:block"></div>
          {/* Right Column */}
          <div className="md:col-span-2 flex flex-col">
            {/* Work Experience */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>Work Experience</h3>
              <ul className="relative border-l-2 border-[#e0e5ec] pl-6 space-y-8">
                {aboutData.experience.map((exp, idx) => (
                  <li key={idx} className="relative">
                    <span className="absolute -left-8 top-2 w-4 h-4 bg-white border-2 border-blue-400 rounded-full shadow-[0_2px_8px_0_rgba(31,38,135,0.10)]"></span>
                    <div className="flex flex-col">

                      <span className="font-semibold text-gray-900 text-lg">
                        {exp.position}
                        {exp.company && ` at ${exp.company}`}
                      </span>
                      <div className="flex gap-2">

                        <span className="text-blue-700 font-semibold text-sm min-w-[70px]">{exp.joined} - {exp.left}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="  text-gray-500 text-sm">
                          Location: {exp.origin}
                        </span>
                        <span className="  text-gray-500 text-sm">({exp.remoteOrOnsite}) </span>
                        <span>
                          <Link href={exp.official_website || ""} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm italic">(Official Website)</Link>
                        </span>
                      </div>
                    </div>
                    <span className="font-semibold text-sm text-gray-700">Responsibilities</span>
                    <ul className="text-gray-600 text-sm  list-disc pl-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>

                  </li>
                ))}
              </ul>
            </div>
            {/* Courses */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>Courses & Certificates</h3>
              <ul className="relative border-l-2 border-[#e0e5ec] pl-6 space-y-4">
                {aboutData.courses.map((course, idx) => (
                  <li key={idx} className="relative">
                    <span className="absolute -left-8 top-2 w-4 h-4 bg-white border-2 border-blue-400 rounded-full shadow-[0_2px_8px_0_rgba(31,38,135,0.10)]"></span>
                    <div className="flex flex-col">
                      <div className="flex  gap-2">

                        <span className="font-semibold text-gray-900 text-lg">{course.name}</span>
                        <span>
                          <Link href={course.certificate || ""} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-sm italic">(Certificate)</Link>
                        </span>
                      </div>
                      <span className="text-blue-700 font-semibold text-sm min-w-[70px]">{course.start} - {course.end}</span>
                      <span className="text-gray-500 text-sm">{course.institution}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hobbies / Interests */}
            <div className={cardNeo}>
              <h3 className={sectionTitle}>Interests & Hobbies</h3>
              <ul className="flex flex-wrap gap-2">
                {[
                  "Exploring new JavaScript frameworks",
                  "Contributing to open source",
                  "Writing technical blogs",
                  "Hiking and landscape photography",
                ].map((hobby, idx) => (
                  <li
                    key={idx}
                    className="bg-white border border-[#e0e5ec] text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-[0_1.5px_4px_0_rgba(31,38,135,0.08)]"
                  >
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
            {/* Contact & Resume Buttons */}
          </div>
        </div>
        {/* <div className={cardNeo + " flex flex-col md:flex-row gap-4"}>
              <a
                href={`mailto:${aboutData.contact.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-b from-[#f5f6fa] to-[#e0e5ec] rounded-xl font-semibold shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] border border-[#e0e5ec] text-blue-700 hover:bg-blue-50 transition text-center"
              >
                <FaEnvelope className="text-blue-500" />
                Contact Me
              </a>
              <a
                href={aboutData.contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-400 text-white rounded-xl font-semibold shadow-[0_4px_16px_0_rgba(31,38,135,0.10)] border border-blue-400 hover:from-blue-600 hover:to-blue-500 transition text-center"
              >
                <FaFileDownload />
                Download Resume
              </a>
            </div> */}
      </div>
    </section>
  );
}
