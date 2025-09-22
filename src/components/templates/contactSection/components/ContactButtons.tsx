import contactLinks from "@/components/templates/contactSection/data/contactLinks";
import { Button } from "@/components/ui/button";

const ContactButtons = () => {
  return (
    <div className="flex justify-between md:justify-center items-center w-full gap-4 md:gap-10">
      {contactLinks.map((contact) => (
        <Button
          className="size-14 hover:bg-white group"
          title={contact.title}
          key={contact.id}
          size="icon"
          asChild
        >
          <a target="_blank" href={contact.linkTo} aria-label="contact-link">
            {contact.children}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default ContactButtons;
