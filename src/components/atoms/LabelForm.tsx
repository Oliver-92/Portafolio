export default function LabelForm({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="block text-left w-11/12 font-medium text-sm sm:text-base opacity-90">{children}</label>
    )
}
