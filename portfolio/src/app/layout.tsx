import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pranay - AI/ML Enthusiast & Problem Solver",
  description: "Portfolio of Pranay - Mathematics & Computing student passionate about AI/ML, Deep Learning, and building scalable solutions. Crafting the future with code.",
  keywords: "Pranay, AI, Machine Learning, Deep Learning, GANs, Python, TensorFlow, PyTorch, Portfolio, Mathematics, Computing, Open Source",
  authors: [{ name: "Pranay" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
