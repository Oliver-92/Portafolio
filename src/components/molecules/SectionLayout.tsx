export default function SectionLayout({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) {
    return (
        <section
            id={id}
            className={`flex flex-col items-center
            min-h-screen gap-10 md:gap-20 max-w-(--max-width-container) mx-auto px-4 scroll-mt-16 py-16 ${className}`}
        >
            {children}
        </section>
    )
}
