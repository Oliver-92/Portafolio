export default function DescriptionCard({ description, className }: { description: string, className?: string }) {
    return (
        <p className={`text-(--primary-color) text-xs lg:text-sm text-justify tracking-wide leading-relaxed ${className}`}>
            {description}
        </p>
    )
}
