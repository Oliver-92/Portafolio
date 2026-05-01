export default function ImageCard({
    src,
    alt,
    className,
    onClick,
    children,
}: {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}) {
    return (
        <div className={`aspect-video relative overflow-hidden ${className}`} onClick={onClick}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-(--transition-speed) ease"
                loading="lazy"
            />
            <span className="absolute bottom-0 left-0">
                {children}
            </span>
        </div>
    )
}
