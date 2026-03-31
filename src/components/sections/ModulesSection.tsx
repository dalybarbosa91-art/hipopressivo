import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import { Calendar, CheckSquare, BarChart2 } from "lucide-react";

const MODULES = [
  { title: "Fundamentos", desc: "Entenda o que e o hipopressivo, como liberar o diafragma, dominar o ciclo de respiracao e executar seu primeiro vacuum com seguranca." },
  { title: "Posturas Base", desc: "As posturas fundamentais em pe, curvada e ajoelhada. Cada variacao em sequencia progressiva, com tecnica correta antes de avancar." },
  { title: "Posturas Avancadas", desc: "Posturas em quatro apoios, sentada e na parede em multiplas variacoes. Para aprofundar os resultados quando a base esta consolidada." },
  { title: "Combinacoes e Pratica", desc: "Como unir as posturas em sequencias fluidas para uma pratica completa de 5 minutos — o protocolo real do dia a dia." },
  { title: "Avaliacao Corporal", desc: "Medidas, fotos de progresso e percentual de gordura. Registre sua transformacao com precisao desde o primeiro dia." },
  { title: "Super Core", desc: "Exercicios funcionais complementares para potencializar os resultados do protocolo e fortalecer o core de forma completa." },
];

const BONUSES = [
  { icon: Calendar, title: "Guia de Frequencia Semanal", desc: "O mapa completo das 12 semanas. Cada dia planejado do inicio ao fim." },
  { icon: CheckSquare, title: "Checklist de Postura", desc: "Os 7 pontos de atencao para executar cada postura com tecnica perfeita." },
  { icon: BarChart2, title: "Tabela de Progressao", desc: "Registre suas medidas semana a semana e acompanhe a transformacao em numeros reais." },
];

const ModulesSection = () => (
  <section id="modulos" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">TUDO QUE ESTA INCLUIDO</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Um protocolo clinico completo — simplificado para voce aplicar em casa em 5 minutos por dia
        </h2>
        <p className="text-muted-foreground text-lg mb-12">6 modulos progressivos + 3 bonus exclusivos</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {MODULES.map((mod, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <GlowCard>
              <div className="h-48 w-full bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-primary font-heading text-5xl font-bold opacity-30">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">{mod.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="text-center mb-10">
          <p className="text-foreground font-heading text-xl">E ainda, 3 bonus exclusivos inclusos:</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {BONUSES.map((bonus, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <GlowCard className="text-center">
              <bonus.icon className="text-primary mx-auto mb-4" size={40} />
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{bonus.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{bonus.desc}</p>
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
