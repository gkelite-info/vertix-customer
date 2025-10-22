"use client"

import { useEffect, useState } from "react"
import YearSelect from "../../../../utils/yearSelect"
import toast from "react-hot-toast"
<<<<<<< Updated upstream
=======
import { getUserDocuments, uploadUserDocument } from "@/app/api/SupabaseAPI/customer/documentUploadAPI"
>>>>>>> Stashed changes

export default function MyDocuments() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedDocType, setSelectedDocType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uploadedDocTypes, setUploadedDocTypes] = useState<string[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleDocTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocType(e.target.value)
  }

<<<<<<< Updated upstream
=======
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const docs = await getUserDocuments()
        const uploadedTypes = docs.map(doc => doc.doc_type)
        setUploadedDocTypes(uploadedTypes)
      } catch (err) {
        console.error("Error fetching documents:", err)
      }
    }
    fetchDocuments()
  }, [])

>>>>>>> Stashed changes
  const handleUpload = async () => {
    if (!selectedFile || !selectedDocType) {
      toast.error("Please select a file and document type");
      return;
    }

    if (uploadedDocTypes.includes(selectedDocType)) {
      toast.error("This document type is already uploaded");
      return;
    }

    const userId = localStorage.getItem("userId")
    if (!userId) {
      toast.error("User not logged in")
      return
    }

    const formData = new FormData()
    formData.append("file", selectedFile)
    formData.append("docType", selectedDocType)
    formData.append("userId", userId)

    try {
<<<<<<< Updated upstream
      const res = await fetch("/uploads/upload", {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      toast.success("File uploaded successfully: " + data.photoURL)
    } catch (err) {
      console.error(err)
      toast.error("Upload failed")
=======
      const uploadedDoc = await uploadUserDocument(
        selectedFile,
        selectedDocType,
        description
      );

      if (uploadedDoc) {
        toast.success("File uploaded and saved successfully");
        setSelectedFile(null);
        setSelectedDocType("");
        setDescription("");
      }
    } catch (error: any) {
      toast.error("Upload failed: " + error.message);
      console.error(error);
>>>>>>> Stashed changes
    }
  };

  const docTypeOptions = [
    "FBAR Organizer", "Tax Organizer Document", "W-2", "Interest Income", "Dividend Income", "1099-G",
    "1099-B", "1099-MISC", "Mortgage Interest", "1098-T", "Foreign Tax Certificates",
    "Indian Document", "Prior Year Tax Return", "ID", "Notice", "Others",
  ]

  const availableOptions = docTypeOptions.filter(type => !uploadedDocTypes.includes(type))

  return (
    <>
      <div className="bg-white lg:h-[100vh]">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:pt-5 text-center">
          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[44%]">
            <div className="w-[45%]">
              <h5 className="text-[#1D2B48] font-medium">DOCUMENT TYPE :</h5>
            </div>
            <select
              className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] rounded cursor-pointer shadow-sm"
              value={selectedDocType}
              onChange={handleDocTypeChange}
            >
<<<<<<< Updated upstream
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
              <option value="foreignTaxCertificates">
                Foreign Tax Certificate
              </option>
              <option value="indianDocument">Indian Document</option>
              <option value="priorYearTaxReturn">Prior Year Tax Return</option>
              <option value="id">ID</option>
              <option value="notice">Notice/Letter</option>
              <option value="others">Others</option>
=======
              <option value="">Select one</option>
              {availableOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
>>>>>>> Stashed changes
            </select>
          </div>

          <div className="bg-red-00 flex items-center justify-between gap-3 h-[10%] w-[44%] mt-3">
            <div className="w-[45%]">
              <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
                DOCUMENT :
              </h5>
            </div>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="border border-gray-300 pt-1.5 text-[#616161] font-medium px-2 text-sm lg:w-[65%] lg:h-[85%] flex items-center rounded cursor-pointer shadow-sm file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
            />
          </div>
          <div className="flex bg-pink-00 w-[44%] justify-center gap-3 mt-3">
            <div className="w-[45%] bg-white text-end pr-1.5">
              <h5 className="mt-3 font-medium text-[#1D2B48]">
                DESCRIPTIONS :
              </h5>
            </div>
            <div className="bg-green-00 w-[65%] flex flex-col items-center">
              <textarea
                placeholder="Comment about document"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[100%] text-sm p-3 text-[#616161] border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
              />
              <button
                className="mt-4 font-medium w-[75%] text-sm bg-[#1D2B48] text-white px-5 py-2 rounded-lg flex gap-2 hover:bg-[#2c3e65] justify-center items-center cursor-pointer"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
