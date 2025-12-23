import type { Metadata } from "next";
import { Montserrat, Nunito_Sans, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomerSupportButton from "@/components/CustomerSupportButton";
import { CartProvider } from "@/context/CartContext";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["700", "800"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Modular UP | Muebles & Diseños Premium",
  description: "Diseño y fabricación de mobiliario premium, moderno y funcional. Cocinas, closets y escritorios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${nunitoSans.variable} ${montserrat.variable} ${lato.variable} font-body text-primary bg-[#fcfcfc] min-h-screen flex flex-col transition-opacity duration-700 ease-in-out`}
      >
        <CartProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CustomerSupportButton />
        </CartProvider>
      </body>
    </html>
  );
}
