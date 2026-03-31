import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const ITEMS = [
  "Nao importa seu peso atual",
  "Nao importa seu percentual de gordura",
  "Nao importa seu nivel de condicionamento fisico",
  "Nao importa se voce ja teve filho ou nao",
  "Nao importa qual e o seu biotipo",
  "Nao importa se seu metabolismo e lento",
  "Nao importa se sua genetica nao favorece",
  "Nao importa ha quanto tempo a barriga esta assim",
];

const ForWhoSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">ISSO FOI FEITO PARA VOCE</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Nao importa de onde voce esta comecando
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <ScrollReveal>
          <ul className="space-y-4">
            {ITEMS.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="text-primary shrink-0" size={20} />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glow-card p-10 border-primary/40 text-center" style={{ boxShadow: "0 0 40px hsl(322 80% 55% / 0.2)" }}>
            <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Qualquer mulher consegue fazer o protocolo e ter resultado
            </p>
            <p className="text-primary font-bold text-xl">menos 4 a 12cm de cintura em 12 semanas</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ForWhoSection;
