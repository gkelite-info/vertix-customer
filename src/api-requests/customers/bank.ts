import axios from "axios";
import { origin } from "../config";

const token = localStorage.getItem("token");

export const postBankInformation = async (data: any) => {
    try {
        const res = await axios.post(`${origin}/api/v1/bank/post`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error("Failed to post bank information", error);
        throw error;
    }
};

export const getBankInformation = async () => {
  try {
    const res = await axios.get(`${origin}/api/v1/bank`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: any) {
    console.error("Failed to fetch bank information", error);
    throw error;
  }
};

export const updateBankInformation = async (id: number, data: any) => {
    try {
        const res = await axios.patch(`${origin}/api/v1/bank/update/${id}`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res.data;
    } catch (error: any) {
        console.error("Failed to update bank information", error);
        throw error;
    }
};
