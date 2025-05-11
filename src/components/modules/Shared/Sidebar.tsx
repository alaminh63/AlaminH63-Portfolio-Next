"use client"
import { FaHome, FaUser, FaBriefcase, FaBlog, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { icon: <FaHome />, label: "Home", href: "/" },
    { icon: <FaUser />, label: "About", href: "/about" },
    { icon: <FaBriefcase />, label: "Work", href: "/projects" },
    { icon: <FaBlog />, label: "Blog", href: "/blogs" },
    { icon: <FaEnvelope />, label: "Contact", href: "/contact" },
];

export default function Sidebar() {
    const currentPath = usePathname();

    return (
        <>
            <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 rounded-full bg-black/90 flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-2xl">A</span>
                </div>
            </div>
            <div className="flex-grow flex flex-col   justify-center">
                <ul className=" ">
                    {menuItems.map((item, index) => (
                        <li key={index} className={`flex flex-col items-center py-4 ${currentPath === item.href ? 'bg-black/90 text-white' : ''}`}>
                            <Link href={item.href}>
                                <span className={`flex flex-col items-center `}>
                                    {item.icon}
                                    <span className="text-sm">{item.label}</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-4"></div>
        </>
    );
}
