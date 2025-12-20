"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/components/AuthContext";
import { useYear } from "@/app/api/context/yearContext";
import TableComponent from "../../../../utils/table/page";
import toast from "react-hot-toast";
import {
  getBankInformation,
  upsertBankInformation,
  deleteBankInformation,
} from "@/app/api/SupabaseAPI/customer/bank";
import { Trash } from "phosphor-react";
import { MdEdit } from "react-icons/md";
import DeleteModal from "@/components/modals/deleteModal";
import YearSelect from "../../../../utils/yearSelect";
import { useHandleMagicLinkAuth } from "../../../../utils/useHandleMagicLinkAuth";
import DateForDue from "./dateForDue";
import { supabase } from "../../../../utils/supabase/client";
import { useRouter } from "next/navigation";

export default function BankingInformationPage() {
  const { user } = useAuth();
  const { filingYearId } = useYear();

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
  const { isTemporary } = useHandleMagicLinkAuth();
  const { selectedYear } = useYear()
  const [checkingConsent, setCheckingConsent] = useState(true)
  const hasRedirectedRef = useRef(false)
  const router = useRouter()

  useEffect(() => {
    if (!user || !filingYearId) return;

    const fetchBankData = async () => {
      setFetching(true);
      try {
        const res = await getBankInformation(filingYearId);
        if (res) {
          setBankRecords([res]);
        } else {
          setBankRecords([]);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch bank information");
      } finally {
        setFetching(false);
      }
    };

    fetchBankData();
  }, [user, filingYearId]);

  useEffect(() => {
    const checkConsent = async () => {
      try {
        if (!selectedYear) return

        const { data: auth } = await supabase.auth.getUser()
        if (!auth?.user) return

        const { data: customer } = await supabase
          .from("vertixcustomers")
          .select("customerId")
          .eq("auth_id", auth.user.id)
          .single()

        if (!customer) return

        const { data: consent } = await supabase
          .from("consents")
          .select("consentId")
          .eq("customerId", customer.customerId)
          .eq("filing_year", Number(selectedYear))
          .maybeSingle()

        if (!consent && !hasRedirectedRef.current) {
          hasRedirectedRef.current = true
          toast.error("Consent required for selected year")
          router.replace("/taxfiling?tab=consent")
          return
        }
      } finally {
        setCheckingConsent(false)
      }
    }

    checkConsent()
  }, [selectedYear, router])


  if (checkingConsent) return <div className="flex justify-center items-center text-[#1D2B48] h-[100vh]">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>

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
    if (!filingYearId) {
      toast.error("Please select a filing year first");
      return;
    }

    if (
      !formValues.belongsTo ||
      !formValues.holderName.trim() ||
      !formValues.bankName.trim() ||
      !formValues.accountNumber.trim() ||
      !formValues.routingNumber.trim() ||
      !formValues.accountType
    ) {
      toast.error("Please fill all fields before submitting");
      return;
    }

    if (formValues.accountNumber.length < 6) {
      toast.error("Account number looks too short");
      return;
    }

    if (!/^\d{9}$/.test(formValues.routingNumber)) {
      toast.error("Routing number must be exactly 9 digits");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        ...formValues,
        filingYearId,
        accountType: formValues.accountType as "checking" | "savings" | "others",
      };

      const res = await upsertBankInformation(payload);

      if (res) {
        toast.success("Bank information saved successfully");
        setBankRecords([res]);
        setIsEditing(false);
      }
    } catch (error: any) {
      toast.error("Failed to save bank information");
      console.error(error);
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
    if (!filingYearId) {
      toast.error("Please select a filing year first");
      return;
    }

    try {
      await deleteBankInformation(filingYearId);
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
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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
    <div className="bg-white h-[100vh] overflow-y-auto pb-7">
      <YearSelect />
      <div className="flex flex-col justify-start items-center lg:pt-3 gap-2 text-center">
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
            label: "Routing Number",
            name: "routingNumber",
            type: "text",
            placeholder: "Enter Routing Number",
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
            className="flex items-center justify-between gap-3 h-9 w-[44%] mt-2"
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

        <div className="mt-4 flex h-[10%] w-[45%] gap-3 rounded-lg">
          <button
            onClick={handleSubmit}
            disabled={loading || (bankRecords.length > 0 && !isEditing)}
            className={`font-medium w-[60%] text-sm px-5 py-2 rounded-lg flex gap-2 justify-center items-center ${loading || (bankRecords.length > 0 && !isEditing)
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-[#1D2B48] text-white cursor-pointer"
              }`}
          >
            {isEditing
              ? "UPDATE DETAILS"
              : loading
                ? "Saving..."
                : "ADD BANK DETAILS"}
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
            className={`font-medium w-[60%] text-sm px-5 py-2 rounded-lg flex gap-2 justify-center items-center ${bankRecords.length > 0 && !isEditing
              ? "bg-gray-300 text-white cursor-not-allowed"
              : "bg-gray-400 text-white hover:bg-gray-500 cursor-pointer"
              }`}
          >
            {isEditing ? "CANCEL" : "RESET"}
          </button>
        </div>
      </div>

      {bankRecords.length > 0 && (
        <div className="flex flex-col mt-8 text-start">
          <label className="text-red-500 text-xs font-medium lg:ml-12">
            Note: Remove your current bank details before adding a new one.
          </label>

          <TableComponent
            data={bankRecords}
            columns={columns}
            style="w-[90%]"
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
              console.log("Edit/Delete handled internally")
            }
          />
          {isTemporary && (
            <DateForDue style="p-10" readonly={true} />
          )}
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
