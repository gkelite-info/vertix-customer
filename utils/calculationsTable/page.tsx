"use client";

import { useState } from "react";
import FeeSummaryBody from "./feeBody";
import FeeSummaryTotals from "./feeSummaryTotal";

type FeeSummaryTableProps = {
  data: {
    id: number;
    description: string;
    baseFee: number;
  }[];
};

const sampleData = [
  { id: 1, description: "Federal 1040", baseFee: 100 },
  { id: 2, description: "Federal 1040 NR", baseFee: 50 },
  { id: 3, description: "States", baseFee: 25 },
  { id: 4, description: "Local", baseFee: 10 },
  { id: 5, description: "SCH A", baseFee: 10 },
  { id: 6, description: "SCH B", baseFee: 10 },
  { id: 7, description: "SCH C", baseFee: 10 },
  { id: 8, description: "SCH D", baseFee: 10 },
  { id: 9, description: "SCH E", baseFee: 10 },
  { id: 10, description: "SCH E", baseFee: 10 },
  { id: 11, description: "SCH E", baseFee: 10 },
  { id: 12, description: "SCH E", baseFee: 10 },
  { id: 13, description: "SCH E", baseFee: 10 },
  { id: 14, description: "SCH E", baseFee: 10 },
];

export default function FeeSummaryTable({ data }: FeeSummaryTableProps) {
  const [total, setTotal] = useState(0);

  return (
    <div className="flex flex-col items-center justify-start">
      <table className="border-collapse border border-gray-400 w-[80%] mt-3">
        <thead>
          <tr className="bg-[#4B5873] text-white text-xs text-center">
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Fee</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>
        <FeeSummaryBody data={sampleData} onTotalChange={setTotal} />
      </table>

      <FeeSummaryTotals total={total} />
    </div>
  );
}
