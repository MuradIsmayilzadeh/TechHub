import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata = {
  title: "TechHub — Texnologiya mağazası",
  description: "Telefon, noutbuk, qulaqlıq və daha çox — sərfəli qiymətlərlə.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
