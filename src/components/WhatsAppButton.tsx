import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/573138765825?text=Hola%2C%20quiero%20cotizar%20un%20proyecto%20con%20DKO"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} className="text-card" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
