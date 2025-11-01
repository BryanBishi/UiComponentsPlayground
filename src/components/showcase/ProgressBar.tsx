import { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress2((prev) => {
        const next = prev + Math.random() * 10;
        return next >= 100 ? 0 : next;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Progress Bar 1 - Linear */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground font-medium">Linear Progress</span>
          <span className="text-muted-foreground">{Math.round(progress1)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-300 rounded-full"
            style={{ width: `${progress1}%` }}
          />
        </div>
      </div>

      {/* Progress Bar 2 - With Glow */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground font-medium">Glowing Progress</span>
          <span className="text-muted-foreground">{Math.round(progress2)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary transition-all duration-300 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            style={{ width: `${progress2}%` }}
          />
        </div>
      </div>

      {/* Progress Bar 3 - Striped */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground font-medium">Striped Progress</span>
          <span className="text-muted-foreground">75%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative overflow-hidden"
            style={{ width: "75%" }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.2)_75%,rgba(255,255,255,.2))] bg-[length:1rem_1rem] animate-[shimmer_1s_linear_infinite]" />
          </div>
        </div>
      </div>

      {/* Circular Progress */}
      <div className="flex justify-center">
        <div className="relative w-24 h-24">
          <svg className="transform -rotate-90 w-24 h-24">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="hsl(var(--muted))"
              strokeWidth="6"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="hsl(var(--primary))"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress1 / 100)}`}
              className="transition-all duration-300"
              style={{ filter: "drop-shadow(0 0 8px hsl(var(--primary)))" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-foreground">{Math.round(progress1)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
