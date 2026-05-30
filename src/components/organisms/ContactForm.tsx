import { useState } from "react";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";
import Button from "../atoms/Button";
import FormField from "../molecules/FormField";
import FormMessage from "../atoms/FormMessage";

export default function ContactForm() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const url = import.meta.env.VITE_FORMSPREE_URL;
            if (!url) throw new Error("Formspree URL is missing");

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full max-w-200 mx-auto items-center p-6 rounded-(--border-radius) backdrop-blur-md transition-all duration-(--transition-speed) ease"
            style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
        >
            <FormField id="name" name="name" label={t.name} required />

            <FormField type="email" id="email" name="email" label={t.email} autoComplete="email" required />

            <FormField as="textarea" rows={4} id="comment" name="comment" label={t.comment} required minLength={10} maxLength={500} />

            <Button
                ariaLabel={t.send}
                className="w-11/12 mx-auto mt-4"
                variant="secondary"
                disabled={status === "submitting"}
            >
                {status === "submitting" ? "..." : t.send}
            </Button>

            {status === "success" && <FormMessage type="success" message={t.formMessage} />}
            {status === "error" && <FormMessage type="error" message={t.errorMessage} />}
        </form>
    )
}
