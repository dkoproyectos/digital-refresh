import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} className="text-card" fill="currentColor" />
  </a>
);

export default WhatsAppButton;
