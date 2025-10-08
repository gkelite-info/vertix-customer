import axios from "axios";
import { origin } from "../config";


export const getCustomer = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No token found. Please log in again.");
        }

        const decoded = JSON.parse(atob(token.split(".")[1]));
        const customerId = decoded.id || decoded.customerId;

        const res = await axios.get(`${origin}/api/v1/vertix/customer/${customerId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return res.data.customer;
    } catch (error: any) {
        console.error("Error fetching customer:", error);
        throw error;
    }
};