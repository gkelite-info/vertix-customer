"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, MouseEvent } from "react";

type UPIModalProps = {
  isOpen: boolean;
  onConfirm: (upiId: string, transactionId: string) => void;
  onCancel: () => void;
};

export default function UPIModal({ isOpen, onConfirm, onCancel }: UPIModalProps) {
  const [upiId, setUpiId] = useState("");
  const [transactionId, setTransactionId] = useState("");

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
              UPI Payment
            </h2>

            <div className="flex flex-col gap-4 text-left">
              <div>
                <label className="text-gray-700 text-sm font-medium">
                  UPI ID
                </label>
                <input
                  type="text"
                  placeholder="Enter UPI ID"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border text-[#1D2B48] text-sm border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <label className="text-gray-700 text-sm font-medium">
                  Transaction ID
                </label>
                <input
                  type="text"
                  placeholder="Enter transaction ID"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full mt-1 px-3 py-2 text-[#1D2B48] text-sm border border-gray-300 rounded-lg focus:outline-none"
                />

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

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => onConfirm(upiId, transactionId)}
                className="bg-[#1D2B48] cursor-pointer text-sm text-white font-medium px-6 py-2 rounded-md transition duration-200"
              >
                Submit
              </button>
              <button
                onClick={onCancel}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-sm text-gray-800 font-medium px-6 py-2 rounded-md transition duration-200"
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
