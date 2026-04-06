import { useState } from "react";
import logoImg from "@/assets/logo-daly.png";
import heroDaly from "@/assets/hero-daly.png";
import { Menu, X, Check, MoveDown, ShieldOff, Calendar, CheckSquare, BarChart2, Ruler, Shrink, Activity, Shirt, Camera, Sparkles, Zap, Heart, Moon, ArrowUpRight, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import GlowCard from "@/components/GlowCard";
import TypewriterText from "@/components/TypewriterText";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RESULT_IMAGES = [
  "/results/result-12.png",
  "/results/result-01.png",
  "/results/result-02.png",
  "/results/result-03.png",
  "/results/result-05.png",
  "/results/result-06.png",
  "/results/result-07.png",
  "/results/result-08.png",
  "/results/result-09.png",
  "/results/result-10.png",
];

const CTA_LINK = "https://pay.kiwify.com.br/5mIQ0ua";

const NAV_LINKS = [
  { label: "O Protocolo", href: "#protocolo" },
  { label: "O Problema", href: "#problema" },
  { label: "O Que Você Recebe", href: "#modulos" },
  { label: "Investimento", href: "#investimento" },
];

const TICKER_ITEMS = [
  "Protocolo criado por personal trainer certificada",
  "Apenas 5 minutos por dia",
  "Até 12cm de cintura em 12 semanas",
  "Sem abdominal e sem dieta restritiva",
  "Garantia incondicional de 7 dias",
];

const PAIN_ITEMS: { text: string; icon: LucideIcon }[] = [
  { text: "Perder de 4 a 12cm de volume abdominal em 12 semanas", icon: Ruler },
  { text: "Eliminar a barriga projetada para frente de dentro para fora", icon: Shrink },
  { text: "Melhorar o aspecto da barriga em circunferência e tônus muscular", icon: Activity },
  { text: "Vestir as roupas que você parou de usar porque a barriga aparecia", icon: Shirt },
  { text: "Tirar fotos nas férias sem se preocupar com o ângulo", icon: Camera },
  { text: "Se sentir mais segura, confiante e bonita e isso vai refletir em tudo ao seu redor", icon: Sparkles },
  { text: "Melhorar as dores nas costas que o core fraco provoca", icon: Zap },
  { text: "Melhorar o intestino preso pela ativação do core profundo", icon: Heart },
  { text: "Melhorar as cólicas menstruais", icon: Moon },
  { text: "Melhorar a postura de forma automática e permanente", icon: ArrowUpRight },
];

const ENEMY_CARDS: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "O Abdominal Tradicional",
    text: "Cada repetição aumenta a pressão dentro da cavidade abdominal. Essa pressão vai para frente. Com o tempo, seu corpo aprende a projetar a barriga. Quanto mais você faz, mais a barriga projeta.",
    icon: Zap,
  },
  {
    title: "A Prancha Convencional",
    text: "Sem a ativação do core profundo primeiro, a prancha força o abdômen para baixo e para frente. Prancha sem transverso ativo não resolve e pode até agravar.",
    icon: MoveDown,
  },
  {
    title: "A Cinta Modeladora",
    text: "A cinta faz o trabalho que o seu transverso deveria fazer. Com o uso contínuo, o músculo atrofia. Quando você tira, a barriga volta ainda mais projetada.",
    icon: ShieldOff,
  },
];

const MECHANISM_STEPS = [
  { num: "01", title: "EXPIRE", desc: "Expira todo o ar dos pulmões completamente, preparando o diafragma." },
  { num: "02", title: "APNEIA", desc: "Abre as costelas sem inspirar, criando pressão negativa dentro da cavidade torácica." },
  { num: "03", title: "ATIVAÇÃO", desc: "O transverso é ativado com a prática regular, mantém essa ativação no dia a dia." },
];

const FOR_WHO_ITEMS = [
  "Não importa seu peso atual",
  "Não importa seu percentual de gordura",
  "Não importa seu nível de condicionamento físico",
  "Não importa se você já teve filho ou não",
  "Não importa qual é o seu biotipo",
  "Não importa se seu metabolismo é lento",
  "Não importa se sua genética não favorece",
  "Não importa há quanto tempo a barriga está assim",
];

