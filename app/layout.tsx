import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import ClientOnly from "./components/ClientOnly";
import SearchModal from "./components/modals/SearchModal";

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
        <ClientOnly>
          <NavBar currentUser={currentUser} />
          <ToasterProvider />
          <RegisterModal />
          <SearchModal />
          <LoginModal />
          <RentModal />
        </ClientOnly>

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
