import Button from "../atoms/Button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

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
