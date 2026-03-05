import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#A8482C] shadow-sm">
      <div className="container mx-auto py-4 px-[20px]">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Psicóloga Milena de Paula
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-white ">
              Home
            </a>
            <a href="#about" className="text-white hover:text-white transition-colors">
              Terapia
            </a>
            <a href="#ambiente" className="text-white hover:text-white transition-colors">
              Sobre mim
            </a>
            <a href="#services" className="text-white hover:text-white transition-colors">
              Atuação
            </a>
            <a href="#faq" className="text-white hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-white hover:text-white transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.instagram.com/psi.milenadepaula/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Instagram size={20} className="text-[#F07B4C]" />
            </a>
            <Button 
              className="bg-[#ffffff] hover:bg-[#C48751] hover:text-[#ffffff] text-[#F07B4C]"
              onClick={() => {
                const phoneNumber = "+554188618118";
                const message = "Ola, visitei seu site e gostaria de saber mais sobre as sessões de terapia!";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Agendar sessão
            </Button>
          </div>

          {/* Mobile Icons and Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a href="https://www.instagram.com/psi.milenadepaula/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Instagram size={16} className="text-[#F07B4C]" />
            </a>
            <button className="text-white z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="fixed top-0 left-0 right-0 bg-[#A8482C] pt-20 pb-4 px-[20px] space-y-4 md:hidden z-40">
            <a href="#home" className="block text-white hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="block text-white hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Terapia
            </a>
            <a href="#ambiente" className="block text-white hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Sobre mim
            </a>
            <a href="#services" className="block text-white hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Atuação
            </a>
            <a href="#faq" className="block text-white hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className="block text-white hover:text-accent transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
            <Button 
              className="w-full bg-white text-primary hover:bg-gray-50 mt-4"
              onClick={() => {
                const phoneNumber = "+554188618118";
                const message = "Ola, visitei seu site e gostaria de saber mais sobre as sessões de terapia!";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                setIsMenuOpen(false);
              }}
            >
              Agendar sessão
            </Button>
          </nav>}
      </div>
    </header>;
};
export default Header;
