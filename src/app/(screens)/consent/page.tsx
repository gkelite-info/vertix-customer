'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { supabase } from "../../../../utils/supabase/client";
import toast from "react-hot-toast";


function ConsentPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [taxPayerName, setTaxpayerName] = useState("");
    const [taxPayerSignature, setTaxPayerSignature] = useState("");
    const [jointTaxpayerName, setJointTaxpayerName] = useState("");
    const [jointTaxpayerSignature, setJointTaxpayerSignature] = useState("");


    const handleNameInput = (value: string, setter: (val: string) => void) => {
        if (!/^[A-Za-z ]*$/.test(value)) return;

        setter(value);
    };


    const isValidDateFormat = (value: string) => {
        const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        return dateRegex.test(value);
    };

    const handleDateInput = (value: string, setter: (val: string) => void) => {
        if (!/^[0-9/]*$/.test(value)) return;

        if (value.length > 10) return;

        setter(value);
    };


    const handleAccept = async () => {
        setLoading(true);

        if (!taxPayerName.trim() || !taxPayerSignature.trim()) {
            toast.error("Please fill all required fields.");
            setLoading(false);
            return;
        }

        if (jointTaxpayerName || jointTaxpayerSignature) {
            if (!jointTaxpayerName.trim() || !jointTaxpayerSignature.trim()) {
                toast.error("Please complete joint taxpayer fields.");
                setLoading(false);
                return;
            }
        }

        if (!isValidDateFormat(date1) || !isValidDateFormat(date2)) {
            toast.error("Please enter valid dates in MM/DD/YYYY format.");
            setLoading(false);
            return;
        }

        const user = supabase.auth.getUser();

        const { data: currentUser, error: userError } = await user;
        if (userError || !currentUser?.user) {
            setLoading(false);
            alert("User not found or not logged in.");
            return;
        }

        try {
            const { data, error } = await supabase
                .from("vertixcustomers")
                .update({ is_consent_filled: true })
                .eq("auth_id", currentUser.user.id);

            if (error) throw error;

            toast.success("Consent accepted successfully!");
            router.push("/login");
        } catch (err: any) {
            toast.error(err.message || "Failed to update consent.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex items-start p-10 justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-[65%] flex flex-col items-center">
                <div className="bg-red-00 w-[100%] text-center flex justify-between items-center">
                    <h2 className="text-[#1D2B48] font-semibold text-lg w-[60%] text-end">CONSENT FORM</h2>
                    <RxCross2
                        onClick={() => router.back()}
                        className="text-[#1D2B48] text-lg font-bold cursor-pointer"
                        strokeWidth={0.6}
                    />
                </div>
                <form>
                    <p className="text-start text-xs mt-3 text-[#616161]">
                        Federal law requires this consent form be provided to you. Unless authorized by law, we cannot use, without your consent, your tax <br /> return information for purposes other than the preparation and fling of your tax return.
                    </p>
                    <p className="text-start text-xs mt-2 text-[#616161]">
                        You are not required to complete this form. If we obtain your signature on this form by conditioning our services on your consent, <br /> your consent will not be valid. Your consent is valid for the amount of time that you specify. If you do not specify the duration of <br /> your consent, your consent is valid for one year
                    </p>
                    <p className="text-start text-xs mt-2 text-[#616161]">
                        Duration of Consent: 1 year(s)
                    </p>
                    <p className="text-start text-xs mt-2 text-[#616161]">
                        If you give your consent, then you may still have your tax return prepared and electronically filed by us for a fee
                    </p>
                    <p className="text-start text-xs mt-2 text-[#616161]">
                        By signing below, you including each of you it there is more than one taxpayer) authorize us to use the information you provide to us during the preparation of your 2024 tax return to determine whether to present you with the opportunity to apply for these products and services.
                    </p>
                    <div className="flex mt-3">
                        <p className="text-start text-xs mt-2 text-[#616161]">Name of taxpayer : </p>
                        <input
                            type="text"
                            value={taxPayerName}
                            onChange={(e) => handleNameInput(e.target.value, setTaxpayerName)}
                            className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
                        />
                    </div>
                    <div className="flex mt-3">
                        <p className="text-start text-xs mt-2 text-[#616161]">Taxpayer Signature : </p>
                        <input
                            type="text"
                            value={taxPayerSignature}
                            onChange={(e) => handleNameInput(e.target.value, setTaxPayerSignature)}
                            className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
                        />
                        <p className="text-start text-xs mt-2 text-[#616161] ml-3">Date : </p>
                        <input
                            type="text"
                            value={date1}
                            onChange={(e) => handleDateInput(e.target.value, setDate1)}
                            className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
                        />
                    </div>
                    <div className="flex mt-3">
                        <p className="text-start text-xs mt-2 text-[#616161]">Name of Joint taxpayer : </p>
                        <input
                            type="text"
                            value={jointTaxpayerName}
                            onChange={(e) => handleNameInput(e.target.value, setJointTaxpayerName)}
                            className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
                        />
                    </div>
                    <div className="flex mt-3">
                        <p className="text-start text-xs mt-2 text-[#616161]">Joint Taxpayer Signature : </p>
                        <input
                            type="text"
                            value={jointTaxpayerSignature}
                            onChange={(e) => handleNameInput(e.target.value, setJointTaxpayerSignature)}
                            className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
                        />
                        <p className="text-start text-xs mt-2 text-[#616161] ml-3">Date : </p>
                        <input
                            type="text"
                            value={date2}
                            onChange={(e) => handleDateInput(e.target.value, setDate2)}
                            className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleAccept();
                                }
                            }}
                        />
                    </div>
                    <p className="text-start text-xs mt-5 text-[#616161]">
                        If you believe your tax return information has been disclosed or used improperty in a manner unauthorized by law or without your permission, you may contact the Treasury Inspector General for Tax Administration (TIGTA) byl
                    </p>
                </form>
                <button
                    onClick={handleAccept}
                    disabled={loading}
                    className="bg-[#1D2B48] rounded-lg px-5 py-2 mt-3 hover:bg-[#2c3e65] cursor-pointer text-white"
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
            </div>
        </div>
    );
}

export default ConsentPage;
