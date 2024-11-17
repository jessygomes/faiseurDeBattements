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
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="1dac5c4a-bf15-4b3e-9d64-75c8542d9b7e"
        ></script>
      </head>
      <Noise />
      <body>
        {children} <Analytics />
      </body>
    </html>
  );
}
