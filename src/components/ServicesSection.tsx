import { Heart, Brain, Users, Shield, Zap, UserCheck, Award, GraduationCap, User, Frown, Lightbulb, Target, HelpCircle, Flame, AlertTriangle, Building, Baby } from "lucide-react";
const ServicesSection = () => {
  const psychotherapyItems = [{
    icon: AlertTriangle,
    text: "Ansiedade"
  }, {
    icon: Frown,
    text: "Depressão"
  }, {
    icon: Users,
    text: "LGBTQIAPN+"
  },  {
    icon: Target,
    text: "Compulsão Alimentar"
  }, {
    icon: UserCheck,
    text: "Autoestima"
  }, {
    icon: Baby,
    text: "Adolescentes"
  }, {
    icon: Heart,
    text: "Ciúmes"
  }, {
    icon: Shield,
    text: "Bullying"
  }, {
    icon: Flame,
    text: "Burnout"
  }, {
    icon: Heart,
    text: "Conflitos Amoroso"
  }, {
    icon: HelpCircle,
    text: "Distorção de Imagem"
  }, {
    icon: Lightbulb,
    text: "Dependência emocional"
  }, {
    icon: Brain,
    text: "Abuso de Substância"
  }, {
    icon: Target,
    text: "Transtornos Alimentares"
  }];
  const processSteps = [{
    icon: "🫂",
    title: "Ambiente de acolhimento",
    description: "Um espaço seguro e confidencial para que você possa se expressar livremente."
  }, {
    icon: "🍃",
    title: "Profundidade",
    description: "Atendimento embasado nos princípios da psicologia analítica e em práticas sensíveis a questões de gênero, imagem corporal e alimentação."
  }];
  const profileInfo = [{
    icon: Award,
    text: "CRP 08/39929"
  }, {
    icon: GraduationCap,
    text: "Formação em Psicologia - Fae Centro Universitário"
  }, {
    icon: User,
    text: "Pós Graduação em Psicologia Analítica - em andamento"
  }, {
    icon: User,
    text: "Pós Graduação em Psicopatologia e Dependência Química - concluído."
  }
                      ];
  return <section id="services" className="py-16 lg:py-24 bg-[#f9f9f9] to-muted overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-[#f4f4f4] rounded-2xl p-8 shadow-lg animate-slide-in-left border border-border">
            <div className="space-y-4">
              {profileInfo.map((item, index) => {
              const IconComponent = item.icon;
              return <div key={`${item.text}-${index}`} className="flex items-center gap-4 p-4 rounded-lg transition-colors bg-[#f9f9f9] hover:bg-muted">
                    {/* Circle with Icon */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-primary">
                      <IconComponent size={20} className="text-primary-foreground" />
                    </div>
                    
                    {/* Text Rectangle */}
                    <div className="flex-1">
                      <span className="text-muted-foreground font-medium">{item.text}</span>
                    </div>
                  </div>;
            })}
            </div>
          </div>
          <div className="animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-6 text-accent lg:text-4xl">
              Seja bem-vinda(o) ao meu espaço. Aqui, a escuta é ferramenta e caminho, e cada história é levada a sério.
            </h2>
            <p className="text-foreground mb-6 leading-relaxed text-lg">
              Sou Milena, psicóloga clínica com base na psicologia analítica (junguiana) e com escuta sensível às questões de gênero, corpo e alimentação. Esses temas atravessam minha própria história como mulher e estão no centro do meu trabalho clínico.
            </p>
            <p className="text-foreground mb-6 leading-relaxed text-lg">
              Atendo pessoas que desejam transformar suas relações com o corpo, a comida e os vínculos afetivos, buscando compreender o que as paralisa e encontrar formas mais livres e inteiras de viver. Meu trabalho não se limita ao alívio dos sintomas: mergulhamos no inconsciente, atravessamos sonhos, mitos e símbolos, ajudando cada pessoa a se reconectar com sua alma e a encontrar sentido em sua jornada.            </p>
            <p className="text-foreground mb-6 leading-relaxed text-lg">
              Além da clínica, também desenvolvo conteúdos, palestras e consultorias para empresas e instituições, sempre com um olhar atento à saúde mental, à subjetividade e à cultura.
            </p>
          </div>
        </div>

        {/* Imagem da psicóloga */}
        <div className="mb-20 animate-fade-in">
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

        {/* Psychotherapy Demands Section */}
        <div className="mb-20">
          <h3 className="font-bold text-center mb-12 animate-fade-in text-4xl text-[#a77679]">
            Demandas em psicoterapia
          </h3>
          
          {/* Single Container Card */}
          <div className="bg-[#f4f4f4] rounded-2xl p-8 shadow-lg animate-fade-in border border-border">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {psychotherapyItems.map((item, index) => {
              const IconComponent = item.icon;
              return <div key={`${item.text}-${index}`} className="flex items-center gap-4 p-4 bg-[#f9f9f9] rounded-lg hover:bg-muted transition-colors animate-fade-in" style={{
                animationDelay: `${index * 0.05}s`
              }}>
                    {/* Circle with Icon */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#df7853]">
                      <IconComponent size={20} className="text-primary-foreground" />
                    </div>
                    
                    {/* Text Rectangle */}
                    <div className="flex-1">
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="rounded-2xl p-8 lg:p-12 text-primary-foreground animate-fade-in bg-[#ffffff]">
          <h3 className="text-2xl font-bold text-center mb-4 text-[#df7853] lg:text-4xl">
            Como funcionam os atendimentos
          </h3>
          <p className="text-center text-[#A8482C] mb-12 opacity-90">
            Um processo terapêutico estruturado e profundo, atento às suas necessidades simbólicas, emocionais e sociais.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => <div key={step.title} className="text-center animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-lg font-semibold mb-3 text-[#F07B4C]">{step.title}</h4>
                <p className="text-sm opacity-90 text-[#A8482C]">{step.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;