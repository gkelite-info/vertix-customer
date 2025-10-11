"use client";

import {
  CalendarDots,
  ChatCenteredText,
  ClipboardText,
  Cloud,
  File,
  FileArrowUp,
  Files,
  Folder,
  Upload,
  UserPlus,
} from "@phosphor-icons/react";
import { ChatCircleText } from "phosphor-react";

type PageNavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

function Page({ activeTab, setActiveTab }: PageNavbarProps) {
  const tabs = [
    { id: "service", label: "Manage Filing Year", icon: CalendarDots, width: "lg:w-[100%]" },
    { id: "file-status", label: "Filing Progress Tracker", icon: Files, width: "lg:w-[100%]" },
    { id: "organizer", label: "Tax Preparation Guide", icon: Folder, width: "lg:w-[100%]" },
    { id: "uploaded-by-vertix", label: "Document Uploaded by Vertix", icon: Upload, width: "lg:w-[100%]" },
    { id: "summary", label: "Payment & Tax Summary", icon: FileArrowUp, width: "lg:w-[100%]" },
    { id: "bank-info", label: "Banking Details", icon: ClipboardText, width: "lg:w-[100%]" },
    { id: "uploaded", label: "My Documents", icon: Cloud, width: "lg:w-[100%]" },
    { id: "refer", label: "Refer a Friend", icon: UserPlus, width: "lg:w-[100%]" },
    { id: "messages", label: "Chats or Secure Messaging", icon: ChatCenteredText, width: "lg:w-[100%]" },
    { id: "feedback", label: "Feedback", icon: ChatCircleText, width: "lg:w-[100%]" },
    { id: "consent", label: "Authorization & Consent Form", icon: File, width: "lg:w-[100%]" },
  ];

  return (
    <div className="flex flex-col bg-[#1D2B48] lg:p-2 items-center justify-center sticky z-50">
      <div className="bg-[#FFFEFE] lg:w-[90%] lg:h-[90%] rounded-lg lg:p-3 flex flex-col lg:gap-2 items-start justify-between">
        {tabs.map(({ id, label, icon: Icon, width }) => {
          const isActive = activeTab === id;
          return (
            <div
              key={id}
              onClick={() => setActiveTab(id)}
              className={`cursor-pointer flex items-center justify-start lg:gap-3 rounded-lg px-3 lg:h-[40%] ${width} 
                ${isActive ? "bg-[#1D2B48] text-white" : "bg-[#E8E8E8] text-[#1D2B48]"}`}
            >
              <Icon size={23} weight="fill" className={isActive ? "text-white" : "text-[#1D2B48]"} />
              <span className="text-sm">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
