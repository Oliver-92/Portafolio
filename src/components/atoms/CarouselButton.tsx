interface CarouselButtonProps {
    direction: "prev" | "next";
    onClick: () => void;
}

export default function CarouselButton({ direction, onClick }: CarouselButtonProps) {
    const isPrev = direction === "prev";
    const positionClass = isPrev ? "left-0" : "right-0";
    const ariaLabel = isPrev ? "Previous" : "Next";
    
    return (
        <button
            type="button"
            className={`absolute top-1/2 -translate-y-1/2 ${positionClass} z-30 hidden sm:flex items-center justify-center h-full px-1 sm:px-2 cursor-pointer group focus:outline-none`}
            onClick={onClick}
        >
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-(--card-bg) border border-(--card-border) shadow-md group-hover:bg-(--card-bg-hover) transition-all">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-(--text-primary) rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    {isPrev ? (
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
                    ) : (
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                    )}
                </svg>
                <span className="sr-only">{ariaLabel}</span>
            </span>
        </button>
    );
}
