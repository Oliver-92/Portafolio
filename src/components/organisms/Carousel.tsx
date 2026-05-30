import { useState, Children } from "react";
import CarouselButton from "../atoms/CarouselButton";
import CarouselIndicators from "../molecules/CarouselIndicators";

export default function Carousel({ children, ariaLabel = "Carousel" }: { children: React.ReactNode; ariaLabel?: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Children.toArray(children);

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

    if (!items.length) return null;

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
        if (e.key === "ArrowRight") { e.preventDefault(); nextSlide(); }
    };

    return (
        <div
            className="relative w-full py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent-color) rounded-(--border-radius)"
            role="region"
            aria-label={ariaLabel}
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div
                className="overflow-hidden mx-2 sm:mx-8 md:mx-12"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="w-full shrink-0 px-2 sm:px-4 flex justify-center">
                            <div className="w-full max-w-2xl lg:max-w-3xl">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>

                <CarouselIndicators 
                    totalItems={items.length} 
                    currentIndex={currentIndex} 
                    onSelect={setCurrentIndex} 
                />

                <CarouselButton direction="prev" onClick={prevSlide} />
                <CarouselButton direction="next" onClick={nextSlide} />
            </div>
        </div>
    );
}