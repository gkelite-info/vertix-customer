'use client';
import toast from "react-hot-toast";

type TaxPayerInfoProps = {
  taxpayerEmployer: string;
  setTaxpayerEmployer: (value: string) => void;
  spouseEmployer: string;
  setSpouseEmployer: (value: string) => void;
};

export default function TaxPayerInfo({
  taxpayerEmployer,
  setTaxpayerEmployer,
  spouseEmployer,
  setSpouseEmployer,
}: TaxPayerInfoProps) {
  const validateEmployer = (value: string) => /[a-zA-Z]/.test(value);

  const onTaxpayerChange = (val: string) => {
    setTaxpayerEmployer(val);
    if (!validateEmployer(val)) {
      toast.error("Taxpayer Employer must contain at least one alphabet character");
    }
  };

  const onSpouseChange = (val: string) => {
    setSpouseEmployer(val);
    if (!validateEmployer(val)) {
      toast.error("Spouse Employer must contain at least one alphabet character");
    }
  };

  return (
    <div className="bg-pink-00 mt-2 w-[100%] flex flex-col">
      <div className="flex flex-col bg-red-00">
        <div className="border-b-1 border-[#1D2B48] flex items-center justify-start py-2">
          <h4 className="text-sm text-[#1D2B48] font-semibold">Taxpayer-Employment Info</h4>
        </div>
        <input
          type="text"
          value={taxpayerEmployer}
          onChange={(e) => onTaxpayerChange(e.target.value)}
          className="border border-[#B5B5B5] p-3 mt-4 w-[40%] rounded-lg text-xs text-[#616161] font-semibold"
          placeholder="Enter taxpayer employer"
        />
      </div>
      <div className="flex flex-col bg-red-00 mt-2">
        <div className="border-b-1 border-[#1D2B48] flex items-center justify-start py-2">
          <h4 className="text-sm text-[#1D2B48] font-semibold">Spouse - Employment Info</h4>
        </div>
        <input
          type="text"
          value={spouseEmployer}
          onChange={(e) => onSpouseChange(e.target.value)}
          className="border border-[#B5B5B5] p-3 mt-4 w-[40%] rounded-lg text-xs text-[#616161] font-semibold"
          placeholder="Enter spouse employer"
        />
      </div>
    </div>
  );
}
