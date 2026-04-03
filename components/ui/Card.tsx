import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Componente Card
 * Card reutilizável com animações e estilos consistentes
 */
export default function Card({ children, className }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3 }}
      className={`bg-background p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 ${
        className || ""
      }`}
    >
      {children}
    </motion.div>
  );
}