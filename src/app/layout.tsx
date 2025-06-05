import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daniel de la Torre Morales - Arquitecto Técnico Tasador",
  description:
    "Servicios profesionales de tasación de inmuebles para compraventa. Arquitecto técnico colegiado con amplia experiencia en valoraciones inmobiliarias.",
  keywords:
    "arquitecto técnico, tasador, inmuebles, compraventa, valoración, tasación, perito",
  authors: [{ name: "Daniel de la Torre Morales" }],
  openGraph: {
    title: "Daniel de la Torre Morales - Arquitecto Técnico Tasador",
    description:
      "Servicios profesionales de tasación de inmuebles para compraventa",
    type: "website",
    locale: "es_ES",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
