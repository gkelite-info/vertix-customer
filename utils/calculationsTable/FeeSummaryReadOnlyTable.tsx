"use client";

import { FeeSummaryItemRow } from "@/app/api/SupabaseAPI/customer/feeSummaryItemsAPI";

export default function FeeSummaryReadOnlyTable({
    items,
}: {
    items: FeeSummaryItemRow[];
}) {
    if (!items.length) return null;

    return (
        <div className="w-full mb-4">
            <table className="border-collapse border border-gray-400 w-full">
                <thead>
                    <tr className="text-[#1D2B48] text-xs text-center bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">
                            Description
                        </th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Fee</th>
                        <th className="border border-gray-300 px-4 py-2">Total</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <tr key={item.itemId} className="text-center text-[#1D2B48]">
                            <td className="border border-gray-300 px-4 py-2 text-left text-xs">
                                {item.description}
                            </td>

                            <td className="border border-gray-300 px-4 py-2 text-xs">
                                {item.status ?? "-"}
                            </td>

                            <td className="border border-gray-300 px-4 py-2 text-xs">
                                ₹{item.fee?.toFixed(2)}
                            </td>

                            <td className="border border-gray-300 px-4 py-2 text-xs font-medium">
                                ₹{item.total?.toFixed(2)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
