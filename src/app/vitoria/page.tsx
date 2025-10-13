"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart, FaHandsHelping, FaStethoscope } from "react-icons/fa";

export default function VitoriaPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100 text-gray-800 px-4 py-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl bg-white/70 shadow-xl rounded-3xl p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 border border-indigo-200 backdrop-blur-sm"
            >
                {/* 💖 Foto da Vitória */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0"
                >
                    <Image
                        src="/vitoria.png"
                        alt="Vitória Campos - Fisioterapeuta"
                        width={260}
                        height={260}
                        className="rounded-2xl shadow-md object-cover"
                    />
                </motion.div>

                {/* 💬 Mensagem de homenagem */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-3xl font-bold text-indigo-700 mb-3">
                        🌸 Feliz Dia da Fisioterapeuta, Vitória Campos!
                    </h1>

                    <p className="text-lg mb-3">
                        Hoje é o seu dia, <strong>Vitória</strong> — e não há palavras
                        suficientes para descrever o quanto você inspira com sua
                        dedicação, carinho e amor pelo que faz. 💙
                    </p>

                    <p className="mb-3">
                        Seu cuidado vai além da técnica — é alma, é coração, é vocação. Cada
                        paciente que passa pelas suas mãos sente não apenas o toque da
                        fisioterapia, mas o toque de alguém que realmente se importa. 🙌
                    </p>

                    <p className="text-indigo-700 font-semibold">
                        Parabéns, Vitória! Que Deus continue abençoando sua missão de
                        restaurar movimentos e espalhar amor através do seu dom. 💫
                    </p>

                    {/* Ícones de carinho */}
                    <div className="flex justify-center md:justify-start mt-4 space-x-4 text-indigo-600 text-2xl">
                        <FaHeart className="animate-pulse" />
                        <FaStethoscope />
                        <FaHandsHelping />
                    </div>
                </motion.div>
            </motion.div>

            {/* ✨ Rodapé */}
            <p className="mt-8 text-indigo-600 font-medium">
                Com carinho, Robson Albuquerque 💙
            </p>
        </main>
    );
}
