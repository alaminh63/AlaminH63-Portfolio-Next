 
import { FaHome, FaUser, FaBriefcase, FaBlog, FaEnvelope } from "react-icons/fa";

const menuItems = [
    { icon: <FaHome />, label: "Home" },
    { icon: <FaUser />, label: "About" },
    { icon: <FaBriefcase />, label: "Work" },
    { icon: <FaBlog />, label: "Blog" },
    { icon: <FaEnvelope />, label: "Contact" },
];

export default function Sidebar() {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                    <span className="text-gray-800 font-bold text-2xl">A</span>
                </div>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center">
                <ul className="space-y-8">
                    {menuItems.map((item, index) => (
                        <li key={index} className="flex flex-col items-center ">
                            {item.icon}
                            <span className="text-sm">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="py-4"></div>
        </>


    );
}
