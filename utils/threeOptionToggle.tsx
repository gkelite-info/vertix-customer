"use client";
import { useState } from "react";

type ThreeOptionToggleProps = {
  options: string[];
  initial?: string;
  onChange?: (selected: string) => void;
};

export default function ThreeOptionToggle({
  options,
  initial = "",
  onChange,
}: ThreeOptionToggleProps) {
  const [selected, setSelected] = useState(initial);

  const handleClick = (option: string) => {
    setSelected(option);
    if (onChange) onChange(option);
  };

  return (
    <div className="flex w-[35%]">
      {options.map((option, index) => {
        const isActive = selected === option;

        let roundedClass = "";
        if (index === 0) roundedClass = "rounded-l-sm";
        else if (index === options.length - 1) roundedClass = "rounded-r-sm";

        return (
          <div
            key={option}
            onClick={() => handleClick(option)}
            className={`flex-1 flex items-center border-1 border-[#BCBCBC] justify-center cursor-pointer py-1 transition-colors ${
              isActive
                ? "bg-[#2F3F5F] text-[#FFFEFE]"
                : "bg-[#E8E8E8] text-[#3E3E3E]"
            } ${roundedClass}`}
          >
            <p className="text-xs font-medium">{option}</p>
          </div>
        );
      })}
    </div>
  );
}
