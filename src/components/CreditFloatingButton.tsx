import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard } from "lucide-react";
import { creditSimulatorContent as cms } from "@/lib/content/credit-simulator";

interface CreditFloatingButtonProps {
  onClick: () => void;
}

const CreditFloatingButton = ({ onClick }: CreditFloatingButtonProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-24 left-6 z-50 flex items-center gap-2 bg-accent text-accent-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
      aria-label={cms.floatingButton.label}
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent group-hover:bg-accent/90 transition-colors">
        <CreditCard size={20} className="group-hover:scale-110 transition-transform" />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="overflow-hidden whitespace-nowrap text-xs font-body font-semibold uppercase tracking-wider pr-5"
          >
            {cms.floatingButton.label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CreditFloatingButton;
