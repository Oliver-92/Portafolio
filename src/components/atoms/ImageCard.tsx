export default function ImageCard({
    src,
    alt,
    className,
    onClick,
}: {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
}) {
    return (
        <div className={`relative ${className}`} onClick={onClick}>
            <img src={src} alt={alt} className="w-full h-full object-cover rounded-(--border-radius)" loading="lazy" />
        </div>
    )
}