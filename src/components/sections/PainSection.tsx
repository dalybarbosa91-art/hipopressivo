import ScrollReveal from "@/components/ScrollReveal";
import { Ruler, Shrink, Activity, Shirt, Camera, Sparkles, Zap, Heart, Moon, ArrowUpRight, Star, type LucideIcon } from "lucide-react";

const BENEFITS: { text: string; icon: LucideIcon }[] = [
  { text: "Perder de 4 a 12cm de volume abdominal em 12 semanas", icon: Ruler },
  { text: "Eliminar a barriga projetada para frente de dentro para fora", icon: Shrink },
  { text: "Melhorar o aspecto da barriga — circunferencia e tonus muscular", icon: Activity },
  { text: "Vestir as roupas que voce parou de usar porque a barriga aparecia", icon: Shirt },
  { text: "Tirar fotos nas ferias sem se preocupar com o angulo", icon: Camera },
  { text: "Se sentir mais segura, confiante e bonita — e isso vai refletir em tudo ao seu redor", icon: Sparkles },
  { text: "Descobrir que barriga bonita nao depende do seu peso — qualquer mulher pode ter", icon: Star },
  { text: "Melhorar as dores nas costas que o core fraco provoca", icon: Zap },
  { text: "Melhorar o intestino preso pela ativacao do core profundo", icon: Heart },
  { text: "Melhorar as colicas menstruais", icon: Moon },
  { text: "Melhorar a postura de forma automatica e permanente", icon: ArrowUpRight },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border-l-[3px] p-5"
                style={{ backgroundColor: '#1E1E1E', borderLeftColor: 'hsl(var(--primary))' }}
              >
                <Icon className="shrink-0" size={22} style={{ color: 'hsl(var(--primary))' }} />
                <span className="text-foreground text-base leading-relaxed">{b.text}</span>
              </div>
            );
          })}
        </div>
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
