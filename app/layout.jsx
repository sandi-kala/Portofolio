import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fortopolio Nur Aulia Firdausha",
  description: "Akuntansi",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>{children}</body>
    </html>
  )
}