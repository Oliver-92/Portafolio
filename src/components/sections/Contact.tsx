import SectionLayout from "../layout/SectionLayout";
import ContactForm from "../organisms/ContactForm";
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
