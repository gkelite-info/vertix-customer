"use client"

import { PaperPlaneTilt } from "phosphor-react"
import YearSelect from "../../../../utils/yearSelect"

function Messages() {
  return (
    <>
      <div className="bg-white lg:h-[100vh] flex flex-col items-center">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:w-[40%] lg:pt-5 text-center">
          <textarea
            placeholder="Hello! Please Leave Your Message"
            className="w-[80%] h-32 p-3 text-[#616161] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="mt-3 bg-[#1D2B48] text-white px-5 py-2 rounded-lg hover:bg-[#2c3e65] flex gap-2 justify-center items-center cursor-pointer">
            <PaperPlaneTilt size={17} weight="fill" className="text-white" />
            Send
          </button>
        </div>
      </div>
    </>
  )
}
export default Messages
