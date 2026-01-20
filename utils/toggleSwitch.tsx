"use client"
import React from "react"

type ToggleSwitchProps = {
  value?: boolean
  labelLeft?: string
  labelRight?: string
  onToggle?: (value: boolean) => void
  disabled?: boolean
}

export default function ToggleSwitch({
  value = false,
  labelLeft = "No",
  labelRight = "Yes",
  onToggle,
  disabled = false,
}: ToggleSwitchProps) {
  const handleToggle = () => {
    if (disabled) return
    if (onToggle) onToggle(!value)
  }

  return (
    <div className={`flex items-center gap-2 ${disabled && "cursor-not-allowed"}`}>
      <span className="text-sm font-semibold text-[#2F3F5F]">{labelLeft}</span>

      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${value ? "bg-blue-500" : "bg-gray-300"}`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${value ? "translate-x-6" : "translate-x-0"} ${disabled && "cursor-not-allowed"}`}
        ></div>
      </button>

      <span className="text-sm font-semibold text-[#2F3F5F]">{labelRight}</span>
    </div>
  )
}
