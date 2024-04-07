import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akkewach's site",
  description: "Akkewach's Portfilio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
