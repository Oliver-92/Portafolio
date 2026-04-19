export default function Button({
    id,
    ariaLabel,
    onClick,
    children,
    className,
    icon,
    variant = "primary",
    disabled = false,
}: {
    id?: string;
    ariaLabel: string;
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}) {
    const variantStyles = {
        primary: `text-(--primary-color)
                text-xs sm:text-sm 
                bg-(--bg-secondary) [border:var(--border-buttons)] 
                rounded-(--border-radius) transition-all 
                duration-(--transition-speed) ease 
                hover:bg-(--bg-buttons-hover) 
                hover:[box-shadow:var(--box-shadow-buttons-hover)] 
                p-1.5 sm:p-2 m-1.5 sm:m-2`,
        secondary: `bg-[#007bff] text-white text-sm sm:text-base
                    hover:bg-[#0056b3] p-1.5 sm:p-2 m-1.5 sm:m-2
                    rounded-(--border-radius) transition-all 
                    duration-(--transition-speed) ease`,
    };

    return (
        <button
            id={id}
            className={`cursor-pointer ${variantStyles[variant]} ${className || ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label={ariaLabel}
            onClick={onClick}
            disabled={disabled}
        >
            {icon}
            {children}
        </button>
    );
}
