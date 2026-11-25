import { Inter, Space_Grotesk } from "next/font/google";
import Layout from "./components/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });
const display = Space_Grotesk({ subsets: ["latin", "latin-ext"], weight: ["500", "700"], variable: "--font-display" });

export const metadata = {
  title: "TechHub — Texnologiya mağazası",
  description: "Telefon, noutbuk, qulaqlıq və daha çox — sərfəli qiymətlərlə.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="az">
      <body className={`${inter.className} ${display.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
