import { Heart, Brain, Users, Shield, Zap, UserCheck, Award, GraduationCap, User, Frown, Lightbulb, Target, HelpCircle, Flame, AlertTriangle, Building, Baby } from "lucide-react";

const ServicesSection = () => {

  const profileInfo = [
    { icon: Award, text: "Psicóloga clínica | CRP 08/39929" },
    { icon: GraduationCap, text: "Formação em Psicologia - Fae Centro Universitário" },
    { icon: User, text: "Pós Graduação em Psicologia Analítica - concluído" },
    { icon: User, text: "Pós Graduação em Psicopatologia e Dependência Química - concluído" }
  ];

  // Agrupando os 15 itens originais nas 3 categorias (5 itens cada)
  const groupedDemands = [
    {
      title: "Sofrimentos emocionais",
      items: [
        { icon: AlertTriangle, text: "Ansiedade" },
        { icon: Target, text: "Depressão" },
        { icon: Heart, text: "Burnout" }, 
        { icon: Heart, text: "Autoestima" },
        { icon: Brain, text: "Bullying" }
      ]
    },
    {
      title: "Relação com o corpo e alimentação",
      items: [
        { icon: Frown, text: "Compulsão Alimentar" },
        { icon: UserCheck, text: "Distorção de imagem" },
        { icon: Shield, text: "Transtornos alimentares" },
        { icon: HelpCircle, text: "Bulimia Nervosa" },
        { icon: Target, text: "Anorexia Nervosa" }
      ]
    },
    {
      title: "Relações e vínculos",
      items: [
        { icon: Users, text: "Ciúmes" },
        { icon: Baby, text: "Dependência emocional" },
        { icon: Flame, text: "Conflitos amorosos" },
        { icon: Lightbulb, text: "Questões relacionadas à sexualidade e identidade" },
        { icon: Target, text: "Adolescência" }
      ]
    }
  ];

  const processSteps = [
    { icon: "🤝🏠", title: "Ambiente de acolhimento", description: "Um espaço seguro e confidencial para que você possa se expressar livremente." },
    { icon: "🍃", title: "Profundidade", description: "Atendimento embasado nos princípios da psicologia analítica e em práticas sensíveis a questões de gênero, imagem corporal e alimentação." }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#f9f9f9] to-muted overflow-x-hidden">
      <div className="container mx-auto px-4">

        {/* --- SEÇÃO 1: SOBRE A PSICÓLOGA --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-[#f4f4f4] rounded-2xl p-8 shadow-lg animate-slide-in-left border border-border">
            <div className="space-y-4">
              {profileInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={`${item.text}-${index}`} className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-[#f9f9f9] hover:bg-muted">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                      <IconComponent size={20} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <span className="text-muted-foreground font-medium">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-6 text-accent lg:text-4xl">
              A psicoterapia não oferece respostas prontas, ela abre caminhos para que você encontre as suas.
            </h2>
            <p className="text-foreground mb-4 leading-relaxed text-lg">
              Sou Milena, psicóloga clínica com base na psicologia analítica (junguiana). Meu trabalho é guiado por uma escuta sensível às questões de gênero, corpo e alimentação. Temas que atravessam minha própria trajetória como mulher e também estão no centro da minha prática clínica.
            </p>
            <p className="text-foreground mb-4 leading-relaxed text-lg">
              Atendo pessoas que desejam transformar suas relações com o corpo, com a comida e com seus vínculos afetivos. No processo terapêutico, buscamos compreender o que paralisa, elaborar experiências e encontrar formas mais livres e inteiras de viver. Meu trabalho não se limita ao alívio dos sintomas, também exploramos sonhos, imagens, mitos e símbolos, caminhos importantes na psicologia analítica para aprofundar o autoconhecimento.
            </p>
            <p className="text-foreground mb-4 leading-relaxed text-lg">
              Além da clínica, também desenvolvo conteúdos, palestras e projetos voltados à saúde mental, sempre com atenção às relações entre subjetividade, cultura e sociedade.
            </p>
            <p className="text-foreground mb-6 leading-relaxed text-lg font-medium">
              Se você sente que este pode ser um momento importante para iniciar um processo terapêutico, será um prazer caminhar com você.
            </p>
          </div>
        </div>

        {/* --- SEÇÃO 2: DEMANDAS EM PSICOTERAPIA --- */}
        <div className="mb-20 pt-10 border-t border-gray-200">
          
          {/* Imagem Centralizada */}
          <div className="flex justify-center mb-16 animate-fade-in">
            {/* max-w-4xl controla a largura da foto. rounded-3xl dá as bordas arredondadas. */}
            <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl shadow-2xl">
              <img 
                alt="Milena na clínica" 
                src="/images/foto-milena-psicologa-curitiba.jpg" 
                className="w-full h-80 lg:h-[450px] object-cover" 
              />
              
              {/* Texto posicionado no canto inferior esquerdo */}
              <div className="absolute bottom-6 left-6 text-primary-foreground bg-[#00282A] p-4 lg:p-5 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">Milena de Paula</h3>
                <p className="text-sm lg:text-base opacity-90 text-gray-200">Psicóloga CRP 08/39929</p>
              </div>
            </div>
          </div>

          {/* 3 Colunas de Demandas com 5 itens cada */}
            <h2 className="text-2xl font-bold mb-4 text-center text-accent lg:text-2xl" id="psicoterapia">
              Situações que podem levar alguém a buscar psicoterapia
            </h2>
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {groupedDemands.map((group, groupIndex) => (
              <div 
                key={group.title} 
                className="bg-[#FAEFED] rounded-2xl p-6 lg:p-8 shadow-sm"
                style={{ animationDelay: `${groupIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-[#8A3A3B] mb-6 text-center lg:text-left">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-3 lg:p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#E57B5D]">
                          <IconComponent size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm lg:text-base text-foreground font-medium">{item.text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Rodapé da Seção */}
          <div className="mt-12 text-center">
            <p className="text-foreground opacity-90 text-lg max-w-4xl mx-auto">
              Mesmo que sua experiência não esteja listada aqui, a psicoterapia pode ser um espaço importante para compreender o que <strong>você está vivendo.</strong>
            </p>
          </div>
        </div>

        {/* --- SEÇÃO 3: COMO FUNCIONAM OS ATENDIMENTOS --- */}
        <div className="rounded-2xl p-8 lg:p-12 text-primary-foreground animate-fade-in bg-[#ffffff]">
          <h3 className="text-2xl font-bold text-center mb-4 text-[#df7853] lg:text-4xl">
            Como funcionam os atendimentos
          </h3>
          <p className="text-center text-[#A8482C] mb-12 opacity-90">
            Um processo terapêutico estruturado e profundo, atento às suas necessidades simbólicas, emocionais e sociais.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-lg font-semibold mb-3 text-[#F07B4C]">{step.title}</h4>
                <p className="text-sm opacity-90 text-[#A8482C]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;