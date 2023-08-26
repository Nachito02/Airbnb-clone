"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBnB",
  description: "AirBnB clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        <RegisterModal />
        {children}
      </body>
    </html>
  );
}
