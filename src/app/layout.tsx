import type { Metadata } from "next";
import "./globals.css";
import Noise from "../components/Noise/Noise";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Faiseur de Battements",
  description:
    "Blog musical : donner une image aux sons, s'introduire dans l'univers du faiseur de battement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Noise />
      <body>
        {children} <Analytics />
      </body>
    </html>
  );
}
