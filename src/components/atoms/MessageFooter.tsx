import { Handshake } from "lucide-react";

export default function MessageFooter({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center gap-2 text-sm sm:text-base">
            <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />
            {children}
        </div>
    )
}
