"use client";

import { useState, useEffect } from "react";

type FeeSummaryTotalsProps = {
  total: number;
  onTotalsChange: (values: {
    totalFee: number;
    discount: number;
    referral: number;
    feePaid: number;
    dueAmount: number;
    code: string;
    netFee: number;
  }) => void;
};

export default function FeeSummaryTotals({ total, onTotalsChange }: FeeSummaryTotalsProps) {
  const [discount, setDiscount] = useState(0);
  const [referral, setReferral] = useState(0);
  const [feePaid, setFeePaid] = useState(0);
  const [code, setCode] = useState("");

  const [netFee, setNetFee] = useState(total);
  const [dueAmount, setDueAmount] = useState(total);

  useEffect(() => {
    const calcNet = total - discount - referral;
    const calcDue = calcNet - feePaid;
    setNetFee(calcNet);
    setDueAmount(calcDue);
  }, [total, discount, referral, feePaid]);

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
  }, [discount, referral, feePaid, dueAmount, code, netFee]);

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
    <div className="flex justify-start mt-4 bg-green-00 w-[100%]">
      <table className="border-collapse border border-gray-400 w-[50%]">
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="text-[#1D2B48]">
              <td className="border border-gray-300 text-xs font-medium px-4 py-2 w-[50%]">
                {row.label}
              </td>
              <td className="border border-gray-300 text-xs px-4 py-2 text-center">
                {row.isInput === false ? (
                  <span>{row.value}</span>
                ) : (
                  <input
                    type={row.inputType || "number"}
                    value={row.value}
                    onChange={(e) =>
                      (row.onChange as (val: any) => void)(
                        row.inputType === "text" ? e.target.value : Number(e.target.value)
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
