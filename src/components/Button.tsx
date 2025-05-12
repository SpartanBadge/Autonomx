import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', className = '', onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium tracking-wide transition-all duration-300 relative overflow-hidden";
  const variants = {
    primary: "bg-primary-glow text-white hover:bg-primary-glow/80",
    secondary: "bg-transparent border-2 border-white text-white hover:border-primary-glow"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};