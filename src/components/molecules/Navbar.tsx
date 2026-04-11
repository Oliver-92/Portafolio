import { useLanguage } from "../../context/LanguageProvider.js";
import { translations } from "../../utils/translations.js";

export default function Navbar() {
    const { lang } = useLanguage();
    const t = translations[lang]
    return (
        <nav className="fixed text-xs sm:text-base top-0 w-full h-12 sm:h-16 p-4 [box-shadow:var(--navbar-box-shadow)] z-1 transition-colors duration-(--transition-speed) ease" role="navigation">
            <ul className="flex justify-start md:justify-center items-center gap-2.5 md:gap-5 list-none">
                <li><a
                    className="text-decoration-none text-(--primary-color) hover:[text-shadow:1px_1px_1px_var(--primary-color)]"
                    href="#index"
                    aria-current="page"
                >{t.index}</a></li>
                <li><a
                    className="text-decoration-none text-(--primary-color) hover:[text-shadow:1px_1px_1px_var(--primary-color)]"
                    href="#about-me"
                    aria-current="page"
                >{t.about}</a></li>
                <li><a
                    className="text-decoration-none text-(--primary-color) hover:[text-shadow:1px_1px_1px_var(--primary-color)]"
                    href="#projects"
                    aria-current="page"
                >{t.projects}</a></li>
                <li><a
                    className="text-decoration-none text-(--primary-color) hover:[text-shadow:1px_1px_1px_var(--primary-color)]"
                    href="#contact"
                    aria-current="page"
                >{t.contact}</a></li>
            </ul>
        </nav>
    )
}