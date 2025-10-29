"use client"

import { useState } from "react"
import YearSelect from "../../../../utils/yearSelect"
import { postFeedback } from "@/api-requests/customers/feedbackApi"
import toast from "react-hot-toast"

export default function Feedback() {
  const [serviceType, setServiceType] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!serviceType || !message.trim()) {
      toast.error("Please select a service and enter your message")
      return
    }

    setLoading(true)
    try {
      const res = await postFeedback({ serviceType, message })
      console.log("Response:", res)
      toast.success("Feedback submitted successfully!")
      setServiceType("")
      setMessage("")
    } catch (err) {
      console.error("Error posting feedback:", err)
      toast.error("Something went wrong while submitting feedback")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <h2 className="font-semibold text-[#1D2B48] text-xl mt-3 mb-5">Feedback</h2>
          <div className="bg-red-00 flex items-center justify-between h-[10%] w-[44%]">
            <div className="w-[30%] h-[100%] flex items-center justify-center pl-1">
              <h5 className="text-[#1D2B48] bg-yellow-00 font-medium">Service :</h5>
            </div>
            <select className="border border-gray-300 text-[#616161] font-medium lg:w-[70%] px-2 text-sm lg:h-[85%] rounded cursor-pointer shadow-sm"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Select one</option>
              <option value="income_tax_filing">Income Tax Filing</option>
              <option value="gst_filing">GST Filing</option>
              <option value="tds_return">TDS Return Filing</option>
              <option value="tax_planning">Tax Planning & Consultation</option>
              <option value="audit_assistance">Audit Assistance</option>
              <option value="itr_revision">ITR Revision / Correction</option>
              <option value="business_registration">
                Business Registration (e.g., MSME, Startup India)
              </option>
              <option value="pan_tan_service">PAN / TAN Application</option>
              <option value="refund_status">Refund Tracking & Status</option>
              <option value="compliance_filing">
                Compliance Filing (ROC, etc.)
              </option>
            </select>
          </div>
          <div className="flex bg-pink-00 w-[44%] justify-between gap-3 mt-3">
            <h5 className="mt-3 font-medium text-[#1D2B48]">Description :</h5>
            <div className="bg-green-00 w-[70%] flex flex-col items-center">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your feedback"
                className="w-[100%] text-sm h-32 p-3 text-[#616161] border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit()
                  }
                }}
              />
              <button className="mt-4 font-medium w-[60%] text-sm bg-[#1D2B48] text-white px-5 py-2 rounded-lg flex gap-2 justify-center items-center cursor-pointer">
                {loading ? "Submitting..." : "SUBMIT FEEDBACK"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
