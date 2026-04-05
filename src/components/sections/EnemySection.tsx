import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import { Zap, MoveDown, ShieldOff, type LucideIcon } from "lucide-react";

const CARDS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "O Abdominal Tradicional",
    text: "Cada repeticao aumenta a pressao dentro da cavidade abdominal. Essa pressao vai para frente. Com o tempo, seu corpo aprende a projetar a barriga. Quanto mais voce faz, mais a barriga projeta.",
    icon: Zap,
  },
  {
    title: "A Prancha Convencional",
    text: "Sem a ativacao do core profundo primeiro, a prancha forca o abdomen para baixo e para frente. Prancha sem transverso ativo nao resolve — pode ate agravar.",
    icon: MoveDown,
  },
  {
    title: "A Cinta Modeladora",
    text: "A cinta faz o trabalho que o seu transverso deveria fazer. Com o uso continuo, o musculo atrofia. Quando voce tira, a barriga volta ainda mais projetada.",
    icon: ShieldOff,
  },
];

const EnemySection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">POR QUE VOCE NAO ESTA VENDO RESULTADO</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Voce nao esta errando por falta de esforco. Esta errando de musculo.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
          Se voce ja fez centenas de abdominais, passou horas na prancha e usou cinta modeladora todos os dias — e a barriga continua projetada — nao e falta de disciplina. E que esses metodos trabalham o musculo errado. E pior: estao ativamente piorando o problema.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {CARDS.map((card, i) => {
          const Icon = card.icon;
          return (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="bg-secondary border-l-4 border-l-primary rounded-xl p-6 h-full">
              <Icon className="text-primary mb-4" size={28} />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
            </div>
          </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-primary font-semibold text-lg text-center">
          A solucao nao e mais esforco. E o musculo certo — ativado do jeito certo.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default EnemySection;
