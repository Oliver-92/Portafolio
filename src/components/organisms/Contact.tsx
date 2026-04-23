import SectionLayout from "../molecules/SectionLayout";
import ContactForm from "../molecules/ContactForm";
import SectionTitle from "../atoms/SectionTitle";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";
import Footer from "../molecules/Footer";

export default function Contact() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <SectionLayout id="contact">
            <SectionTitle>{t.contactTitle}</SectionTitle>
            <ContactForm />
            <Footer />
        </SectionLayout>
    )
}
