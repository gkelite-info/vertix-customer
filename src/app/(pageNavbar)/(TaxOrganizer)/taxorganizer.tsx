'use client'
import { useRouter } from "next/navigation";
import YearSelect from "../../../../utils/yearSelect";

export default function OrganizerPage() {
    const router = useRouter();

    const handleButton = () => {
        router.push('/taxdashboard')
    }

    return (
        <>
            <div className="bg-white lg:h-[100vh]">
                <YearSelect />
                <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] text-center">
                    <p className="text-[#1C2945] text-sm font-medium lg:mt-5">Please click on the link below to fill online organizer. Should you need <br /> any assistance in filing up the organizer, do not hesistate to call us <br /> at +1 478-205-678 +91097568374 to schedule and appointment </p>
                    <button className="bg-[#1D2B47] text-sm font-medium h-10 lg:mt-7 rounded-lg p-2 cursor-pointer" onClick={handleButton}>TAX ORGANIXER FOR 2024 TAX YEAR</button>
                </div>
            </div>
        </>
    )
}