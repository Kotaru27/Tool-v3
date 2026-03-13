import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
  progress?: number;
}

export default function LoadingOverlay({ isVisible, message = 'Processing...', progress }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 backdrop-blur-sm rounded-[var(--radius-app)]"
        >
          <div className="flex flex-col items-center gap-4 p-8 bg-[var(--color-bg-panel)] border border-[var(--color-border-color)] rounded-xl shadow-2xl min-w-[280px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <Loader2 className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex flex-col items-center gap-2 w-full">
              <p className="text-sm font-medium text-white tracking-wide text-center">{message}</p>
              {progress !== undefined && (
                <div className="w-full h-1.5 bg-[#262626] rounded-full overflow-hidden mt-2">
                  <motion.div 
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
