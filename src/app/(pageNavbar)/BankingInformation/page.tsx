"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/AuthContext";
import YearSelect from "../../../../utils/yearSelect";
import TableComponent from "../../../../utils/table/page";
import toast from "react-hot-toast";
import {
  deleteBankInformation,
  getBankInformation,
  postBankInformation,
} from "@/app/api/SupabaseAPI/customer/bank";
import { Trash } from "phosphor-react";
import { MdEdit } from "react-icons/md";
import DeleteModal from "@/components/modals/deleteModal";

export default function BankingInformationPage() {
  const [formValues, setFormValues] = useState({
    belongsTo: "",
    holderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    accountType: "",
  });

  const [bankRecords, setBankRecords] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const fetchBankData = async () => {
      try {
        const res = await getBankInformation();
        if (res) {
          setBankRecords([res]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setFetching(false);
      }
    };

    fetchBankData();
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, tagName } = e.target;

    if (name === "accountNumber") {
      const numericValue = value.replace(/\D/g, "");
      setFormValues((prev) => ({ ...prev, [name]: numericValue }));
    } else if (tagName === "INPUT") {
      const formattedValue = value.replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );
      setFormValues((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await postBankInformation(formValues);
      toast.success(
        typeof res.message === "string"
          ? res.message
          : "Bank information updated successfully"
      );
      setBankRecords(res ? [res] : []);
      setIsEditing(false);
    } catch (error: any) {
      toast.error(
        error.response?.data?.message
          ? String(error.response.data.message)
          : "Failed to update bank information"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (row: any) => {
    setFormValues({
      belongsTo: row.belongsTo || "",
      holderName: row.holderName || "",
      bankName: row.bankName || "",
      accountNumber: row.accountNumber || "",
      routingNumber: row.routingNumber || "",
      accountType: row.accountType || "",
    });
    setIsEditing(true);
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteBankInformation();
      toast.success("Bank information deleted successfully");

      setBankRecords([]);
      setFormValues({
        belongsTo: "",
        holderName: "",
        bankName: "",
        accountNumber: "",
        routingNumber: "",
        accountType: "",
      });
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to delete bank information");
    } finally {
      setIsDeleteModalOpen(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex justify-center items-center text-[#1D2B48] h-[100vh]">
        Loading bank data...
      </div>
    );
  }

  const columns = [
    "Belongs To",
    "Holder Name",
    "Bank Name",
    "Account Number",
    "Routing Number",
    "Account Type",
  ];

  const columnKeys = [
    "belongsTo",
    "holderName",
    "bankName",
    "accountNumber",
    "routingNumber",
    "accountType",
  ];

  return (
    <div className="bg-white min-h-[100vh] overflow-y-auto mb-7">
      <YearSelect />
      <div className="flex flex-col justify-start items-center bg-green-00 lg:pt-3 gap-2 text-center">
        <h2 className="font-semibold text-[#1D2B48] text-xl mb-3">
          Your Bank Details
        </h2>
        {[
          {
            label: "Belongs To",
            name: "belongsTo",
            type: "select",
            options: [{ value: "TaxPayer", label: "Tax Payer" }],
          },
          {
            label: "Holder Name",
            name: "holderName",
            type: "text",
            placeholder: "Enter Holder Name",
          },
          {
            label: "Bank Name",
            name: "bankName",
            type: "text",
            placeholder: "Enter Bank Name",
          },
          {
            label: "Account Number",
            name: "accountNumber",
            type: "number",
            placeholder: "Enter Account Number",
          },
          {
            label: "Type of Account",
            name: "accountType",
            type: "select",
            options: [
              { value: "checking", label: "Checking Account" },
              { value: "savings", label: "Savings" },
              { value: "others", label: "Others" },
            ],
          },
        ].map((input, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-pink-00 gap-3 h-9 w-[44%] mt-2"
          >
            <div className="w-[39%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                {input.label} :
              </h5>
            </div>
            {input.type === "select" ? (
              <select
                name={input.name}
                value={formValues[input.name as keyof typeof formValues]}
                onChange={handleChange}
                className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] h-[100%] px-2 text-sm focus:outline-none rounded cursor-pointer shadow-sm"
              >
                <option value="">SELECT ONE</option>
                {input.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={input.type}
                name={input.name}
                value={formValues[input.name as keyof typeof formValues] || ""}
                onChange={handleChange}
                placeholder={input.placeholder}
                className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] h-[100%] px-2 text-sm focus:outline-none rounded cursor-text shadow-sm"
              />
            )}
          </div>
        ))}

        <div className="mt-4 flex h-[10%] w-[45%] gap-3 bg-red-00 rounded-lg">
          <button
            onClick={handleSubmit}
            disabled={loading || (bankRecords.length > 0 && !isEditing)}
            className={`font-medium w-[60%] h-[100%] text-sm px-5 py-2 rounded-lg flex gap-2 justify-center items-center ${loading || (bankRecords.length > 0 && !isEditing)
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#1D2B48] text-white cursor-pointer"
              }`}
          >
            {isEditing ? "UPDATE DETAILS" : loading ? "Saving..." : "ADD BANK DETAILS"}
          </button>

          <button
            onClick={() => {
              setFormValues({
                belongsTo: "",
                holderName: "",
                bankName: "",
                accountNumber: "",
                routingNumber: "",
                accountType: "",
              });
              setIsEditing(false);
            }}
            disabled={bankRecords.length > 0 && !isEditing}
            className={`font-medium w-[60%] h-[100%] text-sm px-5 py-2 rounded-lg flex gap-2 justify-center items-center ${bankRecords.length > 0 && !isEditing
                ? "bg-gray-300 text-white cursor-not-allowed"
                : "bg-gray-400 text-white hover:bg-gray-500 cursor-pointer"
              }`}
          >
            {isEditing ? "CANCEL" : "RESET"}
          </button>
        </div>
      </div>

      {bankRecords.length > 0 && (
        <div className="flex flex-col mt-8 text-start bg-green-00">
          <label className="text-red-500 text-xs font-medium lg:ml-12">
            Note: Remove your current bank details before adding new one.
          </label>

          <TableComponent
            data={bankRecords}
            columns={columns}
            columnKeys={columnKeys}
            actions={(row) => (
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => handleEdit(row)}
                  className="text-green-600 hover:text-green-800 cursor-pointer"
                  title="Edit"
                >
                  <MdEdit size={20} className="text-black" />
                </button>
                <button
                  onClick={() => handleDelete()}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                  title="Delete"
                >
                  <Trash size={20} />
                </button>
              </div>
            )}
            onUpdateClick={() =>
              console.log("Edit/Delete table doesn’t use this")
            }
          />
        </div>
      )}

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );

}
