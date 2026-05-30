import { useEffect, useRef } from 'react';

export default function SectionLayout({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('section-visible');
                    observer.unobserve(el);
                }
            },
            { rootMargin: '-100px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div id={id} className="w-full">
            <section
                ref={ref}
                className={`section-animate flex flex-col items-center min-h-screen gap-10 md:gap-20 max-w-(--max-width-container) mx-auto px-4 py-16 ${className || ''}`}
            >
                {children}
            </section>
        </div>
    )
}
