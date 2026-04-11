import SectionLayout from "../molecules/SectionLayout";
import { SubtitleTypewriter } from "../molecules/TypeWriter";

export default function Hero() {
    return (
        <SectionLayout id="index" className="justify-center">
            <h1 className="font-mono text-5xl sm:text-7xl text-center tracking-[0.75rem] sm:tracking-[1rem]">EZEQUIEL OLIVER</h1>
            <SubtitleTypewriter />
        </SectionLayout>
    )
}