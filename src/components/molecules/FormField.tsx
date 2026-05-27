import LabelForm from "../atoms/LabelForm";
import InputForm from "../atoms/InputForm";

interface FormFieldProps {
    id: string;
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    as?: "input" | "textarea";
    rows?: number;
    minLength?: number;
    maxLength?: number;
    autoComplete?: string;
}

export default function FormField({ id, label, ...inputProps }: FormFieldProps) {
    return (
        <div className="flex flex-col gap-1 w-full items-center">
            <LabelForm htmlFor={id}>{label}</LabelForm>
            <InputForm id={id} {...inputProps} />
        </div>
    );
}
