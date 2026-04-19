// type Props = {
//     as?: "input" | "textarea"
// }

export default function InputForm(
    { as = "input",
        type = "text",
        id = "name",
        name = "name",
        autoComplete = "name",
        minLength = 2,
        maxLength = 50,
        rows = 4 }:
        {
            as?: "input" | "textarea",
            type?: string,
            id?: string,
            name?: string,
            required?: boolean,
            autoComplete?: string,
            minLength?: number,
            maxLength?: number
            rows?: number
        }) {
    return (
        as === "input" ? (
            <input
                type={type}
                id={id}
                name={name}
                required
                autoComplete={autoComplete}
                minLength={minLength}
                maxLength={maxLength}
                className="w-11/12 p-2 m-2 [border:var(--border-buttons)] rounded-(--border-radius) bg-(--bg-secondary) text-(--primary-color)"
            />
        ) : (
            <textarea
                id={id}
                name={name}
                required
                minLength={minLength}
                maxLength={maxLength}
                className="w-11/12 p-2 m-2 [border:var(--border-buttons)] rounded-(--border-radius) bg-(--bg-secondary) text-(--primary-color)"
                rows={rows}
            />
        ))
}