"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase/client";


export default function AuthSessionLoader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = async () => {
      await supabase.auth.getSession();
      setReady(true);
    };

    check();
  }, []);

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return <>{children}</>;
}
