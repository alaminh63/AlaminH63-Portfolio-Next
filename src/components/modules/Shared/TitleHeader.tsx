interface TitleHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function TitleHeader({ title, subtitle, className }: TitleHeaderProps) {
    return (
        <div className={`relative py-12 ${className}`}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
                <div className="bg-white px-8">
                    <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                        {title}
                    </h2>
                    {subtitle && (
                        <div className="mt-6 max-w-3xl mx-auto">
                            <p className="text-2xl text-gray-500 leading-relaxed">
                                {subtitle}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
