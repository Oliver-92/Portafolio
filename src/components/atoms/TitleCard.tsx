export default function TitleCard({ title, className }: { title: string, className?: string }) {
    return (
        <h2 className={`text-(--primary-color) text-sm sm:text-base font-semibold ${className}`}>
            {title}
        </h2>
    )
}