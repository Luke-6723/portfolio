import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luke Stoodley - Software Engineer",
  description: "Based in Wiltshire UK, I'm a software engineer with a passion for frontend and backend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-slate-900"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
