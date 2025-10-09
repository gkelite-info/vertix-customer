"use client";

import TableHead from "./tableHead";
import TableBody from "./tableBody";

type BankDetailsTableProps = {
  data: Record<string, any>[];
  columns: string[];
  onUpdateClick: () => void;
};


export default function BankDetailsTable({ data, columns, onUpdateClick }: BankDetailsTableProps) {
  return (
    <div className="bg-white flex flex-col items-center justify-start lg:h-[80%] pt-5 w-full">
      <h2 className="font-semibold text-[#1D2B48] text-xl mb-4">Your Bank Details</h2>
      <table className="border-collapse border border-gray-300 w-[75%] text-left">
        <TableHead columns={columns} />
        <TableBody data={data} />
      </table>
      {/* <button
        onClick={onUpdateClick}
        className="mt-5 font-medium text-sm bg-[#1D2B48] text-white px-5 py-2 hover:bg-[#2c3e65] rounded-lg"
      >
        Update Bank Details
      </button> */}
    </div>
  );
}
