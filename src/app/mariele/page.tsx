"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaBirthdayCake, FaHeart, FaPrayingHands } from "react-icons/fa";

export default function MarielePage() {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-[#4D1C03]"
            style={{
                background:
                    "linear-gradient(to bottom, #F6F6D8, #E0B95D, #A2C8B4)",
            }}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl bg-[#F6F6D8]/80 border border-[#BBA345] shadow-xl rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-sm"
            >
                {/* 🎂 Título */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold mb-3"
                    style={{ color: "#BB4124" }}
                >
                    🎉 Feliz Aniversário, Ir. Mariele Santos! 🎂
                </motion.h1>

                {/* 💬 Mensagem */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg mb-6 max-w-2xl"
                    style={{ color: "#5F6A40" }}
                >
                    Hoje celebramos a vida de uma mulher abençoada, dedicada e cheia de
                    luz! 🌟
                    Que o Senhor continue te concedendo saúde, sabedoria e alegrias sem
                    fim.
                    Que cada gesto seu continue refletindo o amor de Deus e inspirando
                    todos ao seu redor. 💖
                </motion.p>

                {/* 📸 Galeria de Fotos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6"
                >
                    <Image
                        src="/mariele001.jpg"
                        alt="Ir. Mariele Santos"
                        width={250}
                        height={250}
                        className="rounded-2xl shadow-lg border-4 border-[#BBA345] object-cover"
                    />
                    <Image
                        src="/mariele002.jpg"
                        alt="Ir. Mariele Santos"
                        width={250}
                        height={250}
                        className="rounded-2xl shadow-lg border-4 border-[#BBA345] object-cover"
                    />
                </motion.div>

                {/* ✨ Mensagem Final */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg font-medium mb-4"
                    style={{ color: "#4D1C03" }}
                >
                    Que Deus derrame muitas bênçãos sobre a sua vida e que este novo
                    ciclo seja repleto de fé, esperança e amor! 🙏💐
                </motion.p>

                {/* 💫 Ícones */}
                <div className="flex justify-center mt-4 space-x-6 text-3xl">
                    <FaBirthdayCake color="#BB4124" className="animate-bounce" />
                    <FaHeart color="#BBA345" className="animate-pulse" />
                    <FaPrayingHands color="#5F6A40" />
                </div>
            </motion.div>

            {/* ✍️ Rodapé */}
            <p className="mt-8 font-semibold" style={{ color: "#BB4124" }}>
                Com carinho, Robson Albuquerque 💛
            </p>
        </main>
    );
}
