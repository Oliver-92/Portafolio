import Button from "../atoms/Button";
import GithubIcon from "../atoms/GithubIcon";
import { useLanguage } from "../../context/LanguageProvider";
import { translations } from "../../utils/translations";

export default function GithubButton({ url }: { url: string }) {
    const { lang } = useLanguage();
    const { githubButton } = translations[lang];

    return (
        <Button
            ariaLabel="Demo button"
            onClick={() => window.open(url, "_blank")}
            className="flex gap-2 items-center"
        >
            <GithubIcon />
            {githubButton}
        </Button>
    );
}

