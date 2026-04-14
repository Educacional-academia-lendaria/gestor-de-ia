import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestor de IA — Domine a Inteligência Artificial",
  description: "Cursos práticos de IA para profissionais e gestores que querem resultados reais.",
  keywords: "cursos de IA, inteligência artificial, ChatGPT, automação, gestão com IA",
  openGraph: {
    title: "Gestor de IA — Domine a Inteligência Artificial",
    description: "Cursos práticos de IA para profissionais e gestores que querem resultados reais.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col bg-[#0A0A0A]">{children}</body>
    </html>
  );
}