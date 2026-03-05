import { MessageCircleHeart } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+5541988618118";
    const message = "Ola, visitei seu site e gostaria de saber mais sobre as sessões de terapia!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircleHeart size={28} />
    </button>
  );
};

export default WhatsAppFloat;
