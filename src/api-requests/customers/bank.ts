import axios from "axios";
import { origin } from "../config";


export const postBankInformation = async (data: any) => {
    try {
        const res = await axios.post(`${origin}/api/v1/bank/post`, data);
        return res.data;
    } catch (error) {
        console.error("Failed to post bank information", error)
        throw error
    }
}

export const getBankInformation = async (customerId: number) => {
    try {
        const res = await axios.get(`${origin}/bank-information/${customerId}`);
        return res.data;
    } catch (error: any) {
        console.error("Failed to fetch bank information", error);
        throw error;
    }
};


export const updateBankInformation = async (id: number, data: any) => {
    try {
        const res = await axios.patch(`${origin}/bank-information/${id}`, data);
        return res.data;
    } catch (error: any) {
        console.error("Failed to update bank information", error);
        throw error;
    }
};