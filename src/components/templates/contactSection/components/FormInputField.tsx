import * as formUI from "@/components/ui/form";
import type { FormInputFieldProps } from "@/components/templates/contactSection/types";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const FormInputField = ({
  name,
  label,
  form,
  type,
  className,
  dir = "rtl",
}: FormInputFieldProps) => {
  return (
    <formUI.FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <formUI.FormItem className={cn(className)}>
          <formUI.FormLabel className="text-accent-foreground">
            {label}
          </formUI.FormLabel>
          <formUI.FormControl dir={dir}>
            {type === "textarea" ? (
              <Textarea {...field} />
            ) : (
              <Input {...field} type={type} />
            )}
          </formUI.FormControl>
          <formUI.FormMessage />
        </formUI.FormItem>
      )}
    />
  );
};

export default FormInputField;
