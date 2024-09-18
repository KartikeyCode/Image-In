import "./globals.css";
import { GalleryProvider } from "./gallerycontext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image In",
  description: "A fullstack gallery application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GalleryProvider>
      {children} 
      </GalleryProvider> </body>
    </html>
  );
}
