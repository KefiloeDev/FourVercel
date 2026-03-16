import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/app/Navbar/NavContainer";
import Footer from "@/app/Footer/page";
import ScrollToTop from "@/app/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corporate landingpage",
  description: "A corporate landingpage built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased bg-[#1f242c]`}>
        <NavContainer />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
