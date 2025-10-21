'use client';

import { useState } from "react";
import IncomePage from "./IncomePage";

type Tab = "Residency Details" | "Income Details" | "Deduction Details";

export default function Page() {
    const [activeTab, setActiveTab] = useState<Tab>("Income Details");

    return <IncomePage setActiveTab={setActiveTab} />;
}
