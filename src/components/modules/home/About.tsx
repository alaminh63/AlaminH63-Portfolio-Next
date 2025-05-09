import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaAws,
 
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiGraphql } from "react-icons/si";

const aboutData = {
  name: "Alex Johnson",
  dob: "07 October 1996",
  address: "Boston, USA",
  phone: "+1 800 555 0117",
  email: "alex.johnson@email.com",
  title: "Full Stack Developer",
  contact: {
    email: "alex.johnson@email.com",
    resume: "/resume.pdf",
  },
  summary: `Hi! I'm Alex Johnson, a dedicated and creative full stack developer with a strong passion for building impactful digital experiences. With over 5 years of experience in web development, I specialize in crafting robust, scalable, and user-friendly applications using modern technologies.`,
  highlights: [
    { label: "React", icon: <FaReact className="text-sky-500" /> },
    { label: "Next.js", icon: <SiNextdotjs className="text-gray-800" /> },
    { label: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { label: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { label: "AWS", icon: <FaAws className="text-yellow-500" /> },
    { label: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { label: "REST API", icon: <FaJsSquare className="text-yellow-400" /> },
    { label: "UI/UX", icon: <FaReact className="text-sky-400" /> },
  ],
  experience: [
    {
      year: "2024",
      position: "Lead Developer",
      company: "TechNova Solutions",
      details:
        "Architected and launched a SaaS platform serving 10,000+ users. Led a team of 6 engineers, implemented CI/CD pipelines, and improved system reliability by 30%.",
    },
    {
      year: "2022",
      position: "Full Stack Engineer",
      company: "Webify",
      details:
        "Developed e-commerce and analytics dashboards. Introduced TypeScript and improved codebase maintainability. Mentored junior developers.",
    },
    {
      year: "2020",
      position: "Freelance Developer",
      company: "",
      details:
        "Built custom websites and web apps for startups and local businesses. Specialized in rapid prototyping and MVP delivery.",
    },
  ],
  education: [
    {
      degree: "MSc in Physics",
      institution: "Massachusetts Institute of Science & Technology",
      year: "2021",
    },
    {
      degree: "BSc in Physics",
      institution: "Boston University",
      year: "2019",
    },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Intermediate" },
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
    <section id="about" className="py-12 px-2 md:px-0 max-w-5xl mx-auto">
      {/* Intro Card */}
      <div className={cardNeo + " max-w-full"}>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Intro</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          {aboutData.summary}
        </p>
      </div>
      {/* Grid Layout */}
      <div className=" flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex flex-col *:">
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
        <div className="md:col-span-2 flex flex-col  ">
          {/* Work Experience */}
          <div className={cardNeo}>
            <h3 className={sectionTitle}>Work Experience</h3>
            <ul className="relative border-l-2 border-[#e0e5ec] pl-6 space-y-8">
              {aboutData.experience.map((exp, idx) => (
                <li key={idx} className="relative">
                  <span className="absolute -left-4 top-2 w-4 h-4 bg-white border-2 border-blue-400 rounded-full shadow-[0_2px_8px_0_rgba(31,38,135,0.10)]"></span>
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                    <span className="text-blue-700 font-bold text-lg min-w-[70px]">{exp.year}</span>
                    <span className="font-semibold text-gray-900">
                      {exp.position}
                      {exp.company && ` at ${exp.company}`}
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{exp.details}</div>
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
          <div className={cardNeo + " flex flex-col md:flex-row gap-4"}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
