import { SubtitleTypewriter } from "../molecules/TypeWriter";

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center text-center h-screen gap-20">
            <h1 className="font-mono text-7xl tracking-[1rem]">EZEQUIEL OLIVER</h1>
            <SubtitleTypewriter />
        </section>
    )
}