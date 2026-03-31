import ScrollReveal from "@/components/ScrollReveal";

const BADGES = [
  "Formada pela UFC",
  "Pos-graduada em Fisiologia do Exercicio",
  "Personal Trainer Certificada",
  "Criadora do Protocolo Hipopressivo Team Daly",
];

const AuthoritySection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="w-full aspect-square rounded-2xl bg-secondary glow-image flex items-center justify-center p-8">
            <p className="text-primary text-sm text-center">
              [ Foto da Daly — rosto olhando para a camera, fundo escuro ]
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <span className="label-tag mb-6 inline-block">QUEM VAI TE GUIAR</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Dalyane Barbosa</h2>
          <p className="text-muted-foreground mb-6">Personal trainer certificada especialista em transformacao feminina ha mais de 10 anos</p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Dalyane Barbosa nao criou mais um protocolo de exercicios. Ela criou o metodo que ela mesma queria ter tido acesso quando comecou. Formada pela UFC e com pos-graduacao em Fisiologia do Exercicio e Prescricao de Treinamento, Daly passou anos observando o mesmo padrao se repetir: mulheres dedicadas, que treinavam com consistencia, que faziam tudo certo — e continuavam com a barriga projetada, as dores nas costas e a autoestima abalada. A resposta estava no musculo que ninguem estava treinando. O Protocolo Hipopressivo Team Daly nasceu disso.
          </p>
          <div className="flex flex-wrap gap-3">
            {BADGES.map((b, i) => (
              <span key={i} className="px-4 py-2 text-xs font-semibold border border-primary/40 text-primary rounded-full">
                {b}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AuthoritySection;
