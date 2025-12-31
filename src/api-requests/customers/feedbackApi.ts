import axios from "axios";
import { origin } from "../config";

export const postFeedback = async (data: any) => {
    try {
        const token = typeof window !== "undefined" ? localStorage.getItem("sb-wieinzdarxemefrzitog-auth-token") ??
            localStorage.getItem("token")
            : "";
        if (!token) {
            console.log("No token available here");
            return;
        }

        const res = await axios.post(`${origin}/api/v1/feedback/post`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error("Failed to post feedback");
        throw error;
    }
};
