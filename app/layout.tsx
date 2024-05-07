import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
export const metadata: Metadata = {
  title: "Doct",
  description: "Medical services management system for doctors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 `}>{children}</body>
    </html>
  );
}
