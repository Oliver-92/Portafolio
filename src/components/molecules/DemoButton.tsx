import Button from "../atoms/Button";
import { ExternalLink } from "lucide-react";

export default function DemoButton({ url }: { url: string }) {
    return (
        <Button
            ariaLabel="Demo button"
            onClick={() => window.open(url, "_blank")}
            className="flex gap-2 items-center"
        >
            <ExternalLink size={16} />
            See project
        </Button>
    );
}