import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/templates/contactSection/components/ContactForm";
import ContactButtons from "@/components/templates/contactSection/components/ContactButtons";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  return (
    <div
      className="section-style !pb-4 md:!pb-8 !border-b-0 flex flex-col justify-center items-center"
      id="contact-section"
    >
      <SectionHeader title="ارتباط با من" />

      <ContactForm />

      <Separator className="my-4 md:my-8" />

      <ContactButtons />
    </div>
  );
};

export default ContactSection;
