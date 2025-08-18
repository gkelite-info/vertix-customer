'use client';
import Header from "@/components/Header/page";


function Page() {
  return (
    <>
      <div className="flex flex-col bg-blue-400 lg:h-[100vh] overflow-y-auto">
        <div className="lg:h-[9%]">
          <Header />
        </div>
        <div className="flex justify-center items-center bg-yellow-00 lg:h-[91%]">
          <h1 className="font-semibold text-5xl bg-green-00">Vertix Tax Solutions</h1>
        </div>
      </div>
    </>
  )
}

export default Page