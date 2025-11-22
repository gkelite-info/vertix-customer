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

            const isEmpty =
              value === null ||
              value === undefined ||
              value === "" ||
              (typeof value === "string" && value.trim() === "");

            if (isEmpty) {
              value = "-";
            }

            const tdStyle: React.CSSProperties = {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#D1D5DB",
              fontSize: "0.75rem",
              padding: "0.5rem 1rem",
            };

            if (key === "link" && typeof value === "string" && value !== "-") {
              return (
                <td key={key} style={tdStyle} title={String(value)}>
                  <div className="flex items-center justify-between gap-2 w-full">
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-blue-700 underline break-all text-left flex-1"
                    >
                      {value}
                    </a>

                    <button
                      onClick={() => window.open(value, "_blank")}
                      className="text-white font-medium bg-[#1D2B48] px-2 py-1 rounded text-[11px] cursor-pointer ml-2"
                    >
                      Visit
                    </button>
                  </div>
                </td>
              );
            }

            if (value === "-") {
              return (
                <td key={key} style={tdStyle} title={String(value)}>
                  <div className="w-full text-center">{value}</div>
                </td>
              );
            }

            return (
              <td key={key} style={tdStyle} title={String(value)}>
                {String(value)}
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
