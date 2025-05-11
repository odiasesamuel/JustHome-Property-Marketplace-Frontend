import type { Metadata } from "next";
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
    openGraph: {
    title: "JustHome Property Marketplace",
    description: "Discover your dream home with ease, explore a wide range of properties, and connect directly with sellers and landlords.",
    url: "https://just-home-property-marketplace.vercel.app/",
    siteName: "JustHome",
    images: [
      {
        url: "https://rkmrzjsjtgpmcacoafpq.supabase.co/storage/v1/object/public/rental-marketplace-images//JustHome_Preview.png",
        width: 800,
        height: 600,
        alt: "Discover your dream home with ease, explore a wide range of properties, and connect directly with sellers and landlords.",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JustHome Property Marketplace",
    description: "Discover your dream home with ease, explore a wide range of properties, and connect directly with sellers and landlords.",
    images: ["https://rkmrzjsjtgpmcacoafpq.supabase.co/storage/v1/object/public/rental-marketplace-images//JustHome_Preview.png"],
  },
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
