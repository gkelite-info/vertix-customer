"use client";

type TableBodyProps = {
  data: Record<string, any>[];
  columnKeys: string[];
  showActions?: boolean;
  onDelete?: (filePath: string) => void;
  actions?: (row: Record<string, any>, index: number) => React.ReactNode;
};

export default function TableBody({
  data,
  columnKeys,
  actions,
}: TableBodyProps) {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr
          key={row.documentId || index}
          className="text-[#1D2B48] bg-[#C7C7C7] text-center"
        >
          {columnKeys.map((key) => {
            let value = row.hasOwnProperty(key) ? row[key] : "-";

            if (key === "public_url" && typeof value === "string") {
              value = decodeURIComponent(value.split("/").pop() || "");
            }

            if (
              value === null ||
              value === undefined ||
              value === "" ||
              (typeof value === "string" && value.trim() === "")
            ) {
              value = "-";
            }

            return (
              <td
                key={key}
                style={{
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#D1D5DB",
                  fontSize: "0.75rem",
                  padding: "0.5rem 1rem",
                }}
                title={String(value)}
              >
                {value}
              </td>
            );
          })}

          {actions && (
            <td
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#D1D5DB",
                padding: "0.5rem",
              }}
            >
              <div className="flex items-center justify-center gap-3">
                {actions(row, index)}
              </div>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  );
}
