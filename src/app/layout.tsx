import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "@/components/modules/Shared/Sidebar";

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <div className="flex h-screen">
          <div className="z-50 fixed top-1/2 left-0 transform -translate-y-1/2 w-20 h-4/5 bg-gradient-to-b from-gray-100 to-gray-300 text-black flex flex-col justify-between rounded-lg shadow-lg ">
            <Sidebar />
          </div>
          <div className="w-full ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
