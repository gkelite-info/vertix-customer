import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  customerId: string; // customerId
  name: string;       // user name
  email?: string;     // optional
  exp?: number;       // expiry
}

export const getUserFromToken = (): TokenPayload | null => {
  const token = typeof window !== "undefined" ? localStorage.getItem("sb-wieinzdarxemefrzitog-auth-token") ??
    localStorage.getItem("token")
    : "";
  if (!token) return null;

  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
