import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EMO Motors | Precision Induction Motors for Textile Excellence",
  description: "EMO by Meera Industries - Engineered for Motion. Premium IE3 & IE4 induction motors designed specifically for textile machinery including ring twisters, winding machines, and spinning applications.",
  keywords: "induction motors, textile motors, IE3 motors, IE4 motors, ring twister motors, winding machine motors, VFD compatible motors, brake motors, textile machinery",
  authors: [{ name: "Meera Industries" }],
  openGraph: {
    title: "EMO Motors | Precision Induction Motors for Textile Excellence",
    description: "Engineered for Motion. Premium IE3 & IE4 induction motors for textile machinery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
