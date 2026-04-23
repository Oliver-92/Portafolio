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
                rounded-(--border-radius) transition-all 
                duration-(--transition-speed) ease 
                p-1.5 sm:p-2 m-1.5 sm:m-2
                backdrop-blur-md hover:-translate-y-1` +
            `   border-1 [border:var(--border-buttons)] bg-(--bg-secondary) 
                hover:[box-shadow:var(--box-shadow-buttons-hover)]`,
        secondary: `text-white text-sm sm:text-base
                    p-1.5 sm:p-2 m-1.5 sm:m-2 font-medium
                    rounded-(--border-radius) transition-all 
                    duration-(--transition-speed) ease
                    bg-gradient-to-r from-(--accent-color) to-blue-600
                    hover:scale-102 hover:shadow-[0_4px_20px_var(--accent-glow)]`
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
