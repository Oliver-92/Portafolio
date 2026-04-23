import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";

export default function Navbar() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "#index", label: t.index },
        { href: "#about-me", label: t.about },
        { href: "#projects", label: t.projects },
        { href: "#contact", label: t.contact },
    ];

    return (
        <nav
            role="navigation"
            className="fixed top-0 left-0 right-0 z-10 h-12 sm:h-14 transition-all duration-(--transition-speed) ease"
            style={{
                background: scrolled ? "var(--card-bg)" : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled ? "1px solid var(--card-border)" : "1px solid transparent",
                boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
            }}
        >
            <ul className="flex justify-start md:justify-center items-center h-full gap-4 md:gap-7 list-none px-4 m-0">
                {links.map(({ href, label }) => (
                    <li key={href}>
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
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
