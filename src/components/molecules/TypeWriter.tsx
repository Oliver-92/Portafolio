import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import { useLanguage } from "../../context/LanguageProvider";

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
    const instanceRef = useRef<any>(null);

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

    return <h3 className="font-mono font-semibold text-lg sm:text-xl min-h-14 text-center" > <span ref={ref} /> </h3>;
}