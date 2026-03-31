import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { CTA_LINK } from "@/components/Ticker";

const INCLUDED = [
  "Modulo Fundamentos",
  "Modulo Posturas Base",
  "Modulo Posturas Avancadas",
  "Modulo Combinacoes e Pratica",
  "Modulo Avaliacao Corporal",
  "Modulo Super Core",
  "Bonus: Guia de Frequencia Semanal 12 semanas",
  "Bonus: Checklist de Postura",
  "Bonus: Tabela de Progressao",
];

const OfferSection = () => (
  <section id="investimento" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="label-tag mb-6 inline-block">INVESTIMENTO</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comece sua transformacao hoje
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma unica sessao presencial de personal trainer custa em media R$120,00. Uma cirurgia para tratar problemas abdominais custa entre R$10.000 e R$20.000. Uma anuidade de academia custa em torno de R$1.200 — e nao resolve a barriga projetada.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="max-w-lg mx-auto bg-card border-t-4 border-t-primary rounded-2xl p-8 md:p-10">
          <div className="text-center mb-6">
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-full mb-4">
              OFERTA POR TEMPO LIMITADO
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Protocolo Hipopressivo Team Daly</h3>
            <p className="text-muted-foreground line-through text-lg">R$ 297,00</p>
            <p className="font-heading text-5xl font-bold text-primary my-2">R$ 129,90</p>
            <p className="text-muted-foreground text-sm">ou 3x de R$ 46,27 sem juros</p>
          </div>

          <ul className="space-y-3 mb-8">
            {INCLUDED.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Check className="text-primary shrink-0" size={18} />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="cta" size="lg" className="w-full text-base py-6 h-auto">
              QUERO COMECAR MINHA TRANSFORMACAO →
            </Button>
          </a>

          <p className="text-muted-foreground text-xs text-center mt-6 leading-relaxed">
            Garantia incondicional de 7 dias — Se em 7 dias voce nao ficar satisfeita, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OfferSection;
