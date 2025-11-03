"use client";

import TableHead from "./tableHead";
import TableBody from "./tableBody";

type TableProps = {
  data: Record<string, any>[];
  columns: string[];
  columnKeys: string[];
  actions?: (row: Record<string, any>, index: number) => React.ReactNode;
  onDelete?: (filePath: string) => void;
  onUpdateClick: () => void;
};

export default function TableComponent({
  data,
  columns,
  columnKeys,
  actions,
  onDelete,
  onUpdateClick,
}: TableProps) {
  const showActions = !!actions;

  return (
    <div className="bg-red-00 flex flex-col items-center justify-start lg:h-[80%] pt-3 w-full">
      <table className="border-collapse border border-gray-300 w-[90%] text-left">
        <TableHead columns={columns} showActions={showActions} />

        <TableBody
          data={data}
          columnKeys={columnKeys}
          actions={actions}
          onDelete={onDelete}
        />
      </table>
    </div>
  );
}
