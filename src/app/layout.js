
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./Components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next hero",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="h-screen">{children}</div>
        <footer className="text-center">This is footer.</footer>
      </body>
    </html>
  );
}
