export default function LabelForm({ htmlFor, children }: { htmlFor: string, children: React.ReactNode }) {
    return (
        <label htmlFor={htmlFor}>{children}</label>
    )
}