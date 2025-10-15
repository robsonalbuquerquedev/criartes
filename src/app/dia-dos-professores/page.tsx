// src/app/dia-dos-professores/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiaDosProfessores() {
    const professoras = [
        { imagem: "/myphoto.jpg" },
        { imagem: "/tiavania.jpg" },
        { imagem: "/sisterjazi.jpg" },
    ];

    return (
        <div className="min-h-screen bg-[#F6F6D8] text-[#4D1C03] flex flex-col items-center justify-center px-4 py-10">
            {/* Título */}
            <motion.h1
                className="text-3xl md:text-4xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                🍎 Feliz Dia dos Professores! 🍎
            </motion.h1>

            {/* Mensagem */}
            <motion.p
                className="text-base md:text-lg text-center max-w-2xl mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Hoje é dia de agradecer por todos aqueles que dedicam sua vida a ensinar,
                inspirar e transformar.
                Que nunca falte amor, paciência e alegria no coração de quem compartilha
                o dom de ensinar. 💛📚
            </motion.p>

            {/* Fotos pequenas */}
            <div className="flex flex-wrap justify-center gap-6">
                {professoras.map((prof, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Image
                            src={prof.imagem}
                            alt="Professora"
                            width={150}
                            height={150}
                            className="rounded-full shadow-md border-4 border-[#E0B95D]/70 object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Rodapé */}
            <motion.footer
                className="mt-8 text-sm md:text-base text-[#5F6A40] italic text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                “Ensinar é deixar um pedacinho de si em cada coração que aprende.” ✨
            </motion.footer>
        </div>
    );
}
