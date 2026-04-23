import { useState } from "react";
import { useLanguage } from "../../context/LangContext";
import { translations } from "../../utils/translations";
import Button from "../atoms/Button";
import InputForm from "../atoms/InputForm";
import LabelForm from "../atoms/LabelForm";

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

        // Basic validation
        const email = data.email as string;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("error");
            return;
        }

        try {
            const url = import.meta.env.VITE_FORMSPRE_URL;
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
            <LabelForm htmlFor="name">{t.name}</LabelForm>
            <InputForm id="name" name="name" required />

            <LabelForm htmlFor="email">{t.email}</LabelForm>
            <InputForm type="email" id="email" name="email" required autoComplete="email" />

            <LabelForm htmlFor="comment">{t.comment}</LabelForm>
            <InputForm as="textarea" rows={4} id="comment" name="comment" required minLength={10} maxLength={500} />

            <Button
                ariaLabel={t.send}
                className="w-11/12 mx-auto"
                variant="secondary"
                disabled={status === "submitting"}
            >
                {status === "submitting" ? "..." : t.send}
            </Button>

            {status === "success" && (
                <p className="text-green-500 mt-2 text-center font-bold">
                    {t.formMessage}
                </p>
            )}
            {status === "error" && (
                <p className="text-red-500 mt-2 text-center font-bold">
                    {t.errorMessage}
                </p>
            )}
        </form>
    )
}
