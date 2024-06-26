import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarHeader from "./components/navigation/NavBarHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Splash",
  description:
    "Splash is your ultimate kombucha companion app, designed to help you track and manage your kombucha drinking habits. Stay refreshed and healthy with Splash!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarHeader fixed />
        {children}
      </body>
    </html>
  );
}
