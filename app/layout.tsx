import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Criar Templates",
  description: "Criar Templates para Desenvolvimento Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        <MainLayout>
          <main>{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
