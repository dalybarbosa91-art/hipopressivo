import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CTA_LINK } from "@/components/Ticker";

const FinalCTA = () => (
  <section className="py-24 bg-gradient-to-b from-background via-card to-background">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
          CHEGA DE BARRIGA PROJETADA. O MOMENTO E AGORA.
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          5 minutos por dia. 12 semanas. Ate 12cm de cintura. Sem abdominal. Sem dieta.
        </p>
        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
          <Button variant="cta" size="lg" className="text-lg px-12 py-7 h-auto">
            QUERO COMECAR MINHA TRANSFORMACAO →
          </Button>
        </a>
        <p className="text-muted-foreground text-sm mt-6">
          Pagamento seguro · Garantia de 7 dias · Acesso imediato
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
