
import { blogsData } from '@/data/blogs-data';
import TitleHeader from '../Shared/TitleHeader';
import Link from 'next/link';

interface BlogPost {
    id: number;
    title: string;
    date: string;
    image: string;
}

export default function Blogs() {
    return (
        <div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {blogsData.map((post: BlogPost) => (
                    <div
                        key={post.id}
                        className="bg-white shadow-lg overflow-hidden border-2 border-gray-200 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative h-48">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <span className="text-sm text-gray-500">{post.date}</span>
                            <div className="mt-4">
                                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}
