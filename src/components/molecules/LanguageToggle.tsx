import { useLanguage } from "../../context/LanguageProvider";
import Button from "../atoms/Button";

export function LanguageToggle() {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <Button
            id="languageToggle"
            ariaLabel="Change language"
            onClick={toggleLanguage}
            className="toggle-btn"
        >
            {lang === "es" ? "EN" : "ES"}
        </Button>
    );
}