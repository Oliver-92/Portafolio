import Typewriter from "typewriter-effect";
import { useLanguage } from "../../context/LangContext";

const texts = {
    es: [
        "< Desarrollador Web - Frontend />",
        "Apasionado por el aprendizaje continuo",
    ],
    en: [
        "< Web Developer - Frontend />",
        "Passionate about continuous learning",
    ],
};

export default function SubtitleTypewriter() {
    const { lang } = useLanguage();
    const languageTexts = texts[lang] || texts.es;

    return (
        <div
            className="hero-subtitle w-full max-w-xs sm:max-w-sm mx-auto"
            style={{ height: "3rem" }}
        >
            <h2
                className="font-mono font-light text-sm sm:text-base text-center px-6 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
                style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    whiteSpace: "nowrap",
                }}
            >
                <Typewriter
                    options={{
                        strings: languageTexts,
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                    }}
                />
            </h2>
        </div>
    );
}
