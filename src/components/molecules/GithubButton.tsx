import Button from "../atoms/Button";
import GithubIcon from "../atoms/GithubIcon";

export default function GithubButton({ url }: { url: string }) {
    return (
        <Button
            ariaLabel="Demo button"
            onClick={() => window.open(url, "_blank")}
            className="flex gap-2 items-center"
        >
            <GithubIcon />
            Code
        </Button>
    );
}

