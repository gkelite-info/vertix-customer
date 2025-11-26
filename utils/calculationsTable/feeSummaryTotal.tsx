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
};

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
}: FeeSummaryTotalsProps) {
  const [discount, setDiscount] = useState(initialDiscount);
  const [referral, setReferral] = useState(initialReferral);
  const [feePaid, setFeePaid] = useState(initialFeePaid);
  const [code, setCode] = useState(initialCode);
  const [netFee, setNetFee] = useState(initialNetFee);
  const [dueAmount, setDueAmount] = useState(initialDueAmount);

  const [loadedFromDB, setLoadedFromDB] = useState(false);

  useEffect(() => {
    if (
      initialDiscount !== undefined ||
      initialReferral !== undefined ||
      initialFeePaid !== undefined ||
      initialNetFee !== undefined ||
      initialDueAmount !== undefined
    ) {
      setDiscount(initialDiscount ?? 0);
      setReferral(initialReferral ?? 0);
      setFeePaid(initialFeePaid ?? 0);
      setCode(initialCode ?? "");
      setNetFee(initialNetFee ?? 0);
      setDueAmount(initialDueAmount ?? 0);
      setLoadedFromDB(true);
    }
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

  const rows = [
    { label: "Total", value: total.toFixed(2), isInput: false },
    { label: "Discount", value: discount, onChange: setDiscount },
    { label: "Referral", value: referral, onChange: setReferral },
    { label: "Net Fee", value: netFee.toFixed(2), isInput: false },
    { label: "Fee Paid", value: feePaid, onChange: setFeePaid },
    { label: "Due Amount", value: dueAmount.toFixed(2), isInput: false },
    { label: "Code", value: code, onChange: setCode, inputType: "text" },
  ];

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
                {readOnly || row.isInput === false ? (
                  <span>{row.value}</span>
                ) : (
                  <input
                    type={row.inputType || "number"}
                    value={row.value}
                    onChange={(e) =>
                      (row.onChange as (val: any) => void)(
                        row.inputType === "text"
                          ? e.target.value
                          : Number(e.target.value)
                      )
                    }
                    className="border border-gray-400 rounded px-2 py-1 text-sm text-center w-24 focus:outline-none"
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