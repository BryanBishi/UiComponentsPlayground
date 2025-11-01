import { ComponentShowcase } from "@/components/showcase/ComponentShowcase";
import { AnimatedButtons } from "@/components/showcase/AnimatedButtons";
import { GlassmorphismCard } from "@/components/showcase/GlassmorphismCard";
import { ToggleSwitch } from "@/components/showcase/ToggleSwitch";
import { ModalDemo } from "@/components/showcase/ModalDemo";
import { ProgressBar } from "@/components/showcase/ProgressBar";
import { AnimatedInput } from "@/components/showcase/AnimatedInput";
import { Sparkles, Code2, Palette } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse-glow" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-slide-up"> */}
              {/* <Sparkles className="w-4 h-4 text-primary" /> */}
              {/* <span className="text-sm text-foreground">Premium UI Components</span> */}
            {/* </div> */}
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
               Beautiful
              <span className="block bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">
                Interactive Interfaces
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              A curated collection of handcrafted UI components built with React, showcasing clean architecture, smooth animations, and modern design patterns.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up">
              <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl">
                <Palette className="w-5 h-5 text-secondary" />
                <span className="text-sm text-foreground">Beautiful Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 glass-effect rounded-xl">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Smooth Animations</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ComponentShowcase
            title="Animated Buttons"
            description="Buttons with gradient, ripple, glow, and icon animations"
            code={`<button className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform">
  Click Me
</button>`}
          >
            <AnimatedButtons />
          </ComponentShowcase>

          <ComponentShowcase
            title="Toggle Switch"
            description="Smooth toggle switches with various styles and animations"
            code={`<button className="relative w-14 h-7 rounded-full transition-all bg-primary">
  <div className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-all translate-x-7" />
</button>`}
          >
            <ToggleSwitch />
          </ComponentShowcase>

          <ComponentShowcase
            title="Glassmorphism Cards"
            description="Cards with backdrop blur, transparency, and hover effects"
            code={`<div className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all">
  <h3>Card Title</h3>
  <p>Beautiful glassmorphism effect</p>
</div>`}
          >
            <GlassmorphismCard />
          </ComponentShowcase>

          <ComponentShowcase
            title="Modal & Toast"
            description="Overlay components with smooth entrance animations"
            code={`<div className="fixed inset-0 z-50 flex items-center justify-center animate-in fade-in">
  <div className="glass-effect rounded-2xl p-6">
    Modal Content
  </div>
</div>`}
          >
            <ModalDemo />
          </ComponentShowcase>

          <ComponentShowcase
            title="Progress Bars"
            description="Linear and circular progress indicators with gradients"
            code={`<div className="h-2 bg-muted rounded-full overflow-hidden">
  <div className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all" style={{ width: '75%' }} />
</div>`}
          >
            <ProgressBar />
          </ComponentShowcase>

          <ComponentShowcase
            title="Animated Inputs"
            description="Input fields with floating labels and focus effects"
            code={`<div className="relative">
  <input className="w-full px-4 pt-6 pb-2 rounded-xl focus:border-primary transition-all" />
  <label className="absolute left-4 top-2 text-xs text-primary">Label</label>
</div>`}
          >
            <AnimatedInput />
          </ComponentShowcase>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            {/* <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to build something amazing?
            </h2> */}
            <p className="text-muted-foreground mb-6">
              All components are built with React, TypeScript, and Tailwind CSS. Copy the code and customize to your needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/BryanBishi/UiComponentsPlayground"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform inline-block"
              >
                View on GitHub
              </a>
              {/* <button className="px-6 py-3 rounded-xl font-semibold bg-card text-foreground border border-border hover:border-primary hover:scale-105 transition-all">
                Read Documentation
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
