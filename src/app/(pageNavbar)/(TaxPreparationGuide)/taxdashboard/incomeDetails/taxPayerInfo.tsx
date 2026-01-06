'use client';
import toast from "react-hot-toast";

type TaxPayerInfoProps = {
  taxpayerEmployer: string[];
  setTaxpayerEmployer: (value: string[]) => void;
  spouseEmployer: string[];
  setSpouseEmployer: (value: string[]) => void;
  taxpayerCount: number;
  spouseCount: number;
};

export default function TaxPayerInfo({
  taxpayerEmployer,
  setTaxpayerEmployer,
  spouseEmployer,
  setSpouseEmployer,
  taxpayerCount,
  spouseCount
}: TaxPayerInfoProps) {
  const validateEmployer = (value: string) => /[a-zA-Z]/.test(value);



  return (
    <div className="bg-pink-00 mt-2 w-[100%] flex flex-col">
      <div className="flex flex-col bg-red-00">
        <div className="border-b-1 border-[#1D2B48] flex items-center justify-start py-2">
          <h4 className="text-sm text-[#1D2B48] font-semibold">Taxpayer-Employment Info</h4>
        </div>
        {Array.from({ length: taxpayerCount }).map((_, i) => (
          <input
            key={i}
            type="text"
            value={taxpayerEmployer[i] || ""}
            onChange={(e) => {
              // const updated = [...taxpayerEmployer];
              const updated = Array.isArray(taxpayerEmployer)
                ? [...taxpayerEmployer]
                : [];

              updated[i] = e.target.value;

              if (!validateEmployer(e.target.value)) {
                toast.error("Taxpayer employer must contain at least one alphabet");
              }

              setTaxpayerEmployer(updated);
            }}
            className="border border-[#B5B5B5] p-3 mt-4 w-[40%] rounded-lg text-xs text-[#616161] font-semibold focus:outline-none"
            placeholder={`Enter taxpayer employer ${i + 1}`}
          />
        ))}
      </div>
      <div className="flex flex-col bg-red-00 mt-5">
        <div className="border-b-1 border-[#1D2B48] flex items-center justify-start py-2">
          <h4 className="text-sm text-[#1D2B48] font-semibold">Spouse - Employment Info</h4>
        </div>
        {Array.from({ length: spouseCount }).map((_, i) => (
          <input
            key={i}
            type="text"
            value={spouseEmployer[i] || ""}
            onChange={(e) => {
              // const updated = [...spouseEmployer];
              const updated = Array.isArray(spouseEmployer)
                ? [...spouseEmployer]
                : [];

              updated[i] = e.target.value;

              if (!validateEmployer(e.target.value)) {
                toast.error("Spouse employer must contain at least one alphabet");
              }

              setSpouseEmployer(updated);
            }}
            className="border border-[#B5B5B5] p-3 mt-4 w-[40%] rounded-lg text-xs text-[#616161] font-semibold focus:outline-none"
            placeholder={`Enter spouse employer ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
