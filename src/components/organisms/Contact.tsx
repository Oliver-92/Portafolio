import SectionLayout from "../molecules/SectionLayout";
import ContactForm from "../molecules/ContactForm";
import SectionTitle from "../atoms/SectionTitle";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";

export default function Contact() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <SectionLayout id="contact">
            <SectionTitle>{t.contactTitle}</SectionTitle>
            <ContactForm />
        </SectionLayout>
    )
}