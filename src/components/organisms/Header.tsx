import { ThemeToggle } from "../molecules/ThemeToggle";
import { LanguageToggle } from "../molecules/LanguageToggle";
import Navbar from "../molecules/Navbar";

export default function Header() {
    return (
        <header>
            <Navbar />
            <div className="fixed top-0 right-0 z-10 flex items-center gap-1 sm:gap-2 h-12 sm:h-14 pr-2 sm:pr-4">
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </header>
    )
}
