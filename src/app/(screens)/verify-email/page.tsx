"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { supabase } from "../../../../utils/supabase/client";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;

        if (data?.session) {
          toast.success("Email verified successfully! Redirecting...");
          // Wait 2 seconds so user can see toast
        //   setTimeout(() => {
        //     router.push("/login"); // or "/login" if you prefer
        //   }, 2000);
        window.close();
        } else {
          toast.error("Invalid or expired verification link.");
          router.push("/");
        }
      } catch (err: any) {
        console.error(err);
        toast.error(err.message || "Something went wrong.");
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      {loading ? (
        <p className="text-lg text-gray-700">Verifying your email...</p>
      ) : (
        <p className="text-lg text-green-600">Email verified! Redirecting...</p>
      )}
    </div>
  );
}
