import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:shadow-2xl hover:rotate-[10deg] active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] whatsapp-pulse"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} className="text-card fill-current" />
  </a>
);

export default WhatsAppButton;
