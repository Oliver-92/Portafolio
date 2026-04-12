import badges from "../../utils/badges"

export default function BadgeContainer() {
    return (
        <span className="flex justify-center gap-1 flex-wrap max-w-[1200px] p-1">
            {Object.entries(badges).map(([name, url]) => (
                <img key={name} src={url} alt={`logo-${name}`} />
            ))}
        </span>
    )
}