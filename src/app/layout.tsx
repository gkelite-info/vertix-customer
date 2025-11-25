
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import ClientLayout from "./ClientLayout"
import { AuthProvider } from "@/components/AuthContext"
import { YearProvider } from "./api/context/yearContext"
import ProtectedRoute from "../../utils/ProtectedRoute"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vertix Tax Solutions",
  description: "Expert tax filing, amendments, ITIN services, IRS representation and more.",
  keywords: [
    "US Tax Filing",
    "Tax Amendments",
    "ITIN Application",
    "IRS Issues",
    "Tax Solutions",
    "Vertix Tax",
    "Business Tax Filing",
    "Individual Tax Filing"
  ],
  icons: [
    {
      rel: "icon",
      url: "/seo_logo_dark.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/seo_logo_light.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <ProtectedRoute>
          <AuthProvider>
            <YearProvider>
              <ClientLayout>{children}</ClientLayout>
              <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                  className: "",
                  style: {
                    fontSize: "18px",
                  },
                }}
              />
            </YearProvider>
          </AuthProvider>
        </ProtectedRoute>
      </body>
    </html>
  )
}
