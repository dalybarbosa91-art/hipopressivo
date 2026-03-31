import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_LINK } from "@/components/Ticker";

const NAV_LINKS = [
  { label: "O Protocolo", href: "#protocolo" },
  { label: "O Problema", href: "#problema" },
  { label: "O Que Voce Recebe", href: "#modulos" },
  { label: "Investimento", href: "#investimento" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-lg text-foreground tracking-wide">
          Protocolo Hipopressivo <span className="text-primary">Team Daly</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <Button variant="cta" size="sm">Quero Comecar</Button>
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="block mt-2">
            <Button variant="cta" className="w-full">Quero Comecar</Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
