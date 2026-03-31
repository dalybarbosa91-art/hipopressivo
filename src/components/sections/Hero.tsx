import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CTA_LINK } from "@/components/Ticker";

const Hero = () => (
  <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-background" id="protocolo">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div>
            <span className="label-tag mb-6 inline-block">PROTOCOLO HIPOPRESSIVO TEAM DALY</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              SUA BARRIGA CONTINUA PROJETADA PARA FRENTE — MESMO TREINANDO, MESMO FAZENDO DIETA
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              O protocolo de 5 minutos por dia que ativa o musculo que nenhum abdominal alcanca — e elimina ate 12cm de cintura em 12 semanas, sem dieta restritiva e sem abdominal tradicional.
            </p>
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="text-lg px-10 py-6 h-auto">
                QUERO COMECAR AGORA →
              </Button>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              Acesso imediato · Garantia de 7 dias · Sem equipamento
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-2xl bg-secondary glow-image flex items-center justify-center p-8">
              <p className="text-primary text-center font-body text-sm leading-relaxed">
                [ Foto da Daly executando a tecnica hipopressiva — corpo inteiro, fundo escuro ]
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;
