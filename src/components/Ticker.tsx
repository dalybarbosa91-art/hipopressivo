const CTA_LINK = "https://pay.kiwify.com.br/5mIQ0ua";

const TICKER_ITEMS = [
  "Protocolo criado por personal trainer certificada",
  "Apenas 5 minutos por dia",
  "Ate 12cm de cintura em 12 semanas",
  "Sem abdominal e sem dieta restritiva",
  "Garantia incondicional de 7 dias",
];

const Ticker = () => (
  <div className="bg-primary overflow-hidden py-3">
    <div className="ticker-scroll flex whitespace-nowrap">
      {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span key={i} className="mx-8 text-sm font-semibold text-primary-foreground uppercase tracking-wide">
          {item} <span className="mx-4 opacity-50">|</span>
        </span>
      ))}
    </div>
  </div>
);

export { CTA_LINK };
export default Ticker;
