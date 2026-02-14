import * as formUI from "@/components/ui/form";
import useFadeInOnScrollAnimation from "@/hooks/useFadeInOnScrollAnimation";
import inputFields from "@/components/templates/contactSection/data/inputFields";
import FormInputField from "@/components/templates/contactSection/components/FormInputField";
import formSchema from "@/components/templates/contactSection/validators/contactForm.validations";
import type { ContactFormValues } from "@/components/templates/contactSection/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const defaultInputValues: ContactFormValues = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const { animatedSectionRef } = useFadeInOnScrollAnimation({});

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultInputValues,
  });

  function onSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <formUI.Form {...form}>
      <div className="w-full" ref={animatedSectionRef}>
        <form
          className="flex flex-col gap-6 container m-auto"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid md:grid-cols-2 gap-4 items-baseline">
            {inputFields.map((input) => (
              <FormInputField
                className={input.className}
                label={input.label}
                type={input.type}
                name={input.name}
                dir={input.dir}
                key={input.id}
                form={form}
              />
            ))}
          </div>

          <Button type="submit">ارسال پیام</Button>
        </form>
      </div>
    </formUI.Form>
  );
};

export default ContactForm;
