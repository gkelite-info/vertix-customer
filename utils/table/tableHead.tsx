"use client";

type TableHeadProps = {
    columns: string[];
}

export default function TableHead({ columns }: TableHeadProps) {

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
