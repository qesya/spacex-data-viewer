import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/molecules/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "SpaceX Data Viewer",
  description: "Data viewer for SpaceX launches and rockets",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="antialiased flex flex-col flex-1 max-w-screen h-screen">
        <Navbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
