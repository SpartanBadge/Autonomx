import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from './Button';
import { usePageTranslation } from '../hooks/usePageTranslation';

interface DemoCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoCallModal = ({ isOpen, onClose }: DemoCallModalProps) => {
  const { t } = usePageTranslation('aiPhoneCaller');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gradient-to-br from-black/90 to-black/70 p-8 rounded-2xl border border-primary-glow/20 max-w-lg w-full relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-glow/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary-glow" />
            </div>

            <h2 className="text-2xl font-bold mb-4">{t('Demo Call')}</h2>
            
            <p className="text-lg text-gray-300 mb-6">
              Thank you for trying our AI Assistant!
            </p>
            
            <div className="space-y-4 w-full">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-gray-400">What's next?</p>
                <p className="text-white">Our AI Assistant will call you within the next few minutes to demonstrate the power of AI.</p>
              </div>
            </div>

            <Button
              variant="secondary"
              onClick={onClose}
              className="mt-8"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};