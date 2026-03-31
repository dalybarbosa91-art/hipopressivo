import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";

const RESULTS = [
  { label: "— 8cm de cintura" },
  { label: "— 10cm de cintura" },
  { label: "— 6cm de cintura" },
];

const ResultsSection = () => (
  <section id="resultados" className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">RESULTADOS REAIS</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
          Mulheres que transformaram a silhueta com o metodo hipopressivo
        </h2>
        <p className="text-muted-foreground text-sm mb-12">
          Resultados obtidos com a pratica do metodo hipopressivo. Resultados individuais podem variar.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESULTS.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <GlowCard className="p-0">
              <div className="w-full h-72 bg-primary/10 rounded-lg flex items-center justify-center">
                <p className="text-primary text-sm text-center px-4">[ Foto de resultado ]</p>
              </div>
              <p className="text-primary font-bold text-center text-lg py-4">{r.label}</p>
            </GlowCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
