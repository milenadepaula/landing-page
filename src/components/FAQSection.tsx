import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [{
    question: "O que acontece no primeiro encontro?",
    answer: "No primeiro encontro, criamos um momento de acolhimento para que você conte livremente o que sente e o que espera da terapia. Também explico melhor o meu trabalho e o que podemos fazer juntas(os), ajustando o processo às suas necessidades. Esse espaço inicial nos ajuda a construir uma relação de confiança, essencial para o caminho terapêutico."
  }, {
    question: "O que é a psicologia analítica (junguiana)?",
    answer: "A psicologia analítica, proposta por Carl Gustav Jung, busca compreender a pessoa em sua totalidade, integrando os conteúdos conscientes e inconscientes por meio da análise de sonhos, imagens simbólicas e padrões internos. É um processo profundo que nos ajuda a acessar significados, transformar bloqueios e cultivar uma relação mais criativa e verdadeira com a própria vida."
  }, {
    question: "Como funciona uma sessão de psicoterapia?",
    answer: "As sessões acontecem em um ambiente seguro e confidencial, presencial ou online. Você tem um espaço livre para expressar suas emoções, refletir sobre suas experiências e compreender melhor os padrões que influenciam sua vida. Juntas(os), vamos trabalhar com recursos como a palavra, os sonhos e outras imagens internas, sempre no ritmo que fizer sentido para você."
  }, {
    question: "Qual a duração média de um processo terapêutico?",
    answer: "Não há um tempo fixo — cada processo é único e depende das suas necessidades e objetivos. Algumas pessoas percebem transformações profundas em poucos meses, outras preferem um acompanhamento mais longo e contínuo. O mais importante é que o processo respeite o seu ritmo e gere resultados significativos para a sua qualidade de vida."
  }, {
    question: "As sessões online funcionam tão bem quanto as presenciais?",
    answer: "Sim. Quando há uma conexão genuína entre terapeuta e paciente, o setting virtual permite um trabalho profundo e significativo, com a mesma qualidade das sessões presenciais. Muitos pacientes relatam que o formato online traz praticidade e conforto, facilitando a continuidade do tratamento."
  }, {
    question: "Você atende por convênio?",
    answer: "Não. Atualmente, meus atendimentos são exclusivamente particulares. Trabalho dessa forma para garantir maior flexibilidade, privacidade e qualidade ao processo terapêutico, sem as limitações que os planos de saúde geralmente impõem. Caso precise, posso emitir recibos para que você solicite o reembolso junto ao seu convênio, de acordo com as políticas do seu plano."
  }];
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  return <section id="faq" className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#a77679] mb-12 animate-fade-in">
            Perguntas frequentes que podem te ajudar
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="border border-border rounded-lg animate-fade-in" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <button className="w-full flex items-center justify-between p-6 text-left" onClick={() => toggleFAQ(index)}>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 bg-[#F07B4C]">
                      {index + 1}
                    </div>
                    <span className="font-bold text-foreground">{faq.question}</span>
                  </div>
                  {openFAQ === index ? <ChevronUp size={20} className="text-muted-foreground flex-shrink-0" /> : <ChevronDown className="text-accent flex-shrink-0" size={20} />}
                </button>
                
                {openFAQ === index && <div className="px-6 pb-6 animate-fade-in">
                    <div className="pl-12">
                      <p className="text-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default FAQSection;