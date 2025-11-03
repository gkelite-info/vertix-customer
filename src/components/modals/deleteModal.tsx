'use client';

import { motion, AnimatePresence } from "framer-motion";

type DeleteModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function DeleteModal({ isOpen, onConfirm, onCancel }: DeleteModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] sm:w-[400px] text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-semibold text-lg text-gray-800 mb-4">
              Are you sure you want to delete?
            </h2>
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={onConfirm}
                className="bg-red-500 cursor-pointer hover:bg-red-600 text-sm text-white font-medium px-6 py-2 rounded-full transition duration-200"
              >
                Yes, Delete
              </button>
              <button
                onClick={onCancel}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-sm text-gray-800 font-medium px-6 py-2 rounded-full transition duration-200"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
