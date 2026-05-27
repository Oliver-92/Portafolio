export default function FormMessage({ type, message }: { type: "success" | "error", message: string }) {
    if (!message) return null;
    const colorClass = type === "success" ? "text-green-500" : "text-red-500";
    
    return (
        <p className={`${colorClass} mt-2 text-center font-bold`}>
            {message}
        </p>
    );
}
