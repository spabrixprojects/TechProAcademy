import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in the Mobile Technician Course. Please share more details.");
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-4"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="bg-white text-foreground px-4 py-2 rounded-xl shadow-lg border border-border text-sm font-medium whitespace-nowrap hidden sm:block"
          >
            Chat with us on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={handleClick}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping group-hover:animate-none" />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </motion.button>
    </motion.div>
  );
}
