import type { Metadata } from "next";
import "./globals.css";
import Noise from "../components/Noise/Noise";

export const metadata: Metadata = {
  title: "Faiseur de Battements",
  description: "Blog musical : Présentation des compositions du beatmaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Noise />
      <body>{children}</body>
    </html>
  );
}
