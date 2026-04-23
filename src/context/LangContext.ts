import { createContext, useContext } from "react";

export type Lang = "es" | "en";

export interface LanguageContextType {
    lang: Lang;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    lang: "es",
    toggleLanguage: () => { }
});

export const useLanguage = () => useContext(LanguageContext);
