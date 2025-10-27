"use client";

type TableHeadProps = {
    columns: string[];
    showActions?: boolean
}

export default function TableHead({ columns, showActions = false }: TableHeadProps) {

    return (
        <thead>
            <tr>
                {columns.map((col) => (
                    <th key={col} style={{
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: '#D1D5DB',
                        fontSize: '0.78rem',
                        backgroundColor: '#4B5873',
                        color: '#FFFEFE',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        textAlign: 'center'
                    }}
                    >
                        {col}
                    </th>
                ))}
                {showActions && <th className="border px-4 py-2 text-xs bg-[#4B5873] text-[#FFFEFE]">Actions</th>}
            </tr>
        </thead>
    );
}
