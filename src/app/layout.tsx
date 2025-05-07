import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/provider/queryProvider";
import { AuthProvider } from "@/context/authContext";
import Main from "@/components/layout/main";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { inter } from "@/font/font";
import { Toaster } from "@/components/ui/toaster";


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
        <div className="mx-auto grid min-h-screen max-w-[1535px] grid-cols-[repeat(12,_1fr)] grid-rows-[auto_1fr] bg-white">
          <QueryProvider>
            <AuthProvider>
              <Header className="col-start-1 col-end-13 h-[100px]"></Header>
              <Main className="col-start-1 col-end-13">{children}</Main>
              <Footer className="col-start-1 col-end-13"></Footer>
            </AuthProvider>
          </QueryProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
