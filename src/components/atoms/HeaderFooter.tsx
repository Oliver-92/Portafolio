import { Send } from "lucide-react";

export default function HeaderFooter({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center gap-2 text-lg sm:text-2xl">
            <Send />
            {children}
        </div>
    )
}
