import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleMap from "./GoogleMap";
const Footer = () => {
  const handleOpenMaps = () => {
    const address = "Av. Rep. Argentina, 2403 - Água Verde, Curitiba - PR, 80240-210";
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };
  return <footer id="contact" className="text-foreground py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#E8774D]">
            Formas de atendimento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="rounded-xl p-8 text-center animate-slide-in-left bg-card shadow-lg border border-border">
            <div className="w-16 h-16 bg-primary mx-auto mb-6 flex items-center justify-center rounded-full">
              <Phone className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-bold mb-4 text-2xl text-primary">Atendimento Online</h3>
            <p className="mb-6 text-foreground text-lg">
              Sessões por videochamada, permitindo que você participe de qualquer lugar com privacidade e conforto.
            </p>
            <Button className="bg-[#E8774D] hover:bg-primary/90 text-primary-foreground text-sm"><a href="https://wa.me/+554188618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia%20online!%20Obrigado" target="blank">Agendar Sessão</a></Button>
          </div>

          <div className="rounded-xl p-8 text-center animate-slide-in-right bg-card shadow-lg border border-border">
            <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
              <Mail className="text-primary-foreground" size={24} />
            </div>
            <h3 className="font-bold mb-4 text-2xl text-primary">Atendimento Presencial</h3>
            <p className="mb-6 text-foreground text-lg">
              Consultas presenciais em espaço acolhedor e equipado, localizado no bairro Água Verde.
            </p>
            <Button className="bg-[#E8774D] hover:bg-primary/90 text-primary-foreground text-sm"><a href="https://wa.me/+554188618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia%20presencial!%20Obrigado" target="blank">Agendar Sessão</a></Button>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-bold text-primary mb-4 text-3xl">Localização do Consultório</h3>
            <p className="text-foreground text-lg mb-4">Av. Rep. Argentina, 2403 - Água Verde, Curitiba - PR, 80240-210</p>
            <p className="text-foreground text-lg mb-4">Horário de atendimento: Segunda à sexta, das 9h às 20h</p>
            <Button onClick={handleOpenMaps} className="bg-[#e8774d] hover:bg-primary/90 text-primary-foreground">
              Abrir rota no mapa
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg bg-card p-4">
            <GoogleMap />
          </div>
        </div>

        <div className="border-t border-border pt-8 animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-[#df7853] mb-2">Psicóloga Milena de Paula</div>
              <p className="text-foreground">Cuidando da sua saúde mental com profissionalismo e acolhimento</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/+554188618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20sessões%20de%20terapia!%20Obrigado" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={20} className="text-primary" />
                <span className="text-foreground">(41)98861-8118</span>
              </a>
              <a href="mailto:milenadepaula.psicologia@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={20} className="text-primary" />
                <span className="text-foreground">milenadepaula.psicologia@gmail.com</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-border text-muted-foreground text-sm">
            <p className="">© 2025 Milena de Paula Psicologia. Todos os direitos reservados. CRP 08/39929 | Desenvolvido por <a href="https://wa.me/5541988707816?text=Ol%C3%A1%2C%20Eduardo!%20Gostei%20de%20um%20site%20feito%20por%20voc%C3%AA%20e%20gostaria%20de%20saber%20mais!%20Muito%20obrigado%20e%20aguardo%20retorno!">Eduardo Skrock</a></p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
