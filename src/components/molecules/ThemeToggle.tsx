import { useState } from "react";
import Button from "../atoms/Button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";
        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
            return savedTheme;
        }
        return "dark";
    });

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <Button
            id="toggle-theme"
            ariaLabel="Change theme"
            onClick={toggleTheme}
            className="w-7 h-7 sm:w-9 sm:h-9"
        >
            {theme === "dark"
                ? <Sun className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                : <Moon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />}
        </Button>
    );
}

