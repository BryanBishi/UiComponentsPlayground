import { useState } from "react";
import { Bell, Moon, Wifi } from "lucide-react";
import { toast } from "sonner";

export const ToggleSwitch = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  const handleNotifications = () => {
    setNotifications(!notifications);
    toast.success(
      notifications ? "Notifications disabled" : "Notifications enabled"
    );
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    toast.success(darkMode ? "Light mode activated" : "Dark mode activated");
  };

  const handleAutoSave = () => {
    setAutoSave(!autoSave);
    toast.success(autoSave ? "Auto-save disabled" : "Auto-save enabled");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Notifications Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="w-5 h-5 text-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Notifications</p>
            <p className="text-xs text-muted-foreground">Receive push notifications</p>
          </div>
        </div>
        <button
          onClick={handleNotifications}
          className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
            notifications ? "bg-primary shadow-[0_0_20px_rgba(0,217,255,0.4)]" : "bg-muted"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-all duration-300 shadow-lg ${
              notifications ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Moon className="w-5 h-5 text-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Dark Mode</p>
            <p className="text-xs text-muted-foreground">Toggle theme appearance</p>
          </div>
        </div>
        <button
          onClick={handleDarkMode}
          className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
            darkMode ? "bg-secondary shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "bg-muted"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-all duration-300 shadow-lg ${
              darkMode ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Auto-save Toggle with Labels */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wifi className="w-5 h-5 text-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">Auto-save</p>
            <p className="text-xs text-muted-foreground">Automatically save changes</p>
          </div>
        </div>
        <button
          onClick={handleAutoSave}
          className={`relative w-20 h-7 rounded-full transition-all duration-300 ${
            autoSave ? "bg-primary" : "bg-muted"
          }`}
        >
          <span
            className={`absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity ${
              autoSave ? "opacity-100 text-primary-foreground" : "opacity-0"
            }`}
          >
            ON
          </span>
          <span
            className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold transition-opacity ${
              !autoSave ? "opacity-100 text-muted-foreground" : "opacity-0"
            }`}
          >
            OFF
          </span>
          <div
            className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-all duration-300 shadow-lg ${
              autoSave ? "translate-x-[3.25rem]" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
};
