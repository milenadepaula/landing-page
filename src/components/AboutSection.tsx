import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const AboutSection = () => {
  const steps = [{
    number: "01",
    title: "Você sente necessidade de se conhecer melhor, transformar o que dói e viver de forma mais autêntica e integrada.",
  }, {
    number: "02",
    title: "Você deseja um suporte profissional para melhorar a sua relação com a comida, com o corpo e com a própria imagem.",
  }, {
    number: "03",
    title: "Você busca um espaço seguro e acolhedor para que possa se sentir compreendida(o) e traçar o melhor caminho terapêutico.",
  }, {
    number: "04",
    title: "Você enfrenta desafios nos seus relacionamentos e precisa compreender melhor os seus padrões, para viver conexões mais saudáveis e genuínas.",
  }, {
    number: "05",
    title: "Você sofre com a autocrítica e a autocobrança, percebendo que isso afeta sua qualidade de vida e sua forma de estar no mundo.",
  }, {
    number: "06",
    title: "Você sente que as pressões sociais e questões familiares influenciam suas emoções, suas escolhas e o modo como você se enxerga.",
  }];
  const galleryImages = [{
    src: "/images/foto-milena-1.jpg",
    alt: "Ambiente terapêutico acolhedor",
    curiosity: "Sou apaixonada pela psicologia analítica. O que me conectou com essa abordagem, desde o primeiro contato, foi o convite a um mergulho profundo na alma humana uma escuta que ultrapassa o óbvio e o concreto. Trata-se de ir às profundezas da psique, em busca da totalidade do si-mesmo e de caminhos possíveis para a individuação."
  }, {
    src: "/images/foto-milena-2.jpg",
    alt: "Espaço de tranquilidade",
    curiosity: "Ter encontrado a arte, mesmo que tardiamente, deu mais sentido à minha trajetória. Por meio da dança, experimento sensações inéditas e posso expressar, em movimento, sentimentos já conhecidos, e isso movimenta a minha alma."
  }, {
    src: "/images/foto-milena-3.jpg",
    alt: "Vista relaxante",
    curiosity: "Sou uma leitora apaixonada por mitos, fábulas, política e histórias de mulheres que ousaram traçar caminhos próprios no mundo."
  }, {
    src: "/images/foto-milena-4.jpg",
    alt: "Ambiente de bem-estar",
    curiosity: "Minha escuta é feita com tempo, profundidade e presença. A clínica para mim é encontro, processo e transformação. Não existe receita de bolo, porque cada escuta e cada história são únicas."
  }, {
    src: "/images/foto-milena-5.jpg",
    alt: "Consultório confortável",
    curiosity: "Tenho várias plantas em casa e cuido delas como quem cuida de si: com paciência, observação e afeto. E tenho dois filhos de quatro patas, que são o meu amor transbordando para fora do peito."
  }, {
    src: "/images/foto-milena-14.jpg",
    alt: "Espaço de reflexão",
    curiosity: "Amo quando um paciente diz: \"Tive um sonho estranho essa noite...\". Sei que ali se revela uma mensagem importante do inconsciente. Os sonhos dizem o que a linguagem do dia nem sempre alcança."
  }, {
    src: "/images/foto-milena-15.jpg",
    alt: "Espaço de reflexão",
    curiosity: "Cresço com cada encontro, cada história e cada silêncio compartilhado com quem me procura."
}];

  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };
  return <section id="about" className="py-41 lg:py-24 bg-card overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
            Como saber se este é o momento para
            <br />
            <span className="text-accent">iniciar a psicoterapia?</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => <div key={step.number} className="flex gap-6 items-start animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg bg-[#E8774D]">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-[#00282A] text-xl">
                  {step.title}
                </h3>
              </div>
            </div>)}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="rounded-2xl p-8 max-w-6xl mx-auto bg-[#D6C1AA]">
            <h3 className="font-bold mb-4 text-primary-foreground text-xl">A psicoterapia é um espaço seguro para acolher suas dores, compreender sua história e construir caminhos de cura, autoconhecimento e transformação.</h3>
            
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <span className="text-primary-foreground underline text-lg"><a href="https://wa.me/+5541988618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20sessões%20de%20terapia!%20Obrigado" target='blank'>Agende sua primeira sessão</a></span>
            </div>
          </div>
        </div>

        {/* Seção da psicóloga - movida para antes do carrossel */}
        <div id="psicologia" className="mt-20 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-bold text-[#E8774D] mb-4 text-4xl">Milena de Paula - Psicóloga e Palestrante</h3>
            <p className="text-foreground max-w-2xl mx-auto text-lg">
              Conheça um pouco mais sobre minha trajetória e abordagem terapêutica
            </p>
          </div>
        </div>

        {/* Photo Carousel */}
        <div id="ambiente" className="mt-12 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <Swiper modules={[Navigation, Pagination]} spaceBetween={20} slidesPerView={1} navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom'
          }} pagination={{
            clickable: true,
            dynamicBullets: true
          }} breakpoints={{
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }} className="ambiente-swiper">
              {galleryImages.map((image, index) => <SwiperSlide key={index}>
                  <Collapsible open={openCards.includes(index)} onOpenChange={() => toggleCard(index)}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transition-transform duration-300" />
                      
                      {/* Seta sobreposta */}
                      <CollapsibleTrigger asChild>
                        <button className={`absolute w-10 h-10 rounded-full text-white flex items-center justify-center hover:bg-[#E8774D] transition-all duration-300 shadow-lg z-10 ${
                          openCards.includes(index) 
                            ? 'top-4 right-4 bg-[#A8482C]/90 backdrop-blur-sm' 
                            : 'bottom-4 right-4 bg-[#A8482C]'
                        }`}>
                          {openCards.includes(index) ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </button>
                      </CollapsibleTrigger>
                      
                      {/* Caixa de curiosidade que desliza */}
                      <CollapsibleContent>
                        <div className="absolute bottom-0 left-0 right-0 bg-[#D6C1AA] p-4 transform transition-transform duration-300 ease-out">
                          <p className="text-[#00282A] text-sm font-medium leading-relaxed whitespace-pre-line">
                            {image.curiosity}
                          </p>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                </SwiperSlide>)}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-lg">
                ←
              </button>
              <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors shadow-lg">
                →
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default AboutSection;
