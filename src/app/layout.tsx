import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Criartes | Criações que Inspiram",
  description:
    "Um espaço para expressar criatividade e fé através de artes, projetos e mensagens especiais criadas por Robson Albuquerque.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
