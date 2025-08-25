'use client';

import Header from "@/components/Header/page";


function Page() {
    return (
        <>
            <div className="lg:h-[100vh] flex flex-col justify-start">
                <div className="lg:h-[9%] sticky top-0 z-50 shadow-lg">
                    <Header />
                </div>
                <div className="flex flex-col bg-yellow-400 lg:p-4 overflow-y-auto">
                    Its research page
                </div>
            </div>
        </>
    )
}
export default Page;