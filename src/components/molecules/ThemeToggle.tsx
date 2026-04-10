import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark";

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, []);

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
            className="toggle-btn"
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}