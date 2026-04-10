import { ThemeToggle } from "../molecules/ThemeToggle.js";
import { LanguageToggle } from "../molecules/LanguageToggle.js";
import Navbar from "../molecules/Navbar.js";

export default function Header() {

    return (
        <header>
            <Navbar />
            <div className="fixed right-0 z-2 flex gap-1 sm:gap-2">
                <LanguageToggle />
                <ThemeToggle />
            </div>
        </header>
    )
}