import type { Metadata } from "next";
import { El_Messiri } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
});

export const metadata: Metadata = {
  title: "Voyage plus",
  description: "Explore the world with Voyage plus",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={elMessiri.variable}>
      <body className="font-sans antialiased">
        <Navbar />
       
        <main className="pt-24">{children}</main>
         <Footer />
      </body>
    </html>
  );
}
