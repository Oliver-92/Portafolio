import { Handshake } from "lucide-react";

export default function MessageFooter({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center gap-2 text-base">
            <Handshake />
            {children}
        </div>
    )
}