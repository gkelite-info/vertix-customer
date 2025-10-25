"use client";

import { getDocumentDownloadUrl } from "@/app/api/SupabaseAPI/customer/documentUploadAPI";
import { DownloadSimple, Trash } from "phosphor-react";
import { useState } from "react";

type TableBodyProps = {
    data: Record<string, any>[];
    columnKeys: string[];
    showActions?: boolean;
    onDelete?: (filePath: string) => void;
};

export default function TableBody({ data, columnKeys, showActions = false, onDelete }: TableBodyProps) {
    const [loadingDownload, setLoadingDownload] = useState<number | null>(null);

    const handleDownload = async (filePath: string, index: number) => {
        try {
            setLoadingDownload(index);
            const url = await getDocumentDownloadUrl(filePath);
            window.open(url, "_blank");
        } catch (err) {
            console.error("Download failed:", err);
            alert("Failed to download file");
        } finally {
            setLoadingDownload(null);
        }
    };

    return (
        <tbody>
            {data.map((row, index) => (
                <tr key={row.bankId || index} className="text-[#1D2B48] bg-[#C7C7C7] text-center">
                    {columnKeys.map((key) => (
                        <td
                            key={key}
                            style={{
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "#D1D5DB",
                                fontSize: "0.75rem",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                paddingTop: "0.5rem",
                                paddingBottom: "0.5rem",
                            }}
                        >
                            {row[key] !== null && row[key] !== undefined && row[key] !== ""
                                ? String(row[key])
                                : "-"}
                        </td>
                    ))}
                    {showActions && (
                        <td
                            style={{
                                borderWidth: "1px",
                                borderStyle: "solid",
                                borderColor: "#D1D5DB",
                                padding: "0.5rem",
                            }}
                        >
                            <div className="flex items-center justify-center gap-3">

                                {row.file_path ? (
                                    <button
                                        onClick={() => handleDownload(row.file_path, index)}
                                        disabled={loadingDownload === index}
                                        className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                        title="Download"
                                    >
                                        <DownloadSimple size={20} weight="regular" />
                                    </button>
                                ) : (
                                    "-"
                                )}

                                {row.file_path && (
                                    <button
                                        onClick={() => onDelete && onDelete(row.file_path)}
                                        className="text-red-600 hover:text-red-800 cursor-pointer"
                                        title="Delete"
                                    >
                                        <Trash size={20} weight="regular" />
                                    </button>
                                )}
                            </div>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    );
}
