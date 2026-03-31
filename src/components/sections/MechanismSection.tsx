import ScrollReveal from "@/components/ScrollReveal";

const STEPS = [
  { num: "01", title: "EXPIRE", desc: "Expira todo o ar dos pulmoes completamente, preparando o diafragma." },
  { num: "02", title: "APNEIA", desc: "Abre as costelas sem inspirar, criando pressao negativa dentro da cavidade toracica." },
  { num: "03", title: "ATIVACAO", desc: "O transverso e ativado de forma reflexa. Com a pratica regular, mantem essa ativacao no dia a dia." },
];

const MechanismSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">A CIENCIA POR TRAS DO PROTOCOLO</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          O Transverso do Abdomen: a cinta natural que vai afinar sua cintura de dentro para fora
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-3xl">
          No centro do seu abdomen existe um musculo que envolve o tronco como uma faixa de compressao. Quando ativado corretamente, ele achata a barriga de dentro para fora, afina a cintura, estabiliza a coluna e melhora a postura automaticamente. Esse musculo se chama Transverso do Abdomen. E ele nao responde ao abdominal tradicional. A tecnica hipopressiva ativa esse musculo atraves de respiracao controlada e postura especifica — criando uma pressao negativa que faz o transverso trabalhar de forma reflexa. Com a pratica de apenas 5 minutos por dia, o musculo aprende a se manter ativado ao longo de todo o dia.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="glow-card p-8 text-center">
              <span className="text-5xl font-heading font-bold text-primary mb-4 block">{step.num}</span>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default MechanismSection;
