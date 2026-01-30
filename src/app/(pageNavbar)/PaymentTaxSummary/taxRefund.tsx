'use client';

import { useYear } from "@/app/api/context/yearContext";
import { getPaymentTaxSummary, softDeletePaymentTaxSummary, upsertPaymentTaxSummary } from "@/app/api/SupabaseAPI/customer/paymentTaxSummaryAPI";
import { useAuth } from "@/components/AuthContext";
import { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { State } from "country-state-city";
import TableComponent from "../../../../utils/table/page";
import { PencilSimple, Trash } from "@phosphor-icons/react";
import DeleteModal from "@/components/modals/deleteModal";

type TaxRefundProps = {
    scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
};

export default function TaxRefund({ scrollContainerRef }: TaxRefundProps) {

    const { selectedYear, filingYearId } = useYear();
    const { user } = useAuth();
    const [taxType, setTaxType] = useState("");
    const [state, setState] = useState("");
    const [beforePlanning, setBeforePlanning] = useState("");
    const [afterPlanning, setAfterPlanning] = useState("");
    const [typeOfFiling, setTypeOfFiling] = useState("");
    const [originalUpdated, setOriginalUpdated] = useState("");
    const [belongsTo, setBelongsTo] = useState("");
    const [loading, setLoading] = useState(false);
    const [summaries, setSummaries] = useState<Record<string, any>[]>([]);
    const [fetchingData, setFetchingData] = useState(true);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [deleteId, setDeleteId] = useState<number | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const localScrollRef = useRef<HTMLDivElement | null>(null);

    const US_STATES = State.getStatesOfCountry("US");


    const handleTextInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (val: string) => void
    ) => {
        let value = e.target.value;
        if (/^[A-Za-z\s]*$/.test(value)) {
            value = value.replace(/\b\w/g, (char) => char.toUpperCase());
            setter(value);
        }
    };

    const handleNumericInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (val: string) => void
    ) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value) || value === ".") {
            setter(value);
        }
    };

    const fetchData = async () => {
        setFetchingData(true);
        if (!user || !filingYearId) {
            setSummaries([]);
            setFetchingData(false);
            return;
        }
        try {
            const data = await getPaymentTaxSummary(filingYearId);
            setSummaries(data || []);
        } catch (err) {
            console.error("Error fetching payment summary:", err);
            setSummaries([]);
        } finally {
            setFetchingData(false);
        }
    };

    useEffect(() => {
        if (!user || !filingYearId) {
            setSummaries([]);
            setFetchingData(false);
            return;
        }
        fetchData();
    }, [user, filingYearId]);

    useEffect(() => {
        if (localScrollRef.current) {
            localScrollRef.current.scrollTo({
                top: 0,
                behavior: "auto",
            });
        }
    }, []);


    const handleSubmit = async () => {
        if (
            !taxType ||
            !state ||
            !beforePlanning ||
            !afterPlanning ||
            !typeOfFiling ||
            !originalUpdated ||
            !belongsTo
        ) {
            toast.error("Please fill all required fields!");
            return;
        }

        if (!filingYearId) {
            toast.error("Filing year not loaded yet!");
            return;
        }

        setLoading(true);
        toast.loading("Submitting data...", { id: "submit" });

        try {
            const payload = {
                taxsummaryId: editingId ?? undefined,
                filingYearId,
                taxType,
                state,
                beforePlanning: Number(beforePlanning),
                afterPlanning: Number(afterPlanning),
                typeOfFiling: typeOfFiling as "Paper Filing" | "E-Filing",
                originalUpdated: originalUpdated as "Original" | "Updated",
                belongsTo: belongsTo as
                    | "Joint"
                    | "Single"
                    | "Marriage Filing Separately"
                    | "Marriage Filing Separately - TP"
                    | "Marriage Filing Separately - SP",
                payment_status: null,
            };

            const newSummary = await upsertPaymentTaxSummary(payload);
            toast.success("Payment tax summary saved successfully!", { id: "submit" });

            // setSummaries((prev) => [...prev, newSummary]);
            await fetchData()

            setTaxType("");
            setState("");
            setBeforePlanning("");
            setAfterPlanning("");
            setTypeOfFiling("");
            setOriginalUpdated("");
            setBelongsTo("");
            setEditingId(null);
        } catch (error: any) {
            console.error(error);
            toast.error("Failed to save payment tax summary", { id: "submit" });
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (row: any) => {
        setEditingId(row.taxsummaryId);
        setTaxType(row.taxType);
        setState(row.state);
        setBeforePlanning(String(row.beforePlanning));
        setAfterPlanning(String(row.afterPlanning));
        setTypeOfFiling(row.typeOfFiling);
        setOriginalUpdated(row.originalUpdated);
        setBelongsTo(row.belongsTo);

        if (scrollContainerRef?.current) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }

        if (localScrollRef.current) {
            localScrollRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };


    const confirmDelete = async () => {
        if (!deleteId) return;

        try {
            await softDeletePaymentTaxSummary(deleteId);
            toast.success("Record deleted successfully");
            await fetchData();
        } catch (err) {
            toast.error("Failed to delete record");
        } finally {
            setShowDeleteModal(false);
            setDeleteId(null);
        }
    };


    const columns = [
        "TAX Type",
        "State",
        "Before Planning",
        "After Planning",
        "Type of Filing",
        "Original/Updated",
        "Belongs To",
        "Payment Status",
    ];
    const columnKeys = [
        "taxType",
        "state",
        "beforePlanning",
        "afterPlanning",
        "typeOfFiling",
        "originalUpdated",
        "belongsTo",
        "payment_status",
    ];

    // 🔹 CHANGE 1: Add TOTAL row logic
    const tableDataWithTotal = (() => {
        if (!summaries || summaries.length === 0) return [];

        const totalBeforePlanning = summaries.reduce(
            (sum, item) => sum + (Number(item.beforePlanning) || 0),
            0
        );

        const totalAfterPlanning = summaries.reduce(
            (sum, item) => sum + (Number(item.afterPlanning) || 0),
            0
        );

        const totalRow = {
            taxType: "Total",
            state: "-",
            beforePlanning: totalBeforePlanning,
            afterPlanning: totalAfterPlanning,
            typeOfFiling: "-",
            originalUpdated: "-",
            belongsTo: "-",
            payment_status: "-",
        };

        return [...summaries, totalRow];
    })();


    return (
        <>
            <div ref={localScrollRef} className="flex flex-col items-center lg:pt-5 pb-7 bg-pink-00 overflow-y-auto">
                <div className="flex flex-col w-[45%] gap-6 bg-green-00">
                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="taxType"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            Tax Type:
                        </label>
                        <input
                            id="taxType"
                            type="text"
                            value={taxType}
                            onChange={(e) => handleTextInput(e, setTaxType)}
                            placeholder="Enter tax type..."
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="state"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            State:
                        </label>
                        {/* <input
                            id="state"
                            type="text"
                            value={state}
                            onChange={(e) => handleTextInput(e, setState)}
                            placeholder="Enter state..."
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none"
                        /> */}
                        <select
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none"
                        >
                            <option value="">Select state</option>
                            {US_STATES.map((s) => (
                                <option key={s.isoCode} value={s.name}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="beforePlanning"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            Before Planning:
                        </label>
                        <input
                            id="beforePlanning"
                            type="text"
                            value={beforePlanning}
                            onChange={(e) => handleNumericInput(e, setBeforePlanning)}
                            placeholder="Enter before planning amount..."
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="afterPlanning"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            After Planning:
                        </label>
                        <input
                            id="afterPlanning"
                            type="text"
                            value={afterPlanning}
                            onChange={(e) => handleNumericInput(e, setAfterPlanning)}
                            placeholder="Enter after planning amount..."
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="typeOfFiling"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            Type of Filing:
                        </label>
                        <select
                            id="typeOfFiling"
                            value={typeOfFiling}
                            onChange={(e) => setTypeOfFiling(e.target.value)}
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none cursor-pointer"
                        >
                            <option>Choose filing type</option>
                            <option>Paper Filing</option>
                            <option>E-Filing</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="originalUpdated"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            Original / Updated:
                        </label>
                        <select
                            id="originalUpdated"
                            value={originalUpdated}
                            onChange={(e) => setOriginalUpdated(e.target.value)}
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none cursor-pointer"
                        >
                            <option>Select one</option>
                            <option>Original</option>
                            <option>Updated</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="belongsTo"
                            className="text-[#1D2B48] font-medium text-sm min-w-[150px]"
                        >
                            Belongs To:
                        </label>
                        <select
                            id="belongsTo"
                            value={belongsTo}
                            onChange={(e) => setBelongsTo(e.target.value)}
                            className="border border-[#B5B5B5] text-[#616161] rounded-md px-3 py-2 text-sm w-full focus:outline-none cursor-pointer"
                        >
                            <option>Select one</option>
                            <option>Joint</option>
                            <option>Single</option>
                            <option>Marriage Filing Separately</option>
                            <option>Marriage Filing Separately - TP</option>
                            <option>Marriage Filing Separately - SP</option>
                        </select>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            className="bg-[#1D2B48] text-white text-sm font-medium px-6 py-2 rounded-md cursor-pointer transition duration-200 ease-in-out"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </div>
                {!fetchingData && summaries.length > 0 && (
                    <div className="mt-5 bg-green-00 overflow-x-auto w-full pb-7">
                        <TableComponent
                            // data={summaries}
                            data={tableDataWithTotal}
                            columns={columns}
                            columnKeys={columnKeys}
                            actions={(row) => (
                                row.taxType !== "Total" &&
                                <>
                                    <button
                                        onClick={() => handleEdit(row)}
                                        title="Edit"
                                        className="text-blue-600 cursor-pointer hover:text-blue-800"
                                    >
                                        <PencilSimple size={18} weight="bold" />
                                    </button>

                                    <button
                                        onClick={() => {
                                            setDeleteId(row.taxsummaryId);
                                            setShowDeleteModal(true);
                                        }}
                                        title="Delete"
                                        className="text-red-600 cursor-pointer hover:text-red-800"
                                    >
                                        <Trash size={18} weight="bold" />
                                    </button>
                                </>
                            )}
                            onUpdateClick={() => console.log("No update action yet")}
                        />
                    </div>
                )}

                {showDeleteModal && (
                    <DeleteModal
                        isOpen={showDeleteModal}
                        onCancel={() => {
                            setShowDeleteModal(false);
                            setDeleteId(null);
                        }}
                        onConfirm={confirmDelete}
                    />
                )}

            </div>
        </>
    )
}