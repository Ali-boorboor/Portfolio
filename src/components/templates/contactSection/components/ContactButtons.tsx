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
          <a
            aria-label={contact.title}
            rel="noopener noreferrer"
            href={contact.linkTo}
            target="_blank"
          >
            {contact.children}
          </a>
        </Button>
      ))}
    </div>
  );
};

export default ContactButtons;
