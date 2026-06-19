import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sis2Sis - Luxury Gown Rentals | Sisters in Style",
  description: "Designer gowns for every simcha and celebration. In honor of Chanie Katz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </ClientBody>
    </html>
  );
}
