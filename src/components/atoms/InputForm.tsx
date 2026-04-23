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
                className="w-11/12 p-3 my-1 border border-(--card-border) rounded-(--border-radius) bg-[rgba(0,0,0,0.2)] text-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color) transition-all duration-(--transition-speed) ease"
            />
        ) : (
            <textarea
                id={id}
                name={name}
                required
                minLength={minLength}
                maxLength={maxLength}
                className="w-11/12 p-3 my-1 border border-(--card-border) rounded-(--border-radius) bg-[rgba(0,0,0,0.2)] text-(--primary-color) focus:outline-none focus:ring-2 focus:ring-(--accent-color) transition-all duration-(--transition-speed) ease resize-y"
                rows={rows}
            />
        ))
}
