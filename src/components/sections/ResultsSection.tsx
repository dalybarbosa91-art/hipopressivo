import ScrollReveal from "@/components/ScrollReveal";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const IMAGES = [
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

      <ScrollReveal delay={0.1}>
        <div className="relative px-12">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {IMAGES.map((src, i) => (
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
);

export default ResultsSection;
