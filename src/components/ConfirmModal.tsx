import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  isAlert?: boolean;
}

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isAlert = false,
}: ConfirmModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={isAlert ? onConfirm : onCancel}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="bg-[var(--color-bg-panel)] border border-[var(--color-border-color)] rounded-[var(--radius-app)] p-6 max-w-sm w-full relative z-10 shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{title}</h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-6 leading-relaxed">
              {message}
            </p>
            <div className="flex gap-3 justify-end">
              {!isAlert && (
                <button
                  className="liquid-btn"
                  onClick={onCancel}
                >
                  {cancelText}
                </button>
              )}
              <button
                className={`liquid-btn ${isAlert ? 'active-mode' : 'danger-btn'}`}
                onClick={onConfirm}
              >
                {isAlert ? 'OK' : confirmText}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
