"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface YearContextType {
  selectedYear: string
  setSelectedYear: (year: string) => void
}

const YearContext = createContext<YearContextType | undefined>(undefined)

export const YearProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedYear, setSelectedYear] = useState<string>("")

  useEffect(() => {
    const year = localStorage.getItem("selectedYear")
    if (year) setSelectedYear(year)
  }, [])

  useEffect(() => {
    if (selectedYear) localStorage.setItem("selectedYear", selectedYear)
  }, [selectedYear])

  return (
    <YearContext.Provider value={{ selectedYear, setSelectedYear }}>
      {children}
    </YearContext.Provider>
  )
}

export const useYear = () => {
  const context = useContext(YearContext)
  if (!context) throw new Error("useYear must be used within YearProvider")
  return context
}
