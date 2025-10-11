"use client"

import { PaperPlaneTilt } from "phosphor-react"
import YearSelect from "../../../../utils/yearSelect"
import { useState } from "react";
import { postMessages } from "@/api-requests/customers/messagesApi";

interface MessageInput {
  content: string;
  year?: number;
}

export default function Chats() {

  const [message, setMessage] = useState<MessageInput>({ content: "", year: undefined });
  const [feedback, setFeedback] = useState("");

  const handleSend = async () => {
    if (!message.content.trim()) return;

    try {
      const res = await postMessages(message);
      console.log("Message sent", res);
      setFeedback("Message was sent successfully!");
      setMessage({ content: "", year: message.year });
      setTimeout(() => setFeedback(""), 3000);

    } catch (error) {
      console.error("Failed to send message");
      setFeedback("Failed to send message");
      throw error
    }
  }

  return (
    <>
      <div className="bg-white lg:h-[100vh] flex flex-col items-center">
        <YearSelect />
        <div className="bg-red-00 flex flex-col justify-start items-center lg:h-[80%] lg:w-[50%] lg:pt-5 text-center">
          <textarea
            placeholder="Hello! Please Leave Your Message"
            className="w-[80%] h-32 p-3 text-[#616161] text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={message.content}
            onChange={(e) => setMessage({ ...message, content: e.target.value })}
          />
          <button className="lg:mt-5 bg-[#1D2B48] text-white px-5 py-2 rounded-lg hover:bg-[#2c3e65] flex gap-2 justify-center items-center cursor-pointer"
            onClick={handleSend}
          >
            <PaperPlaneTilt size={17} weight="fill" className="text-white" />
            Send
          </button>
          {feedback && (
            <p className="mt-2 text-green-600 font-medium">{feedback}</p>
          )}
        </div>
      </div>
    </>
  )
}
