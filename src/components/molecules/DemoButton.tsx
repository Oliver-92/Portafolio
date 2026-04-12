import Button from "../atoms/Button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";

export default function DemoButton({ url }: { url: string }) {
    const { lang } = useLanguage();
    const { demoButton } = translations[lang];

    return (
        <Button
            ariaLabel="Demo button"
            onClick={() => window.open(url, "_blank")}
            className="flex gap-2 items-center"
        >
            <ExternalLink size={16} />
            {demoButton}
        </Button>
    );
}