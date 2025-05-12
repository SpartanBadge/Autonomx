import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedHeadline = ({ children, className = '', delay = 0 }: AnimatedHeadlineProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};