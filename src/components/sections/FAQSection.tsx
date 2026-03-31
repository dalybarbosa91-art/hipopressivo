import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  { q: "Preciso de algum equipamento?", a: "Nao. O protocolo e feito com tecnica de respiracao e postura. Voce precisa apenas de um espaco de 2m² e um tapete ou superficie confortavel." },
  { q: "Quanto tempo por dia preciso dedicar?", a: "Apenas 5 minutos por dia nos 6 dias de pratica focada, mais uma sessao de 20 a 30 minutos uma vez por semana." },
  { q: "Funciona para qualquer nivel de condicionamento?", a: "Sim. O protocolo comeca do zero com os fundamentos da tecnica. Nao e necessaria nenhuma experiencia previa." },
  { q: "Tenho diastase abdominal. Posso fazer?", a: "O hipopressivo reduz a pressao intra-abdominal e e frequentemente indicado como parte da reabilitacao da diastase. Recomendamos informar seu medico ou fisioterapeuta antes de iniciar caso tenha diagnostico confirmado." },
  { q: "Tem alguma contraindicacao?", a: "Sim. O protocolo e contraindicado para gestantes e pessoas com hipertensao arterial. Em caso de qualquer condicao de saude previa, consulte seu medico antes de iniciar." },
  { q: "Em quanto tempo vou ver resultado?", a: "As primeiras mudancas na ativacao muscular e na postura sao percebidas nas primeiras 2 a 3 semanas. Resultados visuais na cintura sao mais evidentes a partir da semana 6, com resultados significativos ao completar as 12 semanas." },
  { q: "Por quanto tempo terei acesso?", a: "O acesso ao protocolo e por 12 meses a partir da data da compra." },
];

const FAQSection = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <ScrollReveal>
        <span className="label-tag mb-6 inline-block">DUVIDAS FREQUENTES</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
          Perguntas Frequentes
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-secondary border border-border rounded-xl px-6">
              <AccordionTrigger className="text-foreground font-semibold text-left hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
