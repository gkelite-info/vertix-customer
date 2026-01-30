"use client";

import { useState, useEffect } from "react";

type FeeSummaryRow = {
  id: number;
  description: string;
  baseFee: number;
  noStatus?: boolean;
  status?: number | null;
  total?: number;
  fee?: number;
};

type FeeSummaryBodyProps = {
  data: FeeSummaryRow[];
  onTotalChange: (total: number) => void;
  onDataChange: (updatedRows: FeeSummaryRow[]) => void;
};

export default function FeeSummaryBody({
  data,
  onTotalChange,
  onDataChange,
}: FeeSummaryBodyProps) {

  useEffect(() => {
    const initialStatus: Record<number, number> = {};
    const initialFee: Record<number, number> = {};

    data.forEach((row) => {
      if (!row.noStatus && row.status != null) {
        initialStatus[row.id] = row.status;
      }

      if (row.fee != null) {
        initialFee[row.id] = row.fee;
      } else {
        initialFee[row.id] = row.baseFee;
      }
    });

    setStatusValues(initialStatus);
    setFeeValues(initialFee);
  }, [data]);

  const [statusValues, setStatusValues] = useState<Record<number, number>>({});
  const [feeValues, setFeeValues] = useState<Record<number, number>>({});

  const handleStatusChange = (id: number, value: number) => {
    setStatusValues((prev) => ({ ...prev, [id]: value }));

    if (value === 0) {
      setFeeValues((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    } else {
      const baseFee = data.find((item) => item.id === id)?.baseFee || 0;
      setFeeValues((prev) => ({
        ...prev,
        [id]: prev[id] || baseFee,
      }));
    }
  };

  const handleFeeChange = (id: number, value: number) => {
    setFeeValues((prev) => ({ ...prev, [id]: value }));
  };

  const calculateRowTotal = (id: number, noStatus?: boolean) => {
    const multiplier = noStatus ? 1 : statusValues[id] || 0;
    const fee = feeValues[id] || 0;
    return multiplier * fee;
  };

  const calculateTotal = () => {
    return data.reduce(
      (acc, item) => acc + calculateRowTotal(item.id, item.noStatus),
      0
    );
  };

  useEffect(() => {
    const total = calculateTotal();
    onTotalChange(total);

    const updatedRows = data.map((item) => ({
      ...item,
      status: item.noStatus ? null : statusValues[item.id] ?? null,
      fee: feeValues[item.id] ?? item.baseFee,
      total: calculateRowTotal(item.id, item.noStatus),
    }));

    onDataChange(updatedRows);
  }, [statusValues, feeValues, data]);

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id} className="text-[#1D2B48] text-center">
          {item.noStatus ? (
            <>
              <td
                colSpan={2}
                className="border border-gray-300 text-xs px-4 py-2 font-medium text-left"
              >
                {item.description}
              </td>

              <td className="border border-gray-300 text-xs py-2">
                <input
                  type="number"
                  value={feeValues[item.id] || ""}
                  onChange={(e) =>
                    handleFeeChange(item.id, Number(e.target.value))
                  }
                  className="border border-gray-400 rounded px-2 py-1 text-sm w-25 text-center text-[#2F3F5F] focus:outline-none"
                  placeholder="Enter Fee"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              </td>

              <td className="border border-gray-300 text-xs px-4 py-2 font-medium">
                {(feeValues[item.id] || 0).toFixed(2)}
              </td>
            </>
          ) : (
            <>
              <td className="border border-gray-300 text-xs px-4 py-2">
                {item.description}
              </td>

              <td className="border border-gray-300 text-xs px-4 py-2">
                <select
                  value={statusValues[item.id] || 0}
                  onChange={(e) =>
                    handleStatusChange(item.id, Number(e.target.value))
                  }
                  className="border border-gray-400 rounded px-2 py-1 text-sm bg-white text-[#2F3F5F] focus:outline-none"
                >
                  {Array.from({ length: 11 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </td>

              <td className="border border-gray-300 text-xs py-2">
                <input
                  type="number"
                  value={feeValues[item.id] || ""}
                  onChange={(e) =>
                    handleFeeChange(item.id, Number(e.target.value))
                  }
                  className="border border-gray-400 rounded px-2 py-1 text-sm w-25 text-center text-[#2F3F5F] focus:outline-none"
                  placeholder="Enter Fee"
                  onWheel={(e) => e.currentTarget.blur()}
                />
              </td>

              <td className="border border-gray-300 text-xs px-4 py-2 font-medium">
                {calculateRowTotal(item.id).toFixed(2)}
              </td>
            </>
          )}
        </tr>
      ))}
    </tbody>
  );
}
