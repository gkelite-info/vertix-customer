


export default function TaxPayerInfo() {
    return (
        <>
            <div className="bg-pink-00 mt-2 w-[100%] flex flex-col">
                <div className="flex flex-col bg-red-00">
                    <div className="border-b-1 border-[#1D2B48] flex items-center justify-start py-2">
                        <h4 className="text-sm text-[#1D2B48] font-semibold">Taxpayer-Employment Info</h4>
                    </div>
                    <div className="border border-[#B5B5B5] p-3 mt-4 w-[40%] rounded-lg">
                        <h5 className="text-[#616161] font-semibold text-xs">GLOBALLOGIC INC</h5>
                    </div>
                </div>
                <div className="flex flex-col bg-red-00 mt-2">
                    <div className="border-b-1 border-[#1D2B48] flex items-center justify-start py-2">
                        <h4 className="text-sm text-[#1D2B48] font-semibold">Spouse - Employment Info</h4>
                    </div>
                    <div className="border border-[#B5B5B5] p-3 mt-4 w-[40%] rounded-lg">
                        <h5 className="text-[#616161] font-semibold text-xs">Capgemini America, Inc.</h5>
                    </div>
                </div>
            </div>
        </>
    )
}