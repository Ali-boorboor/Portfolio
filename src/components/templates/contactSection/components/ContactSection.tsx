import ContactButtons from "@/components/templates/contactSection/components/ContactButtons";

const ContactSection = () => {
  return (
    <section
      className="section-style !p-4 md:!p-8 !border-b-0 flex flex-col justify-center items-center"
      id="contact-section"
    >
      <ContactButtons />
    </section>
  );
};

export default ContactSection;