const RESULTS = [
  "8cm de cintura em 10 semanas",
  "6cm de cintura em 8 semanas",
  "10cm de cintura em 12 semanas",
];

const MODULES = [
  { title: "Fundamentos", desc: "Entenda o que é o hipopressivo, como liberar o diafragma, dominar o ciclo de respiração e executar seu primeiro vacuum com segurança." },
  { title: "Posturas Base", desc: "As posturas fundamentais em pé, curvada e ajoelhada. Cada variação em sequência progressiva com técnica correta antes de avançar." },
  { title: "Posturas Avançadas", desc: "Posturas em quatro apoios, sentada e na parede em múltiplas variações. Para aprofundar os resultados quando a base está consolidada." },
  { title: "Combinações e Prática", desc: "Como unir as posturas em sequências fluidas para uma prática completa de 5 minutos, o protocolo real do dia a dia." },
  { title: "Avaliação Corporal", desc: "Medidas, fotos de progresso e percentual de gordura. Registre sua transformação com precisão desde o primeiro dia." },
  { title: "Super Core", desc: "Exercícios funcionais complementares para potencializar os resultados do protocolo e fortalecer o core de forma completa." },
];

const BONUSES = [
  { icon: Calendar, title: "Guia de Frequência Semanal", desc: "O mapa completo das 12 semanas. Cada dia planejado do início ao fim." },
  { icon: CheckSquare, title: "Checklist de Postura", desc: "Os 7 pontos de atenção para executar cada postura com técnica perfeita." },
  { icon: BarChart2, title: "Tabela de Progressão", desc: "Registre suas medidas semana a semana e acompanhe a transformação em números reais." },
];

const OFFER_ITEMS = [
  "Módulo Fundamentos",
  "Módulo Posturas Base",
  "Módulo Posturas Avançadas",
  "Módulo Combinações e Prática",
  "Módulo Avaliação Corporal",
  "Módulo Super Core",
  "Bônus: Guia de Frequência Semanal 12 semanas",
  "Bônus: Checklist de Postura",
  "Bônus: Tabela de Progressão",
];

const FAQ_ITEMS = [
  { q: "Preciso de algum equipamento?", a: "Não. O protocolo é feito com técnica de respiração e postura. Você precisa apenas de um espaço de 2m² e um tapete ou superfície confortável." },
  { q: "Quanto tempo por dia preciso dedicar?", a: "Apenas 5 minutos por dia nos 6 dias de prática focada, mais uma sessão de 20 a 30 minutos uma vez por semana." },
  { q: "Funciona para qualquer nível de condicionamento?", a: "Sim. O protocolo começa do zero com os fundamentos da técnica. Não é necessária nenhuma experiência prévia." },
  { q: "Tenho diástase abdominal. Posso fazer?", a: "O hipopressivo reduz a pressão intra-abdominal e é frequentemente indicado como parte da reabilitação da diástase. Recomendamos informar seu médico ou fisioterapeuta antes de iniciar caso tenha diagnóstico confirmado." },
  { q: "Tem alguma contraindicação?", a: "Sim. O protocolo é contraindicado para gestantes e pessoas com hipertensão arterial. Em caso de qualquer condição de saúde prévia, consulte seu médico antes de iniciar." },
  { q: "Em quanto tempo vou ver resultado?", a: "As primeiras mudanças na ativação muscular e na postura são percebidas nas primeiras 2 a 3 semanas. Resultados visuais na cintura são mais evidentes a partir da semana 6, com resultados significativos ao completar as 12 semanas." },
  { q: "Por quanto tempo terei acesso?", a: "O acesso ao protocolo é por 12 meses a partir da data da compra." },
];

const AUTHORITY_BADGES = [
  "Formada pela UFC",
  "Pós-graduada em Fisiologia do Exercício",
  "Personal Trainer Certificada",
  "Criadora do Protocolo Hipopressivo Team Daly",
];

