import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const BENEFITS = [
  "Perder de 4 a 12cm de volume abdominal em 12 semanas",
  "Eliminar a barriga projetada para frente de dentro para fora",
  "Melhorar o aspecto da barriga — circunferencia e tonus muscular",
  "Vestir as roupas que voce parou de usar porque a barriga aparecia",
  "Tirar fotos nas ferias sem se preocupar com o angulo",
  "Se sentir mais segura, confiante e bonita — e isso vai refletir em tudo ao seu redor",
  "Descobrir que barriga bonita nao depende do seu peso — qualquer mulher pode ter",
  "Melhorar as dores nas costas que o core fraco provoca",
  "Melhorar o intestino preso pela ativacao do core profundo",
  "Melhorar as colicas menstruais",
  "Melhorar a postura de forma automatica e permanente",
];

const PainSection = () => (
  <section id="problema" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">VOCE SE IDENTIFICA?</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
          Voce nao esta sozinha — e a culpa nao e sua
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          Barriga projetada para frente, estomago alto que nao some independente do quanto voce treina ou se priva na alimentacao. Dores nas costas que aparecem sem explicacao. Roupas que voce evita porque a barriga aparece. Fotos de perfil que voce nem tira mais. Essas sao dores que a maioria das mulheres carrega em silencio — achando que e falta de esforco, metabolismo lento ou genetica ruim. Nao e nada disso. E o musculo errado sendo trabalhado — enquanto o musculo certo continua adormecido.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
          O que vai mudar na sua vida:
        </h3>
        <ul className="space-y-4 mb-10">
          {BENEFITS.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="text-primary shrink-0 mt-1" size={20} />
              <span className="text-foreground text-base leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="text-primary font-semibold text-lg leading-relaxed border-l-4 border-primary pl-6">
          E tudo isso sem seguir dieta restritiva, sem cortar carboidrato, sem abrir mao da cervejinha ou do vinho do fim de semana. Sem fazer um unico abdominal tradicional.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default PainSection;
