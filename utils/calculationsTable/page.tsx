"use client";

import { useState } from "react";
import FeeSummaryBody from "./feeBody";
import FeeSummaryTotals from "./feeSummaryTotal";

type FeeSummaryTableProps = {
  data: {
    id: number;
    description: string;
    baseFee: number;
    noStatus?: boolean;
  }[];
  onTotalsChange: (values: {
    totalFee: number;
    discount: number;
    referral: number;
    feePaid: number;
    dueAmount: number;
    code: string;
    netFee: number;
  }) => void;
  onDataChange: (
    updatedRows: {
      id: number;
      description: string;
      baseFee: number;
      noStatus?: boolean;
      status?: number | null;
      total?: number;
      fee?: number;
    }[]
  ) => void;
};

export default function FeeSummaryTable({ data, onTotalsChange, onDataChange }: FeeSummaryTableProps) {
  const [total, setTotal] = useState(0);

  return (
    <div className="flex flex-col items-center justify-start w-[65%]">
      <table className="border-collapse border border-gray-400 w-full mt-3">
        <thead>
          <tr className="text-[#1D2B48] text-xs text-center">
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Fee</th>
            <th className="border border-gray-300 px-4 py-2">Total</th>
          </tr>
        </thead>

        <FeeSummaryBody
          data={data}
          onTotalChange={setTotal}
          onDataChange={onDataChange}
        />
      </table>

      <FeeSummaryTotals total={total} onTotalsChange={onTotalsChange} />
    </div>
  );
}
