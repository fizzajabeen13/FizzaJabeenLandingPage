import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "+923120182784"; // your WhatsApp number
  const message = "Hello! I want to inquire about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp size={30} />
      <span className="pulse"></span>
    </a>
  );
}

export default WhatsAppButton;