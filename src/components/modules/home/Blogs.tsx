import Image from "next/image";

interface BlogPost {
    id: number;
    title: string;
    description: string;
    category: {
        name: string;
        color: string;
        bgColor: string;
    };
    readTime: string;
    author: {
        name: string;
        avatar: string;
    };
    date: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of Web Development",
        description: "Exploring the latest trends and technologies shaping the future of web development...",
        category: {
            name: "Technology",
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        readTime: "5 min read",
        author: {
            name: "John Doe",
            avatar: "/avatar1.jpg"
        },
        date: "Mar 15, 2024",
        image: "/blog1.jpg"
    },
    {
        id: 2,
        title: "UI/UX Design Principles",
        description: "Essential principles and best practices for creating intuitive user interfaces...",
        category: {
            name: "Design",
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        readTime: "8 min read",
        author: {
            name: "Jane Smith",
            avatar: "/avatar2.jpg"
        },
        date: "Mar 14, 2024",
        image: "/blog2.jpg"
    },
    {
        id: 3,
        title: "React Best Practices",
        description: "Learn the most effective patterns and practices for React development...",
        category: {
            name: "Development",
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        readTime: "6 min read",
        author: {
            name: "Mike Johnson",
            avatar: "/avatar3.jpg"
        },
        date: "Mar 13, 2024",
        image: "/blog3.jpg"
    }
];

export default function Blogs() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-xl shadow-[0_4px_24px_0_rgba(31,38,135,0.10)] overflow-hidden border-2 border-[#e0e5ec] hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative h-48">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className={`px-3 py-1 ${post.category.bgColor} ${post.category.color} rounded-full text-sm`}>
                                    {post.category.name}
                                </span>
                                <span className="text-gray-500 text-sm">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                                    <span className="text-sm font-medium">{post.author.name}</span>
                                </div>
                                <span className="text-sm text-gray-500">{post.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
