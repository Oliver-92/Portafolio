import badges from "../../utils/badges"
import * as socialLinks from "../../utils/dataContact"

export default function BadgeContainer({ type, tools }: { type: "tools" | "social", tools?: string[] }) {
    const socialUrls: Record<string, string> = {
        github: socialLinks.github,
        linkedin: socialLinks.linkedin,
        telegram: socialLinks.telegram,
        mail: `mailto:${socialLinks.mail}`
    };

    const entries: [string, string][] = type === "tools" && tools
        ? tools
            .filter(name => name in badges.tools)
            .map(name => [name, badges.tools[name as keyof typeof badges.tools]])
        : Object.entries(badges[type]);

    return (
        <span className="flex justify-center gap-1 flex-wrap max-w-[1200px] p-1">
            {entries.map(([name, src]) => {
                const img = (
                    <img
                        key={name}
                        src={src}
                        alt={`logo-${name}`}
                        loading="lazy"
                        className="h-4 sm:h-6 w-auto object-contain"
                        height={24}
                    />
                );

                if (type === "social") {
                    return (
                        <a
                            key={name}
                            href={socialUrls[name]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:shadow-(--box-shadow-buttons-hover)"
                        >
                            {img}
                        </a>
                    );
                }

                return img;
            })}
        </span>
    );
}
