import { motion } from 'framer-motion'

export default function SectionLayout({ children, id, className }: { children: React.ReactNode, id: string, className?: string }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col items-center
            min-h-screen gap-10 md:gap-20 max-w-(--max-width-container) mx-auto px-4 scroll-mt-16 py-16 ${className}`}
        >
            {children}
        </motion.section>
    )
}
