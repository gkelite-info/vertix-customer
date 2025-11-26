"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase/client";

export default function SupabaseSessionProvider({ children }: { children: React.ReactNode }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const restore = async () => {
            const refresh = localStorage.getItem("refresh_token");
            if (refresh) {
                try {
                    await supabase.auth.setSession({
                        refresh_token: refresh,
                        access_token: ""
                    });
                    console.log("🔄 Supabase session restored");
                } catch (err) {
                    console.error("Failed to restore session", err);
                }
            }
            setLoaded(true);
        };

        restore();
    }, []);

    if (!loaded) return null;

    return <>{children}</>;
}
