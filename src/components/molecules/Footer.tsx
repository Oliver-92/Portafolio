import HeaderFooter from "../atoms/HeaderFooter";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";
import BadgeContainer from "./BadgeContainer";
import MessageFooter from "../atoms/MessageFooter";

export default function Footer() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <div className="flex flex-col justify-center items-center gap-6 mb-10">
            <HeaderFooter>
                <p>{t.headerFooter}</p>
            </HeaderFooter>
            <BadgeContainer type="social" />
            <MessageFooter>
                <p>{t.messageFooter}</p>
            </MessageFooter>
        </div>
    )
}