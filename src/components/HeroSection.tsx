import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
const HeroSection = () => {
  return <section id="home" className="bg-white pt-[70px]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mx-0 py-[120px] my-0">
          <div className="animate-slide-in-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-primary px-0 mx-[5px]">
              Seu corpo é uma casa viva.
              <br />
              <span className="text-accent my-0">
                Você tem cuidado de quem habita nele?
              </span>
            </h1>
            <p className="text-foreground mb-8 leading-relaxed mx-[5px] text-lg">A psicoterapia oferece um espaço seguro para que você possa acolher suas emoções, compreender seus padrões e cultivar formas saudáveis de lidar com os desafios da vida.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#A8482C] hover:bg-primary/90 text-primary-foreground mx-[5px]"><a href="https://wa.me/+554188618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia!%20Obrigado" target="blank">Agendar sessão psicológica</a></Button>
              <Button size="lg" variant="outline" className="text-accent-foreground bg-[#D6C1AA]">
               <a href="#psicologia">Conheça meu trabalho</a>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <img alt="Psicóloga profissional" className="w-full h-auto rounded-2xl shadow-2xl" src="/images/foto-milena-7.jpg" />
              <div className="-bottom-4 text-white text-center p-3 shadow-lg bg-[#df7853] rounded-2xl">
                <div className="text-base font-bold">Atendimentos especializado a mulheres, 
                  adolescentes e pessoas LGBTQIA+🌈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;