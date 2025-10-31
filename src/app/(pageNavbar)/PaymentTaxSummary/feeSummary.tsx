import FeeSummaryTable from "../../../../utils/calculationsTable/page";



export default function FeeSummary() {

    const mockData = [
        { id: 1, description: "Consultation Fee", baseFee: 0 },
        { id: 2, description: "Processing Fee", baseFee: 0 },
        { id: 3, description: "Filing Fee", baseFee: 0 },
    ];

    return (
        <>
            <div className="flex flex-col items-center lg:pt-5 pb-7 bg-pink-00 overflow-y-auto">
                <div className="flex items-center gap-5">
                    <h3 className="text-[#1D2B48] font-semibold text-lg">Fee Summary</h3>
                    <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-sm py-1 px-3 rounded-lg text-white font-medium">Log</button>
                </div>
                <FeeSummaryTable data={mockData} />
            </div>
        </>
    )
}