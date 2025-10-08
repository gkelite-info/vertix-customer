"use client"

import { useState } from "react"
import YearSelect from "../../../../utils/yearSelect"

function DocumentUploaded() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedDocType, setSelectedDocType] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleDocTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocType(e.target.value)
  }

  const handleUpload = async () => {
    if (!selectedFile || !selectedDocType) {
      alert("Please select a file and document type")
      return
    }

    const userId = localStorage.getItem("userId")
    if (!userId) {
      alert("User not logged in")
      return
    }

    const formData = new FormData()
    formData.append("file", selectedFile)
    formData.append("docType", selectedDocType)
    formData.append("userId", userId)

    try {
      const res = await fetch("/uploads/upload", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      alert("File uploaded successfully: " + data.photoURL)
    } catch (err) {
      console.error(err)
      alert("Upload failed")
    }
  }


  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%]">
            <div className="w-[35%]">
              <h5 className="text-[#1D2B48] font-medium">DOCUMENT TYPE :</h5>
            </div>
            <select className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] rounded cursor-pointer shadow-sm"
              value={selectedDocType}
              onChange={handleDocTypeChange}
            >
              <option value="">SELECT ONE</option>
              <option value="fbar">FBAR Organizer</option>
              <option value="tacOrganizer">Tax Organizer Document</option>
              <option value="w2">W-2</option>
              <option value="interestIncome">Interest Income</option>
              <option value="dividendIncome">Dividend Income</option>
              <option value="1099-g">1099-G</option>
              <option value="1099-b">1099-B</option>
              <option value="1099-misc">1099-MISC</option>
              <option value="mortgageInterest">Mortgage Interest</option>
              <option value="1098-t">1098-T</option>
              <option value="foreignTaxCertificates">Foreign Tax Certificate</option>
              <option value="indianDocument">Indian Document</option>
              <option value="priorYearTaxReturn">Prior Year Tax Return</option>
              <option value="id">ID</option>
              <option value="notice">Notice/Letter</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[35%] mt-3">
            <div className="w-[35%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                DOCUMENT :
              </h5>
            </div>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 pt-1.5 text-[#616161] font-medium px-2 text-sm lg:w-[65%] lg:h-[85%] flex items-center rounded cursor-pointer shadow-sm file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
            />
          </div>
          <div className="flex bg-pink-00 w-[35%] justify-center gap-3 mt-3">
            <div className="w-[35%] bg-white text-end pr-1.5">
              <h5 className="mt-3 font-medium text-[#1D2B48]">
                DESCRIPTIONS :
              </h5>
            </div>
            <div className="bg-green-00 w-[65%] flex flex-col items-center">
              <textarea
                placeholder="Comment about document"
                className="w-[100%] text-sm h-32 p-3 text-[#616161] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="mt-4 font-medium w-[60%] text-sm bg-[#1D2B48] text-white px-5 py-2 rounded-lg flex gap-2 hover:bg-[#2c3e65] justify-center items-center cursor-pointer" onClick={handleUpload}>
                SUBMIT FEEDBACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DocumentUploaded;
