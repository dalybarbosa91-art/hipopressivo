import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className }: GlowCardProps) => (
  <div className={cn("glow-card p-6", className)}>
    {children}
  </div>
);

export default GlowCard;
