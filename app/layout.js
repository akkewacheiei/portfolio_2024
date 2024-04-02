import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akkewach - Portfolio",
  description: "Akkewach's Portfilio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
