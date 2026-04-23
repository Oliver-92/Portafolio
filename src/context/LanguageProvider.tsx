import { useState } from "react";
import { LanguageContext, type Lang } from "./LangContext";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem("preferredLanguage") as Lang;
        if (saved) {
            document.documentElement.lang = saved;
            return saved;
        }
        return "es";
    });

    const toggleLanguage = () => {
        const newLang = lang === "es" ? "en" : "es";
        setLang(newLang);
        localStorage.setItem("preferredLanguage", newLang);
        document.documentElement.lang = newLang;
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
