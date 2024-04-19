import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Provider from "@/components/provider/Provider";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from '@vercel/analytics/react';
import InscriereModal from "@/components/InscriereModal";
import InscriereContainer from "@/components/InscriereContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-ddtWhite antialiased">
          <Provider>
            <InscriereContainer/>
            {children}
            <Footer />
          </Provider>
        </div>
        <Analytics/>
      </body>
    </html>
  );
}