const Hipopressivo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#">
            <img src={logoImg} alt="Daly Barbosa - Treinamento Feminino" className="h-10" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#investimento" className="hidden md:block">
            <button className="bg-primary text-primary-foreground font-heading px-6 py-2 cta-pulse hover:shadow-[0_0_25px_hsl(347_78%_55%/0.7)] transition-shadow text-lg rounded-xl mx-0">
              Quero Começar
            </button>
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pb-4">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block py-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#investimento" onClick={() => setMenuOpen(false)} className="block mt-2">
              <button className="w-full bg-primary text-primary-foreground font-heading text-sm px-6 py-3 rounded-lg cta-pulse">
                Quero Começar
              </button>
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="protocolo" className="min-h-screen pt-24 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            <ScrollReveal>
              <div>
                <span className="bg-primary/10 text-primary font-body text-sm font-semibold px-4 py-1.5 rounded-full inline-block mb-6">
                  PROTOCOLO HIPOPRESSIVO TEAM DALY
                </span>
                <h1 className="font-heading text-5xl md:text-7xl leading-tight text-foreground mb-6">
                  <TypewriterText
                    text="Reduza até 12cm de cintura, trate a diástase e acabe com a incontinência urinária"
                    className="text-6xl"
                    speed={25}
                    delay={300}
                  />
                </h1>
                <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl">
                  Apenas 5 minutos por dia. Sem abdominal tradicional. Sem dieta restritiva. Sem equipamento.
                </p>
                <a href="#investimento">
                  <button className="bg-primary text-primary-foreground font-heading text-2xl px-10 py-4 rounded-lg cta-pulse hover:shadow-[0_0_25px_hsl(347_78%_55%/0.7)] transition-shadow mx-0">
                    QUERO COMEÇAR MINHA TRANSFORMAÇÃO
                  </button>
                </a>
                <p className="text-muted-foreground text-sm mt-4 mx-[50px]">
                  ​
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/40 to-transparent rounded-2xl blur-md" />
                <div className="relative rounded-2xl bg-primary/10 min-h-[400px] flex items-center justify-center">
                  <p className="text-primary text-sm text-center p-8">
                    Foto da Daly executando a técnica hipopressiva. Corpo inteiro. Fundo escuro.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* GLOW LINE */}
      <div className="h-[2px] w-full overflow-hidden">
        <div className="glow-line h-full bg-gradient-to-r from-primary via-primary-light to-primary" />
      </div>

      {/* TICKER */}
      <div className="bg-primary py-4 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="marquee-track inline-flex gap-12">
            {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="font-body text-primary-foreground text-sm font-medium">
                {item} <span className="mx-4 opacity-50">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SEÇÃO DOR */}
      <section id="problema" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag mb-6 inline-block">VOCÊ SE IDENTIFICA?</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Você não está sozinha e a culpa não é sua
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-10">
                Barriga projetada para frente, estômago alto que não some independente do quanto você treina ou se priva na alimentação. Dores nas costas sem explicação. Roupas que você evita porque a barriga aparece. Fotos de perfil que você nem tira mais. A maioria das mulheres carrega isso em silêncio, achando que é falta de esforço, metabolismo lento ou genética ruim. Não é nada disso. É o músculo errado sendo trabalhado enquanto o músculo certo continua adormecido.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h3 className="font-heading text-3xl text-center text-foreground mb-8">O que vai mudar na sua vida</h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {PAIN_ITEMS.map(({ text, icon: Icon }, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="benefit-card">
                  <Icon className="benefit-icon size-[22px] shrink-0" />
                  <span className="font-body text-base leading-relaxed text-foreground">{text}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-muted-foreground text-center max-w-2xl mx-auto mt-10 text-base italic">
              E tudo isso sem seguir dieta restritiva, e sem precisar fazer um único abdominal tradicional.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SEÇÃO INIMIGO */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag mb-6 inline-block">POR QUE VOCÊ NÃO ESTÁ VENDO RESULTADO</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Você não está errando por falta de esforço. Está errando de músculo.
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-12">
                Se você já fez centenas de abdominais, passou horas na prancha e usou cinta modeladora todos os dias e a barriga continua projetada, não é falta de disciplina. É que esses métodos trabalham o músculo errado. E pior, estão ativamente piorando o problema.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ENEMY_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <GlowCard className="p-8">
                    <Icon className="text-primary size-8 mb-4" />
                    <h3 className="font-heading text-2xl text-foreground mb-3">{card.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.text}</p>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-primary text-center font-semibold text-lg mt-10">
              A solução não é mais esforço. É o músculo certo, ativado do jeito certo.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SEÇÃO MECANISMO */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag mb-6 inline-block">A CIÊNCIA POR TRÁS DO PROTOCOLO</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                O Transverso do Abdômen: a cinta natural que vai afinar sua cintura de dentro para fora
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-12">
                No centro do seu abdômen existe um músculo que envolve o tronco como uma faixa de compressão. Quando ativado corretamente, ele achata a barriga de dentro para fora, afina a cintura, estabiliza a coluna e melhora a postura automaticamente. Esse músculo se chama Transverso do Abdômen. E ele não responde ao abdominal tradicional. A técnica hipopressiva ativa esse músculo através de respiração controlada e postura específica, criando uma pressão negativa que faz o transverso trabalhar de forma reflexa. Com a prática de apenas 5 minutos por dia, o músculo aprende a se manter ativado ao longo de todo o dia.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {MECHANISM_STEPS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlowCard className="p-8 text-center">
                  <span className="font-heading text-6xl text-primary mb-2 block">{step.num}</span>
                  <h3 className="font-heading text-2xl text-foreground mb-3">{step.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{step.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO PARA QUEM É */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <span className="label-tag mb-6 inline-block">ISSO FOI FEITO PARA VOCÊ</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground">
                Não importa de onde você está começando
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mt-12">
            <ScrollReveal>
              <ul className="space-y-4">
                {FOR_WHO_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-primary size-5 flex-shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlowCard className="p-10 text-center border-2 border-primary/40 hover:shadow-[0_0_30px_hsl(347_78%_55%/0.3)]">
                <p className="font-body text-muted-foreground text-lg mb-4">
                  Qualquer mulher consegue fazer o protocolo e ter resultado
                </p>
                <p className="font-heading text-4xl text-primary">
                  menos 4 a 12cm de cintura em até 12 semanas
                </p>
              </GlowCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO RESULTADOS */}
      <section id="resultados" className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollReveal>
            <span className="label-tag mb-6 inline-block">RESULTADOS REAIS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Mulheres que transformaram a silhueta com o método hipopressivo
            </h2>
            <p className="text-muted-foreground text-sm mb-12">
              Resultados obtidos com a prática do método hipopressivo. Resultados individuais podem variar.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative px-12">
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {RESULT_IMAGES.map((src, i) => (
                    <CarouselItem key={i}>
                      <img
                        src={src}
                        alt={`Resultado antes e depois ${i + 1}`}
                        className="w-full h-auto rounded-xl object-contain max-h-[500px] mx-auto"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border-none bg-primary/30 hover:bg-primary/50 text-primary-foreground backdrop-blur-sm -left-6 h-10 w-10" />
                <CarouselNext className="border-none bg-primary/30 hover:bg-primary/50 text-primary-foreground backdrop-blur-sm -right-6 h-10 w-10" />
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEÇÃO MÓDULOS */}
      <section id="modulos" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag mb-6 inline-block">TUDO QUE ESTÁ INCLUÍDO</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
                Um protocolo clínico completo, simplificado para você aplicar em casa em 5 minutos por dia
              </h2>
              <p className="font-body text-muted-foreground">
                6 módulos progressivos mais 3 bônus exclusivos
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {MODULES.map((mod, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlowCard className="p-8 hover:border-b-2 hover:border-b-primary flex flex-col h-full">
                  <div className="w-full h-48 rounded-lg mb-4 bg-primary/10 flex items-center justify-center">
                    <p className="text-primary text-sm text-center p-4">Imagem do módulo</p>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-2">{mod.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{mod.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <h3 className="font-heading text-2xl text-center mt-16 mb-8 text-foreground">
              E ainda, 3 bônus exclusivos inclusos
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {BONUSES.map((bonus, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlowCard className="p-8 text-center">
                  <bonus.icon className="text-primary size-10 mx-auto mb-4" />
                  <h3 className="font-heading text-xl text-foreground mb-2">{bonus.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{bonus.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO AUTORIDADE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-1 bg-gradient-to-b from-primary/40 to-transparent rounded-2xl blur-md" />
                <div className="relative rounded-2xl bg-primary/10 min-h-[400px] w-full flex items-center justify-center">
                  <p className="text-primary text-sm text-center p-8">
                    Foto da Daly. Rosto olhando para a câmera. Fundo escuro.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="label-tag mb-6 inline-block">QUEM VAI TE GUIAR</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-2">Dalyane Barbosa</h2>
              <p className="font-body text-muted-foreground text-lg mb-4">
                Personal trainer certificada especialista em transformação feminina há mais de 10 anos
              </p>
              <p className="font-body text-muted-foreground mb-6">
                Dalyane Barbosa não criou mais um protocolo de exercícios. Ela criou o método que ela mesma queria ter tido acesso quando começou. Formada pela UFC e com pós-graduação em Fisiologia do Exercício e Prescrição de Treinamento, Daly passou anos observando o mesmo padrão se repetir: mulheres dedicadas, que treinavam com consistência, que faziam tudo certo e continuavam com a barriga projetada, as dores nas costas e a autoestima abalada. A resposta estava no músculo que ninguém estava treinando. O Protocolo Hipopressivo Team Daly nasceu disso.
              </p>
              <div className="flex flex-wrap gap-3">
                {AUTHORITY_BADGES.map((badge, i) => (
                  <span key={i} className="border border-primary/40 text-primary text-sm px-4 py-2 rounded-full font-body">
                    {badge}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEÇÃO OFERTA */}
      <section id="investimento" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label-tag mb-6 inline-block">INVESTIMENTO</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Comece sua transformação hoje
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto">
                Uma sessão presencial de personal trainer custa em média R$120,00. Uma cirurgia para tratar problemas abdominais custa entre R$10.000 e R$20.000. Uma anuidade de academia custa em torno de R$1.200 e não resolve a barriga projetada.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl overflow-hidden border-t-4 border-t-primary">
              <div className="p-8 text-center">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  OFERTA POR TEMPO LIMITADO
                </span>
                <h3 className="font-heading text-3xl text-foreground mb-1">Protocolo Hipopressivo Team Daly</h3>
                <p className="text-muted-foreground line-through text-lg">R$ 297,00</p>
                <p className="font-heading text-6xl text-primary my-2">R$ 129,90</p>
                <p className="text-muted-foreground text-sm mb-6">ou 3x de R$ 46,27 sem juros</p>

                <ul className="text-left space-y-3 mb-8">
                  {OFFER_ITEMS.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="text-primary size-5 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <button className="w-full bg-primary text-primary-foreground font-heading text-2xl py-4 rounded-lg cta-pulse hover:shadow-[0_0_25px_hsl(347_78%_55%/0.7)] transition-shadow">
                    QUERO COMEÇAR MINHA TRANSFORMAÇÃO
                  </button>
                </a>
                <p className="text-primary font-body text-sm font-semibold mt-3">🔒 Compra Segura</p>
              </div>
              <div className="bg-secondary/50 px-8 py-4 text-center">
                <p className="text-sm text-muted-foreground font-body">
                  Garantia de 7 dias — Se em 7 dias você não ficar satisfeita, devolvemos 100% do seu dinheiro.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEÇÃO FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label-tag mb-6 inline-block">DÚVIDAS FREQUENTES</span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground">Perguntas Frequentes</h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-3">
            <Accordion type="single" collapsible>
              {FAQ_ITEMS.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <AccordionItem value={`faq-${i}`} className="bg-secondary border border-border rounded-lg px-6 mb-3">
                    <AccordionTrigger className="font-body text-sm text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollReveal>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, hsl(0 0% 5.1%), hsl(347 100% 3%))" }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
              CHEGA DE BARRIGA PROJETADA. O MOMENTO É AGORA.
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              5 minutos por dia. 12 semanas. Até 12cm de cintura. Sem abdominal. Sem dieta.
            </p>
            <a href="#investimento">
              <button className="bg-primary text-primary-foreground font-heading text-2xl px-12 py-5 rounded-lg cta-pulse hover:shadow-[0_0_25px_hsl(347_78%_55%/0.7)] transition-shadow">
                QUERO COMEÇAR MINHA TRANSFORMAÇÃO
              </button>
            </a>
            <p className="text-muted-foreground text-sm mt-6">
              Pagamento seguro. Garantia de 7 dias. Acesso imediato.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-surface-dark py-8 text-center">
        <p className="font-heading text-primary text-lg opacity-60 mb-4">
          Protocolo Hipopressivo Team Daly
        </p>
        <p className="font-body text-muted-foreground text-xs">
          © 2025 Protocolo Hipopressivo Team Daly por Dalyane Barbosa. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Hipopressivo;
