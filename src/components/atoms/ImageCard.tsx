export default function ImageCard({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="aspect-video relative overflow-hidden">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-(--transition-speed) ease"
                loading="lazy"
            />
        </div>
    )
}
