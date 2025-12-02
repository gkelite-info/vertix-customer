'use client';

import { useState } from "react";
import IncomePage from "./IncomePage";
import { Tab } from "../aboutyou/aboutYou";


export default function Page() {
    const [activeTab, setActiveTab] = useState<Tab>("Income Details");

    return <IncomePage setActiveTab={setActiveTab} />;
}
