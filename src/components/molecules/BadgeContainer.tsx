import badges from "../../utils/badges"
import * as socialLinks from "../../utils/dataContact"

export default function BadgeContainer({ type }: { type: "tools" | "social" }) {
    const socialUrls: Record<string, string> = {
        github: socialLinks.github,
        linkedin: socialLinks.linkedin,
        telegram: socialLinks.telegram,
        mail: `mailto:${socialLinks.mail}`
    };

    return (
        <span className="flex justify-center gap-1 flex-wrap max-w-[1200px] p-1">
            {Object.entries(badges[type]).map(([name, url]) => {
                const img = <img
                    key={name}
                    src={url}
                    alt={`logo-${name}`}
                    loading="lazy"
                    className="h-6 w-auto object-contain"
                    height={24}
                />;

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
