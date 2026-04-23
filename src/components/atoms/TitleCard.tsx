export default function TitleCard({ title, className }: { title: string, className?: string }) {
    return (
        <h2
            className={`text-sm sm:text-base font-bold tracking-wide ${className}`}
            style={{ color: "var(--accent-color)" }}
        >
            {title}
        </h2>
    )
}
