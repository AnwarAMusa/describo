import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Describo",
  description: "AI to describe products in visual media.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <div className="max-w-[1100px] mx-auto min-h-screen flex flex-col ">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
