interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <a
            href={href}
            className="
                relative text-xs sm:text-sm font-medium
                text-(--primary-color) no-underline
                transition-colors duration-(--transition-speed) ease
                after:content-[''] after:absolute after:-bottom-1 after:left-0
                after:w-0 after:h-[2px] after:bg-(--accent-color)
                after:transition-all after:duration-(--transition-speed) after:ease
                hover:after:w-full hover:text-(--accent-color)
            "
        >
            {children}
        </a>
    );
}
