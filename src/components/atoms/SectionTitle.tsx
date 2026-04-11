export default function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="font-sans text-2xl sm:text-3xl font-medium w-full m-0">
            {children}
        </h2>
    )
}