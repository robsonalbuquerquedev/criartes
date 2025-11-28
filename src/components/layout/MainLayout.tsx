// src/components/layout/MainLayout.tsx

import React from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            {/* Camada externa — igual ao outro projeto, mas com o seu gradiente */}
            <div
                className="
          min-h-screen
          w-full
          bg-gradient-to-b from-sky-100 via-blue-50 to-sky-200
          flex items-center justify-center
          px-6 md:px-10
          py-10 md:py-16
        "
            >
                {/* Camada interna — adaptação da área do conteúdo */}
                <div
                    className="
            aspect-[9/16]
            w-full
            max-w-sm
            bg-white/60 backdrop-blur-xl
            shadow-xl
            rounded-2xl
            border border-white/30
            overflow-hidden
            flex flex-col
            p-6
          "
                >
                    {children}
                </div>
            </div>
        </>
    );
}
