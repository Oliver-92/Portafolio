import { createContext, useContext, useEffect, useState } from "react";
// import { translations } from "@/utils/translations";

type Lang = "es" | "en";

interface LanguageContextType {
    lang: Lang;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "es",
    toggleLanguage: () => { }
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Lang>("es");

    useEffect(() => {
        const saved = localStorage.getItem("preferredLanguage") as Lang;
        if (saved) setLang(saved);
    }, []);

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

export const useLanguage = () => useContext(LanguageContext);