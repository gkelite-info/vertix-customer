"use client";
import React from "react";

type ThreeOptionToggleProps = {
  options: string[];
  value: string;
  onChange: (selected: string) => void;
  style?: string;
  disabled?: boolean;
};

export default function ThreeOptionToggle({
  options,
  value,
  onChange,
  style = "w-[35%]",
  disabled = false
}: ThreeOptionToggleProps) {
  return (
    <div className={`flex ${style} ${disabled && "cursor-not-allowed"}`}>
      {options.map((option, index) => {
        const isActive = value === option;

        let roundedClass = "";
        if (index === 0) roundedClass = "rounded-l-sm";
        else if (index === options.length - 1) roundedClass = "rounded-r-sm";

        return (
          <div
            key={option}
            onClick={() => !disabled && onChange(option)}
            className={`flex-1 flex items-center border border-[#BCBCBC] justify-center cursor-pointer py-1 transition-colors
              ${isActive
                ? "bg-[#2F3F5F] text-[#FFFEFE]"
                : "bg-[#E8E8E8] text-[#3E3E3E]"
              } ${roundedClass}`}
          >
            <p className={`text-xs font-medium ${disabled && "cursor-not-allowed"}`}>{option}</p>
          </div>
        );
      })}
    </div>
  );
}
