import axios from "axios";
import { origin } from "../config";


export const postMessages = async (data: { content: string; year?: number }) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("No token available here")
            return
        }
        const res = await axios.post(`${origin}/api/v1/messages/post`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data;

    } catch (error) {
        console.error("Failed to post message")
        throw error
    }
}