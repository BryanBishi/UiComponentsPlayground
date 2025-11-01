import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface ComponentShowcaseProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
}

export const ComponentShowcase = ({
  title,
  description,
  children,
  code,
}: ComponentShowcaseProps) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-effect rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(0,217,255,0.1)] transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <button
          onClick={copyCode}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors group"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-5 h-5 text-primary" />
          ) : (
            <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </button>
      </div>

      <div className="mt-6 p-6 bg-background/50 rounded-xl border border-border/50">
        {children}
      </div>
    </div>
  );
};
