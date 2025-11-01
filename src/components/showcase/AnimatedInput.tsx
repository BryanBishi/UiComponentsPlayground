import { useState } from "react";
import { Mail, Lock, User, Search } from "lucide-react";

export const AnimatedInput = () => {
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="flex flex-col gap-6">
      {/* Floating Label Input */}
      <div className="relative">
        <input
          type="email"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          onFocus={() => setFocused1(true)}
          onBlur={() => setFocused1(false)}
          className="w-full px-4 pt-6 pb-2 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focused1 || value1
              ? "top-2 text-xs text-primary"
              : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
          }`}
        >
          Email Address
        </label>
        <Mail className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
          focused1 ? "text-primary" : "text-muted-foreground"
        }`} />
      </div>

      {/* Floating Label Input - Password */}
      <div className="relative">
        <input
          type="password"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          onFocus={() => setFocused2(true)}
          onBlur={() => setFocused2(false)}
          className="w-full px-4 pt-6 pb-2 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:border-secondary transition-all duration-300 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focused2 || value2
              ? "top-2 text-xs text-secondary"
              : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
          }`}
        >
          Password
        </label>
        <Lock className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${
          focused2 ? "text-secondary" : "text-muted-foreground"
        }`} />
      </div>

      {/* Standard Input with Icon */}
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Username"
          className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
        />
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search components..."
          className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,217,255,0.2)]"
        />
      </div>
    </div>
  );
};
