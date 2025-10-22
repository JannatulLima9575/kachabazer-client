import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Google Font setup
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KachaBazer | Your daily fresh market tracker",
  description: "Track today’s prices from your local market — only on KachaBazer.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 👇 এখানে font apply হবে */}
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}