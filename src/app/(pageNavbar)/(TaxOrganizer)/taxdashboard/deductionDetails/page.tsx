
import Contributions from "./contributions";
import DeductionAndRent from "./deduction";
import MedicalExpenses from "./medicalExpenses";


export default function DeductionDetails() {
    return (
        <>
            <div className="bg-red-00 ">
                <DeductionAndRent />
                <MedicalExpenses />
                <Contributions />
            </div>
        </>
    )
}