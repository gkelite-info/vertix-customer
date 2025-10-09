"use client";
import { useState } from "react";

type ToggleSwitchProps = {
  initial?: boolean;
  labelLeft?: string;
  labelRight?: string;
};

export default function ToggleSwitch({
  initial = false,
  labelLeft = "No",
  labelRight = "Yes",
}: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(initial);

  const handleToggle = () => setIsOn((prev) => !prev);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium text-gray-700">{labelLeft}</span>
      <div
        onClick={handleToggle}
        className={`w-14 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
            isOn ? "translate-x-7.5" : "translate-x-0"
          }`}
        ></div>
      </div>
      <span className="text-xs font-medium text-gray-700">{labelRight}</span>
    </div>
  );
}
