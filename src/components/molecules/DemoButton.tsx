import Button from "../atoms/Button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";

export default function DemoButton({ url }: { url: string }) {
    const { lang } = useLanguage();
    const { demoButton } = translations[lang];

    return (
        <Button
            ariaLabel="Demo button"
            onClick={() => window.open(url, "_blank")}
            className="flex gap-1 sm:gap-2"
        >
            <ExternalLink className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />
            {demoButton}
        </Button>
    );
}
