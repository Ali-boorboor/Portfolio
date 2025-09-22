import type z from "zod";
import type formSchema from "@/components/templates/contactSection/validators/contactForm.validations";
import type { Control, Path } from "react-hook-form";

type ContactFormValues = z.infer<typeof formSchema>;

type FieldType = "text" | "email" | "textarea";

interface FieldDefinition {
  name: Path<ContactFormValues>;
  label: string;
  type: FieldType;
  className?: string;
  dir?: "ltr" | "rtl";
}

interface InputField extends FieldDefinition {
  id: number;
}

interface FormInputFieldProps extends FieldDefinition {
  form: { control: Control<ContactFormValues> };
}

export type { ContactFormValues, FieldType, FormInputFieldProps, InputField };
