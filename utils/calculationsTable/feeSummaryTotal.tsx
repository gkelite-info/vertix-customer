"use client";

import { useState, useEffect } from "react";

type FeeSummaryTotalsProps = {
  total: number;
  discount?: number;
  referral?: number;
  feePaid?: number;
  code?: string;
  netFee?: number;
  dueAmount?: number;
  width?: string;

  onTotalsChange: (values: {
    totalFee: number;
    discount: number;
    referral: number;
    feePaid: number;
    dueAmount: number;
    code: string;
    netFee: number;
  }) => void;

  readOnly?: boolean;
  showCodeRow?: boolean;
};


type NumberRow = {
  type: "number";
  label: string;
  value: number;
  onChange?: (val: number) => void;
};

type TextRow = {
  type: "text";
  label: string;
  value: string;
  onChange: (val: string) => void;
};

type Row = NumberRow | TextRow;

export default function FeeSummaryTotals({
  total,
  discount: initialDiscount = 0,
  referral: initialReferral = 0,
  feePaid: initialFeePaid = 0,
  code: initialCode = "",
  netFee: initialNetFee = 0,
  dueAmount: initialDueAmount = 0,
  width,
  onTotalsChange,
  readOnly = false,
  showCodeRow = true,
}: FeeSummaryTotalsProps) {
  const [discount, setDiscount] = useState(initialDiscount);
  const [referral, setReferral] = useState(initialReferral);
  const [feePaid, setFeePaid] = useState(initialFeePaid);
  const [code, setCode] = useState(initialCode);
  const [netFee, setNetFee] = useState(initialNetFee);
  const [dueAmount, setDueAmount] = useState(initialDueAmount);

  const [loadedFromDB, setLoadedFromDB] = useState(false);

  useEffect(() => {
    setDiscount(initialDiscount ?? 0);
    setReferral(initialReferral ?? 0);
    setFeePaid(initialFeePaid ?? 0);
    setCode(initialCode ?? "");
    setNetFee(initialNetFee ?? 0);
    setDueAmount(initialDueAmount ?? 0);
    setLoadedFromDB(true);
  }, [
    initialDiscount,
    initialReferral,
    initialFeePaid,
    initialCode,
    initialNetFee,
    initialDueAmount,
  ]);

  useEffect(() => {
    if (!loadedFromDB) return;

    const calcNet = total - discount - referral;
    const calcDue = calcNet - feePaid;

    setNetFee(calcNet);
    setDueAmount(calcDue);
  }, [discount, referral, feePaid, total, loadedFromDB]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onTotalsChange({
        totalFee: total,
        discount,
        referral,
        feePaid,
        dueAmount,
        code,
        netFee,
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [discount, referral, feePaid, dueAmount, code, netFee, total]);

  const rows: Row[] = [
    { type: "number", label: "Total", value: total },
    { type: "number", label: "Discount", value: discount, onChange: setDiscount },
    { type: "number", label: "Referral", value: referral, onChange: setReferral },
    { type: "number", label: "Net Fee", value: netFee },
    { type: "number", label: "Fee Paid", value: feePaid, onChange: setFeePaid },
    { type: "number", label: "Due Amount", value: dueAmount },
  ];

  if (showCodeRow) {
    rows.push({
      type: "text",
      label: "Code",
      value: code,
      onChange: setCode,
    });
  }

  return (
    <div className={`flex justify-start mt-4 ${width || ""}`}>
      <table className="border-collapse border border-gray-400 w-full">
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="text-[#1D2B48]">
              <td className="border border-gray-300 text-xs font-medium px-4 py-2 w-[50%]">
                {row.label}
              </td>

              <td className="border border-gray-300 text-xs px-4 py-2 text-center">
                {readOnly || !row.onChange ? (
                  <span>{row.value}</span>
                ) : row.type === "text" ? (
                  <input
                    type="text"
                    value={row.value}
                    onChange={(e) => row.onChange!(e.target.value)}
                    className="border border-gray-400 rounded px-2 py-1 text-sm text-center w-24 focus:outline-none"
                    onWheel={(e) => e.currentTarget.blur()}
                  />
                ) : (
                  <input
                    type="number"
                    value={row.value}
                    onChange={(e) => row.onChange!(Number(e.target.value))}
                    className="border border-gray-400 rounded px-2 py-1 text-sm text-center w-24 focus:outline-none"
                    onWheel={(e) => e.currentTarget.blur()}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
