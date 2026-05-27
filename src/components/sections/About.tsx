import SectionLayout from "../molecules/SectionLayout";
import SectionTitle from "../atoms/SectionTitle";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";
import AboutText from "../atoms/AboutText";
import Avatar from "../atoms/Avatar";
import BadgeContainer from "../molecules/BadgeContainer";

export default function About() {
    const { lang } = useLanguage();
    const { aboutTitle } = translations[lang];

    return (
        <SectionLayout id="about-me">
            <SectionTitle>{aboutTitle}</SectionTitle>
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 max-w-[1200px]">
                <AboutText />
                <Avatar />
            </div>
            <BadgeContainer type="tools" />
        </SectionLayout>
    )
}
