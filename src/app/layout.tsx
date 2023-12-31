import "./globals.css";
import { Exo_2 } from "next/font/google";
import type { Metadata } from "next";

const exo2 = Exo_2({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
