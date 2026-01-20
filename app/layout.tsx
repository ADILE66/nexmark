import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexMark | Le Marketing Digital piloté par l'IA",
  description: "Générez du contenu viral et analysez vos campagnes avec NexMark.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* C'est cette ligne qui force le zoom mobile à 100% */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" 
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}