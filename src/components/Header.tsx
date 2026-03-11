import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Instagram } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para lidar com o clique e descontar o tamanho do header
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Evita o comportamento padrão do link
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 90; // Altura aproximada do seu header (ajuste se precisar)
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth" // Adiciona um efeito de rolagem suave
      });
    }
    
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#A8482C] shadow-sm">
      <div className="container mx-auto py-4 px-[20px]">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Psicóloga Milena de Paula
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
              Terapia
            </a>
            <a href="#psicologia" onClick={(e) => handleScroll(e, 'psicologia')} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
              Sobre mim
            </a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
              Atuação
            </a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
              FAQ
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
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
        {isMenuOpen && (
          <nav className="fixed top-0 left-0 right-0 bg-[#A8482C] pt-20 pb-4 px-[20px] space-y-4 md:hidden z-40">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="block text-white hover:text-gray-200 transition-colors py-2 cursor-pointer">
              Home
            </a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block text-white hover:text-gray-200 transition-colors py-2 cursor-pointer">
              Terapia
            </a>
            <a href="#ambiente" onClick={(e) => handleScroll(e, 'ambiente')} className="block text-white hover:text-gray-200 transition-colors py-2 cursor-pointer">
              Sobre mim
            </a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="block text-white hover:text-gray-200 transition-colors py-2 cursor-pointer">
              Atuação
            </a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="block text-white hover:text-gray-200 transition-colors py-2 cursor-pointer">
              FAQ
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block text-white hover:text-gray-200 transition-colors py-2 cursor-pointer">
              Contato
            </a>
            <Button 
              className="w-full bg-white text-primary hover:bg-gray-50 mt-4"
              onClick={() => {
                const phoneNumber = "+5541988618118";
                const message = "Ola, visitei seu site e gostaria de saber mais sobre as sessões de terapia!";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                setIsMenuOpen(false);
              }}
            >
              Agendar sessão
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;