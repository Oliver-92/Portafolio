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
        <div className={`aspect-video relative overflow-hidden ${className}`} onClick={onClick}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover 
                absolute top-0 left-0 right-0 bottom-0
                hover:scale-105 transition-all duration-(--transition-speed) my-6 "
                loading="lazy" />
        </div>
    )
}