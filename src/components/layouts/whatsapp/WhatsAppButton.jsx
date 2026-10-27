
import { WhatsappLogo } from "@phosphor-icons/react";

const WhatsAppButton = () => {
  const phoneNumber = "919328695463";

  const message = encodeURIComponent(
    "Hello Tanishq Indian Vegetarian Restaurant! I would like to know more."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <WhatsappLogo size={38} weight="fill" />
    </a>
  );
};

export default WhatsAppButton;

