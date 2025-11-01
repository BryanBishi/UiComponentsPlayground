import { useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showToast = () => {
    toast.success("Success!", {
      description: "This is a beautiful toast notification.",
      icon: <CheckCircle className="w-5 h-5" />,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform"
      >
        Open Modal
      </button>

      <button
        onClick={showToast}
        className="px-6 py-3 rounded-xl font-semibold bg-secondary text-white hover:scale-105 transition-transform"
      >
        Show Toast
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative glass-effect rounded-2xl p-6 max-w-md w-full animate-in slide-in-from-bottom-4 duration-300 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2">Modal Title</h2>
              <p className="text-muted-foreground">
                This is a beautiful modal with glassmorphism effect and smooth animations.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  showToast();
                }}
                className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
