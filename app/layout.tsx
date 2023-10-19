import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBnB",
  description: "AirBnB clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar currentUser={currentUser} />
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        {children}
      </body>
    </html>
  );
}
