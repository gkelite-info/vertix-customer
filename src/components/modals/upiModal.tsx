"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, MouseEvent } from "react";

type UPIModalProps = {
  isOpen: boolean;
  onConfirm: (upiId: string, transactionId: string) => void;
  onCancel: () => void;
};

export default function UPIModal({ isOpen, onConfirm, onCancel }: UPIModalProps) {

  const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackgroundClick}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl p-6 w-[90%] sm:w-[400px] text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-semibold text-lg text-gray-800 mb-4">
              UPI ID
            </h2>

            <div className="flex flex-col gap-4 text-left">
              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Pay to
                </label>
                <div className="w-full mt-1 px-3 py-2 border text-[#1D2B48] text-sm border-gray-300 rounded-lg focus:outline-none">
                  <span className="font-semibold">vertixtax@ybl</span>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#ef4444",
                    marginTop: "6px",
                  }}
                >
                  Note: Share your payment receipt to WhatsApp or Email.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
