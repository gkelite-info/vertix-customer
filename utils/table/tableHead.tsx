"use client";

export default function TableHead() {
    const columns = ["Belongs To", "Holder Name", "Bank Name", "Account Number", "Routing Number", "Account Type"];

    return (
        <thead>
            <tr>
                {columns.map((col) => (
                    <th key={col} className="border text-sm bg-[#4B5873] text-[#FFFEFE] border-gray-300 px-4 py-2 text-center">
                        {col}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
