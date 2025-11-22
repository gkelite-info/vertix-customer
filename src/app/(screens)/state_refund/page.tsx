"use client";

import TableComponent from "../../../../utils/table/page";


export default function StateRefund() {
    const stateRefundData = [
        { state: "Alabama (AL)", link: "https://myalabamataxes.alabama.gov/_/" },
        { state: "Alaska (AK)", link: "-" },
        { state: "Arizona (AZ)", link: "https://azdor.gov/transaction/check-refund-status" },
        { state: "Arkansas (AR)", link: "https://mytaxes.arkansas.gov/_/" },
        { state: "California (CA)", link: "https://www.ftb.ca.gov/online/where-is-my-refund.html" },
        { state: "Colorado (CO)", link: "https://www.colorado.gov/pacific/tax/where-my-refund" },
        { state: "Connecticut (CT)", link: "https://portal.ct.gov/DRS/Individuals/Check-Your-Refund-Status" },
        { state: "Delaware (DE)", link: "https://revenue.delaware.gov/" },
        { state: "District of Columbia (DC)", link: "https://mytax.dc.gov/_/" },
        { state: "Florida (FL)", link: "-" },
        { state: "Georgia (GA)", link: "https://gtc.dor.ga.gov/_/" },
        { state: "Hawaii (HI)", link: "https://tax.hawaii.gov/online/" },
        { state: "Idaho (ID)", link: "https://tax.idaho.gov/where-is-my-refund/" },
        { state: "Illinois (IL)", link: "https://mytax.illinois.gov/_/" },
        { state: "Indiana (IN)", link: "https://www.in.gov/dor/individual-income-taxes/check-the-status-of-your-refund/" },
        { state: "Iowa (IA)", link: "https://tax.iowa.gov/refunds" },
        { state: "Kansas (KS)", link: "https://www.ksrevenue.org/individualrefund.html" },
        { state: "Kentucky (KY)", link: "https://revenue.ky.gov/individuals/Pages/Check-Your-Refund.aspx" },
        { state: "Louisiana (LA)", link: "https://revenue.louisiana.gov/individuals/refund-status" },
        { state: "Maine (ME)", link: "https://www.maine.gov/revenue/" },
        { state: "Maryland (MD)", link: "https://www.marylandtaxes.gov/individual/refund-status.php" },
        { state: "Massachusetts (MA)", link: "https://www.mass.gov/how-to/check-the-status-of-your-refund" },
        { state: "Michigan (MI)", link: "https://www.michigan.gov/taxes/individuals/refund" },
        { state: "Minnesota (MN)", link: "https://www.revenue.state.mn.us/where-my-refund" },
        { state: "Mississippi (MS)", link: "https://tap.dor.ms.gov/_/" },
        { state: "Missouri (MO)", link: "https://www.dor.mo.gov/taxation/" },
        { state: "Montana (MT)", link: "https://tap.dor.mt.gov/_/" },
        { state: "Nebraska (NE)", link: "https://revenue.nebraska.gov/individuals" },
        { state: "Nevada (NV)", link: "-" },
        { state: "New Hampshire (NH)", link: "-" },
        { state: "New Jersey (NJ)", link: "https://www.state.nj.us/treasury/taxation/" },
        { state: "New Mexico (NM)", link: "https://www.tax.newmexico.gov/individuals/refund/" },
        { state: "New York (NY)", link: "https://www.tax.ny.gov/pit/file/refund.htm" },
        { state: "North Carolina (NC)", link: "https://www.ncdor.gov/refund-status" },
        { state: "North Dakota (ND)", link: "https://www.nd.gov/tax/individuals/refund-status" },
        { state: "Ohio (OH)", link: "https://tax.ohio.gov/wps/portal/gov/tax/individual" },
        { state: "Oklahoma (OK)", link: "https://oktap.tax.ok.gov/_/" },
        { state: "Oregon (OR)", link: "https://www.oregon.gov/dor/programs/Pages/individual-refund.aspx" },
        { state: "Pennsylvania (PA)", link: "https://www.patreasury.gov/online-services/refund/" },
        { state: "Rhode Island (RI)", link: "http://www.tax.ri.gov/" },
        { state: "South Carolina (SC)", link: "https://www.sctax.org/individuals/individual-income-tax" },
        { state: "South Dakota (SD)", link: "-" },
        { state: "Texas (TX)", link: "-" },
        { state: "Tennessee (TN)", link: "-" },
        { state: "Utah (UT)", link: "https://tax.utah.gov/refund" },
        { state: "Vermont (VT)", link: "https://tax.vermont.gov/online-services/refund-status" },
        { state: "Virginia (VA)", link: "https://www.tax.virginia.gov/refund-status" },
        { state: "Washington (WA)", link: "-" },
        { state: "West Virginia (WV)", link: "https://mytaxes.wv.gov/_/" },
        { state: "Wisconsin (WI)", link: "https://www.revenue.wi.gov/Pages/OnlineServices/WhereIsMyRefund.aspx" },
        { state: "Wyoming (WY)", link: "-" },
    ];

    const columns = ["State", "Standard Abbreviation"];
    const columnKeys = ["state", "link"];

    return (
        <>
            <div className="bg-white pb-7 flex flex-col items-center">
                <h5 className="text-[#1D2B48] text-lg font-semibold mt-4">State Refunds</h5>
                <div className="bg-green-00 w-full">
                    <TableComponent
                        data={stateRefundData}
                        columns={columns}
                        columnKeys={columnKeys}
                        style="w-[90%] lg:mt-3"
                        onUpdateClick={() => { }}
                    />
                </div>
            </div>

        </>

    );
}
