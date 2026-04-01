import { useRef, useState, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/50 ${className}`}
      style={{
        background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, hsl(347 78% 55% / 0.08), hsl(0 0% 7.8%) 70%)`,
      }}
    >
      {children}
    </div>
  );
};

export default GlowCard;
