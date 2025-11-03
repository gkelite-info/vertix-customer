"use client";

import { useEffect, useRef, useState } from "react";
import YearSelect from "../../../../utils/yearSelect";
import toast from "react-hot-toast";
import { deleteUserDocument, getDocumentDownloadUrl, getUserDocuments, uploadUserDocument } from "@/app/api/SupabaseAPI/customer/documentUploadAPI";
import { useAuth } from "@/components/AuthContext";
import TableComponent from "../../../../utils/table/page";
import DeleteModal from "@/components/modals/deleteModal";
import { useYear } from "@/app/api/context/yearContext";
import { DownloadSimple, Trash } from "phosphor-react";

export default function MyDocuments() {
  const { selectedYear, filingYearId } = useYear();
  const { user } = useAuth();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedDocType, setSelectedDocType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uploadedDocTypes, setUploadedDocTypes] = useState<string[]>([]);
  const [documents, setDocuments] = useState<Record<string, any>[]>([]);
  const [fetchingDocs, setFetchingDocs] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [fileToDelete, setFileToDelete] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loadingDownload, setLoadingDownload] = useState<number | null>(null);

  const handleDownload = async (filePath: string, index: number) => {
    try {
      setLoadingDownload(index);
      const url = await getDocumentDownloadUrl(filePath);
      window.open(url, "_blank");
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download file");
    } finally {
      setLoadingDownload(null);
    }
  };

  useEffect(() => {
    if (!user || !filingYearId) {
      setDocuments([]);
      setUploadedDocTypes([]);
      setFetchingDocs(false);
      return;
    }
    const fetchDocs = async () => {
      setFetchingDocs(true)
      try {
        const res = await getUserDocuments(filingYearId);
        setDocuments(res || []);
        setUploadedDocTypes((res || []).map((doc) => doc.doc_type));
      } catch (error) {
        console.error("Error fetching documents:", error);
        setDocuments([]);
        setUploadedDocTypes([]);
      } finally {
        setFetchingDocs(false)
      }
    }

    fetchDocs();
  }, [user, filingYearId]);

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
      toast.error("Please select a file and document type");
      return;
    }

    if (filingYearId === null) {
      toast.error("Filing year is still loading. Please wait a second.");
      return;
    }

    if (uploadedDocTypes.includes(selectedDocType)) {
      toast.error("This document type is already uploaded");
      return;
    }

    try {
      setIsLoading(true);
      const uploadedDoc = await uploadUserDocument(
        selectedFile,
        selectedDocType,
        filingYearId,
        description
      );

      if (uploadedDoc) {
        toast.success("File uploaded and saved successfully");
        setDocuments((prev) => [uploadedDoc, ...prev]);
        setUploadedDocTypes((prev) => [...prev, uploadedDoc.doc_type]);
        setSelectedFile(null);
        setSelectedDocType("");
        setDescription("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (error: any) {
      toast.error("Upload failed: " + error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (filePath: string) => {
    setFileToDelete(filePath)
    setIsDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!fileToDelete) return
    try {
      await deleteUserDocument(fileToDelete)
      toast.success("Document deleted successfully")
      setDocuments((prev) =>
        prev.filter((doc) => doc.file_path !== fileToDelete)
      )
      setUploadedDocTypes((prev) =>
        prev.filter(
          (type) =>
            type !==
            documents.find((doc) => doc.file_path === fileToDelete)?.doc_type
        )
      )
    } catch (err: any) {
      toast.error("Failed to delete: " + err.message)
    } finally {
      setIsDeleteModalOpen(false)
      setFileToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false)
    setFileToDelete(null)
  }

  const docTypeOptions = [
    "FBAR Organizer",
    "Tax Organizer Document",
    "W-2",
    "Interest Income",
    "Dividend Income",
    "1099-G",
    "1099-B",
    "1099-MISC",
    "Mortgage Interest",
    "1098-T",
    "Foreign Tax Certificates",
    "Indian Document",
    "Prior Year Tax Return",
    "ID",
    "Notice",
    "Others",
  ]
  const availableOptions = docTypeOptions.filter(
    (type) => !uploadedDocTypes.includes(type)
  )

  const columns = ["Document Type", "File", "Description"]
  const columnKeys = ["doc_type", "public_url", "description"]

  return (
    <div className="bg-white lg:h-[100vh] overflow-y-auto overflow-x-hidden pb-7">
      <YearSelect />
      <div className="bg-yellow-00 flex flex-col justify-start items-center lg:pt-5 text-center overflow-y-auto">
        <div className="bg-blue-00 flex items-center justify-between gap-3 h-12 w-[44%]">
          <div className="w-[45%]">
            <h5 className="text-[#1D2B48] font-medium">DOCUMENT TYPE :</h5>
          </div>
          <select
            className="border border-gray-300 text-[#616161] font-medium lg:w-[65%] px-2 text-sm lg:h-[85%] rounded cursor-pointer shadow-sm"
            value={selectedDocType}
            onChange={handleDocTypeChange}
          >
            <option value="">Select one</option>
            {availableOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-red-00 flex items-center justify-between gap-3 h-12 w-[44%] mt-3">
          <div className="w-[45%]">
            <h5 className="text-[#1D2B48] font-medium text-end pr-1.5">
              DOCUMENT :
            </h5>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="border border-gray-300 pt-1.5 text-[#616161] font-medium px-2 text-sm lg:w-[65%] lg:h-[85%] flex items-center rounded cursor-pointer shadow-sm file:mr-3 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 file:cursor-pointer"
          />
        </div>
        <div className="flex bg-pink-00 w-[44%] justify-center gap-3 mt-3">
          <div className="w-[45%] text-end pr-1.5">
            <h5 className="mt-3 font-medium text-[#1D2B48]">DESCRIPTIONS :</h5>
          </div>
          <div className="bg-green-00 w-[65%] flex flex-col items-center">
            <textarea
              placeholder="Comment about document"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-[100%] text-sm p-2 text-[#616161] border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            />
            <button
              onClick={handleUpload}
              disabled={isLoading || filingYearId === null}
              className="mt-4 font-medium w-[70%] text-sm bg-[#1D2B48] text-white py-2 rounded flex gap-2 justify-center items-center cursor-pointer"
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </div>
      </div>

      {documents.length > 0 && (
        <div className="mt-5 bg-green-00 overflow-x-auto w-full pb-3">
          <TableComponent
            data={documents}
            columns={["Document Type", "File", "Description"]}
            columnKeys={["doc_type", "public_url", "description"]}
            actions={(row, index) => (
              <>
                <button
                  onClick={() => handleDownload(row.file_path, index)}
                  className="text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  <DownloadSimple size={20} />
                </button>
                <button
                  onClick={() => handleDeleteClick(row.file_path)}
                  className="text-red-600 hover:text-red-800 cursor-pointer"
                >
                  <Trash size={20} />
                </button>
              </>
            )}
            onUpdateClick={() => console.log("Not used here")}
            onDelete={handleDeleteClick}
          />
        </div>
      )}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  )
}