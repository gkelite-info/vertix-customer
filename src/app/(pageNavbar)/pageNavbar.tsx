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
    { id: "service", label: "Add Service Year", icon: CalendarDots, width: "lg:w-[18%]" },
    { id: "file-status", label: "File Status", icon: Files, width: "lg:w-[13%]" },
    { id: "organizer", label: "Tax Organizer", icon: Folder, width: "lg:w-[17%]" },
    { id: "uploaded-by-vertix", label: "Document Uploaded by Vertix", icon: Upload, width: "lg:w-[27%]" },
    { id: "summary", label: "Fee & Tax Summary", icon: FileArrowUp, width: "lg:w-[18%]" },
    { id: "bank-info", label: "Bank Information", icon: ClipboardText, width: "lg:w-[18%]" },
    { id: "uploaded", label: "Document Uploaded", icon: Cloud, width: "lg:w-[20%]" },
    { id: "refer", label: "Refer a Friend", icon: UserPlus, width: "lg:w-[14%]" },
    { id: "messages", label: "Messages", icon: ChatCenteredText, width: "lg:w-[12%]" },
    { id: "feedback", label: "Feedback", icon: ChatCircleText, width: "lg:w-[12%]" },
    { id: "consent", label: "Consent Form", icon: File, width: "lg:w-[15%]" },
  ];

  return (
    <div className="flex bg-[#1D2B48] lg:p-2 lg:h-35 lg:w-full items-center justify-center">
      <div className="bg-[#FFFEFE] lg:w-[90%] lg:h-[90%] rounded-lg lg:p-3 flex lg:gap-2 flex-wrap items-center justify-between">
        {tabs.map(({ id, label, icon: Icon, width }) => {
          const isActive = activeTab === id;
          return (
            <div
              key={id}
              onClick={() => setActiveTab(id)}
              className={`cursor-pointer flex items-center justify-center lg:gap-1 rounded-lg lg:h-[40%] ${width} 
                ${isActive ? "bg-[#1D2B48] text-white" : "bg-[#E8E8E8] text-[#1D2B48]"}`}
            >
              <Icon size={23} weight="fill" className={isActive ? "text-white" : "text-[#1D2B48]"} />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
