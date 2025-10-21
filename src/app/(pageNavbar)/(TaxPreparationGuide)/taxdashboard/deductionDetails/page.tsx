'use client';

import { useState } from "react";
import DeductionDetails from "./deductionsdetails";

type Tab = "Income Details" | "Deduction Details" | "FBAR/FATCA";

export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("Deduction Details");

  return <DeductionDetails setActiveTab={setActiveTab} />;
}
