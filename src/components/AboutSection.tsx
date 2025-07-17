import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
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
    alt: "Ambiente terapêutico acolhedor"
  }, {
    src: "/images/foto-milena-2.jpg",
    alt: "Espaço de tranquilidade"
  }, {
    src: "/images/foto-milena-3.jpg",
    alt: "Vista relaxante"
  }, {
    src: "/images/foto-milena-4.jpg",
    alt: "Ambiente de bem-estar"
  }, {
    src: "/images/foto-milena-5.jpg",
    alt: "Consultório confortável"
  }, {
    src: "/images/foto-milena-14.jpg",
    alt: "Espaço de reflexão"
  }, {
    src: "/images/foto-milena-15.jpg",
    alt: "Espaço de reflexão"
}];
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
              <span className="text-primary-foreground underline text-lg"><a href="https://wa.me/+554188618118?text=Olá,%20visitei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20de%20terapia!%20Obrigado" target="blank" target='blank'>Agende sua primeira sessão</a></span>
            </div>
          </div>
        </div>

        {/* Photo Carousel */}
        <div id="ambiente" className="mt-20 animate-fade-in">
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
                  <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
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

        {/* Seção da psicóloga */}
        <div id="psicologia" className="mt-20 animate-fade-in">
          <div className="text-center mb-8">
            <h3 className="font-bold text-[#a77679] mb-4 text-4xl">Milena de Paula - Psicóloga e Palestrante</h3>
            <p className="text-foreground max-w-2xl mx-auto text-lg">
              Conheça um pouco mais sobre minha trajetória e abordagem terapêutica
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img alt="Psicóloga em ambiente relaxante" src="/images/foto-milena-12.jpg" className="w-full h-80 lg:h-96 object-cover" />
              <div className="absolute bottom-8 left-8 text-primary-foreground bg-[#00282A] p-4 rounded-lg">
                <h3 className="text-2xl lg:text-3xl font-bold">Milena de Paula</h3>
                <p className="text-lg opacity-90">Psicóloga CRP 08/39929</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;
