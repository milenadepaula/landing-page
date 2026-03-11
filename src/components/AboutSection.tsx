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
    title: "Você deseja suporte profissional para melhorar sua relação com o corpo, com a comida e com sua própria imagem.",
  }, {
    number: "03",
    title: "Você busca um espaço seguro e acolhedor para ser escutada(o) e construir um caminho terapêutico possível para sua vida.",
  }, {
    number: "04",
    title: "Você enfrenta dificuldades em seus relacionamentos e deseja compreender melhor seus padrões para construir vínculos mais saudáveis.",
  }, {
    number: "05",
    title: "A autocrítica e a autocobrança têm sido intensas e começam a afetar sua qualidade de vida.",
  }, {
    number: "06",
    title: "As pressões sociais ou familiares influenciam suas emoções, suas escolhas e a forma como você se percebe.",
  }];
  const galleryImages = [{
    src: "/images/sala-terapia-curitiba.jpeg",
    alt: "Ambiente terapêutico acolhedor",
  }, {
    src: "/images/consultorio-psicologa-curitiba.jpeg",
    alt: "Espaço de tranquilidade",
  }, {
    src: "/images/psicologa-curitiba-consultorio.jpeg",
    alt: "Vista relaxante",
  }, {
    src: "/images/consultorio-psicologia-curitiba.jpg",
    alt: "Vista relaxante",
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
            <span className="text-accent">Talvez este seja o momento de iniciar a psicoterapia se…</span>
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
            <h3 className="font-bold mb-4 text-primary-foreground text-xl">Se você se identificou com alguma dessas experiências, a psicoterapia pode ser um espaço importante de cuidado e compreensão.</h3>
            
            <div className="flex justify-center mt-6">
              <a 
                href="https://wa.me/+5541988618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informações%20sobre%20as%20sessões%20de%20terapia!%20Obrigado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#E8774D] font-medium text-lg px-8 py-3 rounded-md hover:bg-gray-50 transition-colors shadow-sm"
              >
                Agendar sessão
              </a>
            </div>
          </div>
        </div>

        {/* Seção da psicóloga - movida para antes do carrossel */}
        <div id="psicologia" className="mt-20 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-bold text-[#E8774D] mb-4 text-4xl">Conheça onde acontecem os atendimentos presenciais</h3>
            <p className="text-foreground max-w-2xl mx-auto text-lg">
              Um espaço pensado para acolher sua escuta, com cuidado e acolhimento

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
