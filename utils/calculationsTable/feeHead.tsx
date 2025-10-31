"use client";

type FeeSummaryHeadProps = {
  columns: string[];
};

export default function FeeSummaryHead({ columns }: FeeSummaryHeadProps) {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            key={col}
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#D1D5DB",
              fontSize: "0.78rem",
              backgroundColor: "#4B5873",
              color: "#FFFEFE",
              padding: "0.5rem 1rem",
              textAlign: "center",
            }}
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
}
