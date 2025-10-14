import axios from "axios";
import { origin } from "../config";

interface RegisterData {
    email: string;
    password: string;
    name?: string;
}

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

export const registerCustomer = async (data: RegisterData) => {
    try {
        const res = await axios.post(`${origin}/api/v1/vertix/customer/register`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res.data;
    } catch (error: any) {
        console.error("Error registering customer:", error.response?.data || error.message);
        throw error;
    }
};