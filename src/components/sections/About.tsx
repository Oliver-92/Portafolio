import SectionLayout from "../layout/SectionLayout";
import SectionTitle from "../atoms/SectionTitle";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";
import AboutText from "../atoms/AboutText";
import Avatar from "../atoms/Avatar";
// import BadgeContainer from "../molecules/BadgeContainer";
import SkillsContainer from "../molecules/SkillsContainer";

export default function About() {
    const { lang } = useLanguage();
    const { aboutTitle } = translations[lang];
    // const tools = ["html", "css", "javascript", "typescript", "react", "nextjs", "tailwind", "nodejs", "postgresql"]

    return (
        <SectionLayout id="about-me">
            <SectionTitle>{aboutTitle}</SectionTitle>
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 max-w-300">
                <AboutText />
                <Avatar />
            </div>
            <SkillsContainer />
            {/* <BadgeContainer type="tools" tools={tools} /> */}
        </SectionLayout>
    )
}
