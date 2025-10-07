"use client";

type TableBodyProps = {
    data: Record<string, any>[];
};

export default function TableBody({ data }: TableBodyProps) {
    return (
        <tbody>
            {data.map((row, index) => (
                <tr key={row.bankId || index} className="text-[#1D2B48] bg-[#C7C7C7] text-center text-sm">
                    <td className="border border-gray-300 px-4 py-2">{String(row.belongsTo || "-")}</td>
                    <td className="border border-gray-300 px-4 py-2">{String(row.holderName || "-")}</td>
                    <td className="border border-gray-300 px-4 py-2">{String(row.bankName || "-")}</td>
                    <td className="border border-gray-300 px-4 py-2">{String(row.accountNumber || "-")}</td>
                    <td className="border border-gray-300 px-4 py-2">{String(row.routingNumber || "-")}</td>
                    <td className="border border-gray-300 px-4 py-2">{String(row.accountType || "-")}</td>
                </tr>
            ))}
        </tbody>
    );
}
