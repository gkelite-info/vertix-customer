"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
// Import the decoder - you'll need to install this package
import { jwtDecode } from "jwt-decode"; 

// 1. Define the User data structure
interface User {
    customerId: string; // The ID you need
    name: string;       // The name you need for 'updatedBy'
    // Add other fields from your JWT payload as needed
}

// 2. Update AuthContextType
interface AuthContextType {
    isAuthenticated: boolean;
    // New: User data, can be null if not authenticated
    user: User | null; 
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Utility function to decode the token
const decodeToken = (token: string): User | null => {
    try {
        // Assuming your JWT payload has 'customerId' and 'name'
        const decoded = jwtDecode(token) as { customerId: string, name: string };
        return {
            customerId: decoded.customerId,
            name: decoded.name,
        };
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // 3. New: State for user data
    const [user, setUser] = useState<User | null>(null); 

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const userData = decodeToken(token);
            if (userData) {
                setIsAuthenticated(true);
                setUser(userData); // Set user data on initial load
            } else {
                 // Clear invalid token
                localStorage.removeItem("token");
            }
        }
    }, []);

    const login = (token: string) => {
        const userData = decodeToken(token);
        if (userData) {
            localStorage.setItem("token", token);
            setIsAuthenticated(true);
            setUser(userData); // Set user data on login
        }
    };

    const logout = async () => {
        // ... (Your existing logout API call logic) ...

        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null); // Clear user data on logout
    };
    
    // 4. Provide the user data
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};