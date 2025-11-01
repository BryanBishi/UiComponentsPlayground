import { useState } from "react";
import { Download, Share2, Heart, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export const AnimatedButtons = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const [liked, setLiked] = useState(false);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  const handleDownload = () => {
    toast.success("Download started!", {
      description: "Your file will be ready in a moment.",
    });
  };

  const handleShare = () => {
    toast.success("Link copied!", {
      description: "Share link copied to clipboard.",
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed from favorites" : "Added to favorites!");
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    toast.success("Added to cart!", {
      description: "Item added successfully.",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Download Button - Gradient */}
      <button 
        onClick={handleDownload}
        className="relative px-6 py-3 rounded-xl font-semibold text-white overflow-hidden group transition-transform hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-400 transition-opacity group-hover:opacity-90" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Download File
        </span>
      </button>

      {/* Add to Cart - Ripple Button */}
      <button
        onClick={handleAddToCart}
        className="relative px-6 py-3 rounded-xl font-semibold bg-secondary text-white overflow-hidden transition-transform hover:scale-105"
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ping"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
            }}
          />
        ))}
        <span className="relative z-10 flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </span>
      </button>

      {/* Share Button - Glow */}
      <button 
        onClick={handleShare}
        className="px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] hover:scale-105 flex items-center justify-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share
      </button>

      {/* Like Button - Icon Animate */}
      <button 
        onClick={handleLike}
        className="group relative px-6 py-3 rounded-xl font-semibold bg-card text-foreground border border-border overflow-hidden transition-all hover:border-primary hover:scale-105"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <Heart 
            className={`w-4 h-4 transition-all group-hover:scale-110 ${liked ? 'fill-red-500 text-red-500' : ''}`}
          />
          {liked ? 'Liked' : 'Like'}
        </span>
      </button>
    </div>
  );
};
