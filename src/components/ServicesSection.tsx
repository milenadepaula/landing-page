import React from "react";
import { 
  AlertTriangle, 
  RotateCcw, 
  Brain, 
  Utensils, 
  Heart, 
  Activity, 
  Users 
} from "lucide-react";

const ServicesSection = () => {
  // Categorias separadas para criar as 3 colunas exatamente como no print
  const demandCategories = [
    {
      title: "Sofrimentos emocionais",
      items: [
        { icon: AlertTriangle, text: "Ansiedade" },
        { icon: RotateCcw, text: "Depressão" },
        { icon: Brain, text: "Burnout" }
      ]
    },
    {
      title: "Relação com o corpo e alimentação",
      items: [
        { icon: Utensils, text: "Compulsão alimentar e relação com a comida" },
        { icon: Heart, text: "Dificuldades na relação com a imagem corporal" },
        { icon: Activity, text: "Transtornos alimentares" }
      ]
    },
    {
      title: "Relações e vínculos",
      items: [
        { icon: Heart, text: "Ciúmes" },
        { icon: Heart, text: "Dependência emocional" },
        { icon: Users, text: "Conflitos amorosos" }
      ]
    }
  ];

  const processSteps = [{
    icon: "🤝🏠",
    title: "Ambiente de acolhimento",
    description: "Um espaço seguro e confidencial onde você pode falar livremente sobre suas experiências, emoções e dúvidas, sem julgamentos."
  }, {
    icon: "🍃",
    title: "Profundidade",
    description: "O trabalho terapêutico é orientado pela psicologia analítica e por uma escuta sensível às questões de gênero, corpo e alimentação."
  }];

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FAFAFA] overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Cabeçalho e Imagem da Psicóloga */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-12 lg:gap-8">
          
          {/* Textos da esquerda */}
          <div className="lg:w-[55%] space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-primary px-0 mx-[5px]">
              Algumas questões que podem ser trabalhadas na psicoterapia
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              Cada processo terapêutico é único, mas algumas <span className="font-semibold">experiências</span> costumam levar as pessoas a buscar apoio psicológico.
            </p>
          </div>

          {/* Imagem com Crachá sobreposto */}
          <div className="lg:w-[45%] relative flex justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div>
                <img id="img-milena"
                  alt="Psicóloga Milena em Curitiba" 
                  src="/images/foto-milena-psicologa-curitiba.jpg" 
                  className="w-full h-auto object-cover" 
                />
              </div>
              {/* Crachá (Badge) Flutuante */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-[#0C3B3D] text-white px-6 py-4 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-1">Milena de Paula</h3>
                <p className="text-sm opacity-90">Psicóloga CRP 08/39929</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção das 3 Colunas (Demandas em psicoterapia) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-20">
          {demandCategories.map((category, index) => (
            <div key={index} className="bg-[#FAF4F4] rounded-xl p-6 border border-[#F5EAEA]">
              <h3 className="text-[#8B3A3A] font-medium text-lg mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={itemIndex} className="bg-white rounded-lg p-3 flex items-center gap-4 shadow-sm">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#DD7556]">
                        <IconComponent size={18} className="text-white" />
                      </div>
                      <span className="text-gray-800 text-sm font-medium">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Texto final das demandas */}
        <p className="text-center text-gray-700 mb-20 text-[15px]">
          Mesmo que sua experiência não esteja listada aqui, a psicoterapia pode ser um espaço importante para <br className="hidden md:block"/> compreender o que <span className="font-bold">você está vivendo.</span>
        </p>

        {/* ----------------------------------------------------------- */}
        {/* SEÇÃO INTACTA - Como funcionam os atendimentos */}
        {/* ----------------------------------------------------------- */}
        <div className="rounded-2xl p-8 lg:p-12 text-primary-foreground animate-fade-in bg-[#ffffff]">
          <h3 className="text-2xl font-bold text-center mb-4 text-[#df7853] lg:text-4xl">
            Como funciona o processo de psicoterapia
          </h3>
          <p className="text-center text-[#A8482C] mb-12 opacity-90">
            Um processo terapêutico cuidadoso e profundo, atento às dimensões emocionais, simbólicas e relacionais da sua experiência.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-lg font-semibold mb-3 text-[#F07B4C]">{step.title}</h4>
                <p className="text-sm opacity-90 text-[#A8482C]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Fim da seção intacta */}
        
      </div>
    </section>
  );
};

export default ServicesSection;