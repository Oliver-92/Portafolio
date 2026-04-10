export default function Button({
    id,
    ariaLabel,
    onClick,
    children,
    className,
}: {
    id: string;
    ariaLabel: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}) {
    return (
        <button
            id={id}
            className={`cursor-pointer text-(--primary-color)
                text-xs sm:text-base 
                bg-(--bg-secondary) [border:var(--border-buttons)] 
                rounded-(--border-radius) transition-all 
                duration-(--transition-speed) ease 
                hover:bg-(--bg-buttons-hover) 
                hover:[box-shadow:var(--box-shadow-buttons-hover)] 
                p-1.5 sm:p-2 m-1.5 sm:m-2 ${className || ""}`}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    );
}