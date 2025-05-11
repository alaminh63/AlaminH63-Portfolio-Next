interface TitleHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function TitleHeader({ title, subtitle, className }: TitleHeaderProps) {
    return (
        <div className={`text-center  ${className}`}>
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-lg">{subtitle}</p>}
        </div>
    );
}
