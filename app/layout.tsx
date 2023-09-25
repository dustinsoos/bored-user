import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Activity Forecast",
  description:
    "Discover endless entertainment options tailored to your mood and weather with our innovative boredom solution app. Find exciting activities to enjoy, whether it's a sunny day outdoors or a cozy evening indoors. Never be bored again!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-950">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
