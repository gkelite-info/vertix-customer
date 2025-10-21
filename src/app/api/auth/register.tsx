import axios from "axios";
import { origin } from "@/api-requests/config";

export const registerCustomer = async (data: any) => {
  try {
    const res = await axios.post(`${origin}/api/register`, data);
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err.message;
  }
};
