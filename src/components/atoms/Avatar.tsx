import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import avatar from "../../assets/Avatar.webp";

export default function Avatar() {
    const { lang } = useLanguage();
    const { avatarAlt } = translations[lang];
    return (
        <img
            src={avatar}
            alt={avatarAlt}
            className="aspect-square object-cover rounded-full w-6/12 md:w-1/2 max-w-lg"
            loading="lazy"
        />
    )
}