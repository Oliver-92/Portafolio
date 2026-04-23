import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
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

export function SubtitleTypewriter() {
    const { lang } = useLanguage();
    const ref = useRef<HTMLSpanElement | null>(null);
    const instanceRef = useRef<Typewriter | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        // limpiar instancia anterior
        if (instanceRef.current) {
            instanceRef.current.stop();
            instanceRef.current = null;
        }

        const languageTexts = texts[lang] || texts.es;

        const typewriter = new Typewriter(ref.current, {
            loop: true,
            delay: 75,
        });

        languageTexts.forEach((text, index) => {
            typewriter.typeString(text).pauseFor(200);
            if (index < languageTexts.length - 1) {
                typewriter.deleteAll().pauseFor(200);
            }
        });

        typewriter.start();
        instanceRef.current = typewriter;

        // cleanup al desmontar o cambiar idioma
        return () => {
            typewriter.stop();
        };
    }, [lang]);

    return (
        <div
            className="hero-subtitle w-full max-w-xs sm:max-w-sm mx-auto"
            style={{ height: "3rem" }}
        >
            <h3
                className="font-mono font-light text-sm sm:text-base text-center px-6 rounded-full w-full h-full flex items-center justify-center overflow-hidden"
                style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    whiteSpace: "nowrap",
                }}
            >
                <span ref={ref} />
            </h3>
        </div>
    );
}
