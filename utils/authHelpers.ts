import jwt_decode from "jwt-decode"; 


interface TokenPayload {
  customerId: string;        // customerId
  name: string;      // user name
  email?: string;    // optional
  exp?: number;      // expiry
}

export const getUserFromToken = (): TokenPayload | null => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwt_decode<TokenPayload>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
