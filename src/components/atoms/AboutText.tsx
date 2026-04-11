import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";

export default function AboutText() {
    const { lang } = useLanguage();
    const { aboutText } = translations[lang];
    return (
        <p className="bg-(--bg-secondary) [border:var(--border-buttons)] p-4 w-11/12 md:w-1/2
        rounded-(--border-radius) text-justify leading-loose text-xs sm:text-sm md:text-base lg:text-lg">{aboutText}</p>
    )
}