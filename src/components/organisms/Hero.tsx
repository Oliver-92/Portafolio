import SectionLayout from "../molecules/SectionLayout";
import { lazy, Suspense } from "react";

const SubtitleTypewriter = lazy(() => import("../molecules/TypeWriter.tsx"));

export default function Hero() {
    return (
        <SectionLayout id="index" className="justify-center gap-6 sm:gap-8">
            <h1
                className="hero-title font-mono text-5xl sm:text-7xl text-center tracking-[0.4rem] sm:tracking-[0.6rem]"
            >
                <span>EZEQUIEL </span>
                <span style={{ color: "var(--accent-color)" }}>OLIVER</span>
            </h1>
            <Suspense fallback={null}>
                <SubtitleTypewriter />
            </Suspense>
        </SectionLayout>
    )
}
