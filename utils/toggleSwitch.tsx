"use client"
import React from "react"

type ToggleSwitchProps = {
  value?: boolean
  labelLeft?: string
  labelRight?: string
  onToggle?: (value: boolean) => void
}

export default function ToggleSwitch({
  value = false,
  labelLeft = "No",
  labelRight = "Yes",
  onToggle,
}: ToggleSwitchProps) {
  const handleToggle = () => {
    if (onToggle) onToggle(!value)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-[#2F3F5F]">{labelLeft}</span>

      <button
        type="button"
        onClick={handleToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${value ? "bg-blue-500" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${value ? "translate-x-6" : "translate-x-0"}`}
        ></div>
      </button>

      <span className="text-sm font-semibold text-[#2F3F5F]">{labelRight}</span>
    </div>
  )
}
