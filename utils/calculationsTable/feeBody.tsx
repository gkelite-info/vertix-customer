"use client";

import { useState, useEffect } from "react";

type FeeSummaryBodyProps = {
  data: {
    id: number;
    description: string;
    baseFee: number;
  }[];
  onTotalChange: (total: number) => void;
};

export default function FeeSummaryBody({ data, onTotalChange }: FeeSummaryBodyProps) {
  const [statusValues, setStatusValues] = useState<Record<number, number>>({});
  const [feeValues, setFeeValues] = useState<Record<number, number>>({});

  const handleStatusChange = (id: number, value: number) => {
    setStatusValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleFeeChange = (id: number, value: number) => {
    setFeeValues((prev) => ({ ...prev, [id]: value }));
  };

  const calculateRowTotal = (id: number) => {
    const multiplier = statusValues[id] || 0;
    const fee = feeValues[id] || 0;
    return multiplier * fee;
  };

  const calculateTotal = () => {
    return data.reduce((acc, item) => acc + calculateRowTotal(item.id), 0);
  };

  useEffect(() => {
    onTotalChange(calculateTotal());
  }, [statusValues, feeValues]);

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="text-[#1D2B48] bg-[#C7C7C7] text-center">
          <td className="border border-gray-300 text-xs px-4 py-2">{item.description}</td>

          <td className="border border-gray-300 text-xs px-4 py-2">
            <select
              value={statusValues[item.id] || 0}
              onChange={(e) => handleStatusChange(item.id, Number(e.target.value))}
              className="border border-gray-400 rounded px-2 py-1 text-sm bg-white text-[#2F3F5F]"
            >
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </td>

          <td className="border border-gray-300 text-xs px-4 py-2">
            <input
              type="number"
              value={feeValues[item.id] || ""}
              onChange={(e) => handleFeeChange(item.id, Number(e.target.value))}
              className="border border-gray-400 rounded px-2 py-1 text-sm w-24 text-center text-[#2F3F5F] focus:outline-none"
              placeholder="Enter Fee"
            />
          </td>

          <td className="border border-gray-300 text-xs px-4 py-2 font-medium">
            ${calculateRowTotal(item.id).toFixed(2)}
          </td>
        </tr>
      ))}
    </tbody>
  );
}
