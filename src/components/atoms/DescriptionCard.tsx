export default function DescriptionCard({ description, className }: { description: string, className?: string }) {
    return (
        <p className={`text-(--primary-color) text-sm sm:text-base ${className}`}>
            {description}
        </p>
    )
}