export default function LabelForm({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor} className="block text-left w-11/12">{children}</label>
    )
}