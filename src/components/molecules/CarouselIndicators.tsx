interface CarouselIndicatorsProps {
    totalItems: number;
    currentIndex: number;
    onSelect: (index: number) => void;
}

export default function CarouselIndicators({ totalItems, currentIndex, onSelect }: CarouselIndicatorsProps) {
    return (
        <div className="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse">
            {Array.from({ length: totalItems }).map((_, index) => (
                <button
                    key={index}
                    type="button"
                    className={`w-3 h-1 rounded-full transition-all ${index === currentIndex ? "bg-(--accent-color) w-8" : "bg-(--accent-glow) w-1"}`}
                    aria-current={index === currentIndex}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
}
