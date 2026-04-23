import { useLanguage } from "../../context/LangContext";
import Button from "../atoms/Button";

export function LanguageToggle() {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <Button
            id="languageToggle"
            ariaLabel="Change language"
            onClick={toggleLanguage}
            className="w-7 h-7 sm:w-9 sm:h-9"
        >
            {lang === "es" ? "EN" : "ES"}
        </Button>
    );
}
