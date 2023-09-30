import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoreNoMore",
  description:
    " Where Boredom Meets Adventure! Input the names of your friends and tell us how many are joining the fun. We'll whip up a personalized list of boredom-busting activities perfectly tailored to your group size. Let's turn your free time into fantastic fun, together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950 ">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
