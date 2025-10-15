"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMusic, FaGuitar, FaHeart } from "react-icons/fa";

export default function KaikyPage() {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center"
            style={{
                background: "linear-gradient(135deg, #2F3356, #BF6317)",
                color: "#FAF2E3",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl w-full bg-[#101010]/80 shadow-2xl rounded-3xl border border-[#FAF2E3]/30 p-8 backdrop-blur-md"
            >
                {/* 🎶 Título */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-[#FAF2E3]"
                >
                    🎶 Feliz Dia do Professor, <span className="text-[#BF6317]">Kaiky Éden!</span> 🎸
                </motion.h1>

                {/* 💬 Mensagem */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-xl mb-6 text-[#FAF2E3]/90 leading-relaxed"
                >
                    Hoje celebramos não só o professor, mas o artista que transforma cada
                    acorde em aprendizado e cada aula em inspiração.
                    Kaiky, seu talento e dedicação fazem a diferença.
                    Que a música continue sendo o som da sua missão! 🎵
                </motion.p>

                {/* 📸 Foto do professor */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex justify-center mb-6"
                >
                    <Image
                        src="/kaiky.jpg"
                        alt="Professor Kaiky Éden"
                        width={260}
                        height={260}
                        className="rounded-2xl border-4 border-[#BF6317] shadow-xl object-cover"
                    />
                </motion.div>

                {/* ✨ Frase musical */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="italic text-[#FAF2E3] font-medium mb-4"
                >
                    “Ensinar é fazer o coração do outro vibrar no mesmo tom da música.” 💛
                </motion.p>

                {/* 🎵 Ícones animados */}
                <div className="flex justify-center mt-4 space-x-8 text-3xl">
                    <FaMusic className="text-[#BF6317] animate-pulse" />
                    <FaGuitar className="text-[#FAF2E3] animate-bounce" />
                    <FaHeart className="text-[#BF6317] animate-ping" />
                </div>
            </motion.div>

            {/* 🖋️ Rodapé */}
            <p className="mt-8 font-semibold text-[#FAF2E3]/80">
                Com gratidão, <span className="text-[#BF6317]">Robson Albuquerque</span> 💙
            </p>
        </main>
    );
}
