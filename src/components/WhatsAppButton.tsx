import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/site';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      aria-label="Chat with Smart Era Education on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap">
          <div className="bg-navy-900 text-white text-xs font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Chat on WhatsApp
          </div>
        </div>
      </div>
    </a>
  );
}
