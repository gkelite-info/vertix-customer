"use client";

import { PaperPlaneTilt } from "phosphor-react";
import YearSelect from "../../../../utils/yearSelect";
import { useState } from "react";
import toast from "react-hot-toast";
import { upsertMessage } from "@/app/api/SupabaseAPI/customer/messagesAPI";
import { useYear } from "@/app/api/context/yearContext";

export default function Chats() {
  const { filingYearId } = useYear();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!content.trim()) {
      toast.error("Please enter a message before sending!");
      return;
    }

    if (!filingYearId) {
      toast.error("Please select a filing year first!");
      return;
    }

    try {
      setLoading(true);
      const res = await upsertMessage(content, filingYearId, "sent");
      toast.success("Message sent successfully!");
      setContent("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white lg:h-[100vh] flex flex-col items-center">
      <YearSelect />

      <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:w-[50%] lg:pt-5 text-center">
        <h2 className="font-semibold text-[#1D2B48] text-xl mt-3 mb-5">
          Message
        </h2>

        <textarea
          placeholder="Hello! Please leave your message"
          className="w-[80%] h-32 p-3 text-[#616161] text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          disabled={loading}
          onClick={handleSend}
          className={`lg:mt-5 bg-[#1D2B48] text-white px-5 py-2 rounded-lg flex gap-2 justify-center items-center cursor-pointer ${loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
        >
          <PaperPlaneTilt size={17} weight="fill" className="text-white" />
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
