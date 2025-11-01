import { Sparkles, Zap, Star } from "lucide-react";

export const GlassmorphismCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Card 1 */}
      <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,217,255,0.2)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Premium Feature</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Elegant glassmorphism effect with smooth hover transitions and subtle glow.
        </p>
      </div>

      {/* Card 2 */}
      <div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-secondary/20">
            <Zap className="w-5 h-5 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Fast Performance</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Backdrop blur with layered transparency creates depth and visual hierarchy.
        </p>
      </div>

      {/* Card 3 - Spanning */}
      <div className="glass-effect rounded-2xl p-6 md:col-span-2 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,217,255,0.15)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
            <Star className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Wide Card Layout</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Perfect for featured content or highlighted information with beautiful gradient accents and glass morphism effects.
        </p>
      </div>
    </div>
  );
};
