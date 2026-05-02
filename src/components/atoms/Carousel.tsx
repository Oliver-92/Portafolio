import { useState, Children } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = Children.toArray(children);

    const nextSlide = () => setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

    if (!items.length) return null;

    return (
        <div className="relative w-full py-4">
            <div className="overflow-hidden mx-2 sm:mx-8 md:mx-12">
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

                {/* Indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-0 left-1/2 space-x-3 rtl:space-x-reverse">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-1 rounded-full transition-all ${index === currentIndex ? "bg-(--accent-color) w-8" : "bg-(--accent-glow) w-1"}`}
                            aria-current={index === currentIndex}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

                {/* Controls */}
                <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 left-0 z-30 flex items-center justify-center h-full px-1 sm:px-2 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-(--card-bg) border border-(--card-border) shadow-md group-hover:bg-(--card-bg-hover) transition-all">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-(--text-primary) rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" /></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 -translate-y-1/2 right-0 z-30 flex items-center justify-center h-full px-1 sm:px-2 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                >
                    <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-(--card-bg) border border-(--card-border) shadow-md group-hover:bg-(--card-bg-hover) transition-all">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-(--text-primary) rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" /></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
}