"use client"

import { useRouter } from "next/navigation"
import YearSelect from "../../../../utils/yearSelect"
import { useState } from "react"
import toast from "react-hot-toast"
import { supabase } from "../../../../utils/supabase/client"
import { useYear } from "@/app/api/context/yearContext"

export default function AuthorizationConsent() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [date1, setDate1] = useState("")
  const [date2, setDate2] = useState("")
  const [taxPayerName, setTaxpayerName] = useState("")
  const [taxPayerSignature, setTaxPayerSignature] = useState("")
  const [jointTaxpayerName, setJointTaxpayerName] = useState("")
  const [jointTaxpayerSignature, setJointTaxpayerSignature] = useState("")

  const { selectedYear } = useYear()


  const handleNameInput = (value: string, setter: (val: string) => void) => {
    if (!/^[A-Za-z ]*$/.test(value)) return
    setter(value)
  }

  const handleDateInput = (value: string, setter: (val: string) => void) => {
    if (!/^[0-9/]*$/.test(value)) return
    if (value.length > 10) return
    setter(value)
  }

  const isValidDateFormat = (value: string) =>
    /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value)


  const handleAccept = async () => {
    setLoading(true)

    if (!taxPayerName.trim() || !taxPayerSignature.trim()) {
      toast.error("Please fill all required fields.")
      setLoading(false)
      return
    }

    if (!isValidDateFormat(date1)) {
      toast.error("Please enter valid date (DD/MM/YYYY).")
      setLoading(false)
      return
    }

    if (jointTaxpayerName || jointTaxpayerSignature || date2) {
      if (
        !jointTaxpayerName.trim() ||
        !jointTaxpayerSignature.trim() ||
        !isValidDateFormat(date2)
      ) {
        toast.error("Please complete joint taxpayer fields.")
        setLoading(false)
        return
      }
    }

    try {
      const { data: auth, error: authError } =
        await supabase.auth.getUser()

      if (authError || !auth?.user) {
        toast.error("User not logged in.")
        setLoading(false)
        return
      }

      const { data: customer, error: customerError } = await supabase
        .from("vertixcustomers")
        .select("customerId")
        .eq("auth_id", auth.user.id)
        .single()

      if (customerError || !customer) throw customerError
      const now = new Date().toISOString()

      const { error: consentError } = await supabase
        .from("consents")
        .insert({
          customerId: customer.customerId,
          filing_year: Number(selectedYear),
          taxpayer_name: taxPayerName,
          taxpayer_signature: taxPayerSignature,
          taxpayer_signed_at: new Date(
            date1.split("/").reverse().join("-")
          ),
          joint_taxpayer_name: jointTaxpayerName || null,
          joint_taxpayer_signature: jointTaxpayerSignature || null,
          joint_taxpayer_signed_at: date2
            ? new Date(date2.split("/").reverse().join("-"))
            : null,
          createdAt: now,
          updatedAt: now,
        })

      if (consentError) throw consentError

      toast.success("Consent accepted successfully!")
      router.push("/taxfiling?tab=preparationguide")
    } catch (err: any) {
      toast.error(err.message || "Failed to submit consent.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className="bg-white pb-7">
        <YearSelect />
        <div className="bg-red-00 flex flex-col overflow-y-auto justify-start items-center lg:pt-5 text-center">
          <div className="bg-green-00 overflow-y-auto max-h-[72.5vh] flex flex-col w-[90%] text-center">
            <h2 className="font-semibold text-[#1D2B48] text-lg">User</h2>
            <p className="text-start text-xs mt-5 text-[#616161]">
              Federal law requires this consent form be provided to you. Unless
              authorized by law, we cannot use, without your consent, your tax{" "}
              <br /> return information for purposes other than the preparation
              and fling of your tax return.
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              You are not required to complete this form. If we obtain your
              signature on this form by conditioning our services on your
              consent, <br /> your consent will not be valid. Your consent is
              valid for the amount of time that you specify. If you do not
              specify the duration of <br /> your consent, your consent is valid
              for one year
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              Duration of Consent: 1 year(s)
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              If you give your consent, then you may still have your tax return
              prepared and electronically filed by us for a fee
            </p>
            <p className="text-start text-xs mt-2 text-[#616161]">
              By signing below, you including each of you it there is more than
              one taxpayer authorize us to use the information you provide to
              us during the preparation of your {selectedYear} tax return to determine
              whether to present you with the opportunity to apply for these
              products and services.
            </p>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Name of taxpayer :{" "}
              </p>
              <input
                type="text"
                value={taxPayerName}
                onChange={(e) =>
                  handleNameInput(e.target.value, setTaxpayerName)
                }
                className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
              />
            </div>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Taxpayer Signature :{" "}
              </p>
              <input
                type="text"
                value={taxPayerSignature}
                onChange={(e) =>
                  handleNameInput(e.target.value, setTaxPayerSignature)
                }
                className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
              />
              <p className="text-start text-xs mt-2 text-[#616161] ml-3">
                Date :{" "}
              </p>
              <input
                type="text"
                value={date1}
                onChange={(e) =>
                  handleDateInput(e.target.value, setDate1)
                }
                className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
              />
            </div>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Name of Joint taxpayer :{" "}
              </p>
              <input
                type="text"
                value={jointTaxpayerName}
                onChange={(e) =>
                  handleNameInput(e.target.value, setJointTaxpayerName)
                }
                className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
              />
            </div>
            <div className="flex mt-3">
              <p className="text-start text-xs mt-2 text-[#616161]">
                Joint Taxpayer Signature :{" "}
              </p>
              <input
                type="text"
                value={jointTaxpayerSignature}
                onChange={(e) =>
                  handleNameInput(e.target.value, setJointTaxpayerSignature)
                }
                className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
              />
              <p className="text-start text-xs mt-2 text-[#616161] ml-3">
                Date :{" "}
              </p>
              <input
                type="text"
                value={date2}
                onChange={(e) =>
                  handleDateInput(e.target.value, setDate2)
                }
                className="text-[#1D2B48] w-[19%] text-xs border border-b-1 border-l-0 border-r-0 border-t-0 focus:outline-none ml-2"
              />
            </div>
            <p className="text-start text-xs mt-5 text-[#616161]">
              If you believe your tax return information has been disclosed or
              used improperty in a manner unauthorized by law or without your
              permission, you may contact the Treasury Inspector General for Tax
              Administration (TIGTA) byl
            </p>
          <button
            onClick={handleAccept}
            disabled={loading}
            className="bg-[#1D2B48] self-center w-[20%] rounded-lg px-5 py-2 mt-10 cursor-pointer text-white"
          >
            {loading ? "Submitting..." : "Submit Consent"}
          </button>
          </div>
        </div>
      </div>
    </>
  )
}
