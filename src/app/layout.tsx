import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { inter, roboto } from "@/font/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JustHome",
  description: "JustHome is your ultimate destination for property rentals and purchases. Discover your dream home with ease, explore a wide range of properties, and connect directly with sellers and landlords. Simplifying the journey to finding your perfect place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="bg-white grid grid-cols-[repeat(12,_1fr)] grid-rows-[auto_1fr] min-h-screen max-w-[1535px] mx-auto">
          <Header className="col-start-1 col-end-13 h-[100px]"></Header>
          <Main className="col-start-1 col-end-13">{children}</Main>
          <Footer className="col-start-1 col-end-13"></Footer>
        </div>
      </body>
    </html>
  );
}
