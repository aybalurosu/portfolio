import { Metadata } from "next";
import "./globals.css";
import {Header, Footer} from '../components/layout';
import { CardInfo } from "@/components/ui";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="p-10">
        <div className="hidden lg:flex fixed top-10 left-10">
          <CardInfo />
        </div>
        <div className="lg:ml-96">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
