'use client'
import { useState } from "react";
import YearSelect from "../../../../utils/yearSelect";
import TaxDashboard from "./taxdashboard/page";
import { useRouter } from "next/navigation";

export default function OrganizerPage() {
    const router = useRouter();

    const [showMessage, setShowMessage] = useState(false);

    const handlebutton = () =>{
        router.push('/taxdashboard')
    }

    return (
        <div className="bg-white h-[100vh]">
            <YearSelect style="justify-center"/>
            <div className="bg-red-00 py-4 flex flex-col justify-start items-center text-center">
                {!showMessage ? (
                    <>
                        <p className="text-[#1C2945] text-sm font-medium lg:mt-3">
                            Please click on the link below to fill online organizer. Should you need <br />
                            any assistance in filing up the organizer, do not hesistate to call us <br />
                            at +1 478-205-678 +91097568374 to schedule an appointment
                        </p>
                        <button
                            className="bg-[#1D2B47] text-sm font-medium h-10 lg:mt-7 rounded-lg p-2 cursor-pointer"
                            onClick={handlebutton}
                        >
                            TAX ORGANIZER FOR 2024 TAX YEAR
                        </button>
                    </>
                ) : (
                    <>
                        {/* <TaxDashboard /> */}
                    </>
                )}
            </div>
        </div>
    );
}
