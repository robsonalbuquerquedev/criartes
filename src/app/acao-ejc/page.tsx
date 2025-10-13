"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGift, FaHeart, FaChild } from "react-icons/fa";

// 🧩 Card principal com as cores do EJC
function CardBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-4xl w-full shadow-xl bg-gradient-to-b from-[#FFD303] to-[#0062A8] backdrop-blur-md border border-[#E20305]/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
            {children}
        </div>
    );
}

// 🎁 Lista de doações
function DonationList() {
    return (
        <div className="text-gray-800 space-y-2 mb-4">
            <p>🍿 Pipocas</p>
            <p>🍭 Pirulitos</p>
            <p>🍬 Confeitos</p>
            <p>🍫 Chicletes</p>
            <p>🧊 Geladinhos</p>
            <p>🧸 Brinquedos</p>
            <p>💰 Ou qualquer valor via Pix:</p>
            <p className="font-semibold text-lg">
                81971168633
            </p>
        </div>
    );
}

// 🌟 Página principal
export default function AcaoEJCPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFD303] to-[#0062A8] px-4 py-12">
            {/* 🎉 Banner animado no topo */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-10 text-center"
            >
                <motion.h1
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg"
                >
                    🎈 Ação Beneficente EJC 🎉
                </motion.h1>
                <p className="text-white text-lg mt-2">
                    Doe alegria para o Dia das Crianças 💖
                </p>
            </motion.div>

            {/* 💌 Card principal */}
            <CardBox>
                {/* Texto à esquerda */}
                <div className="flex-1">
                    {/* Logo EJC */}
                    <Image
                        src="/ejc.png"
                        alt="Logo EJC"
                        width={100}
                        height={100}
                        className="mb-4 mx-auto md:mx-0"
                    />

                    {/* Título animado */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl font-bold text-white mb-3"
                    >
                        💖 Doe Alegria para o Dia das Crianças!
                    </motion.h1>

                    {/* Mensagem principal */}
                    <p className="text-white text-lg mb-4 leading-relaxed">
                        O <strong>EJC</strong> está organizando uma{" "}
                        <strong>ação beneficente</strong> no dia{" "}
                        <strong>18 de outubro de 2025</strong> 🎉
                        para celebrar o Dia das Crianças com muito amor e alegria!
                    </p>

                    <DonationList />

                    {/* Prazo para doações */}
                    <p className="text-yellow-200 font-medium text-sm mt-2">
                        📅 Prazo para doações: até <strong>quarta-feira</strong>
                        (mas se chegar depois, ainda aceitamos com muito amor 💛)
                    </p>

                    <p className="text-white font-medium mt-4">
                        💙 Juntos, podemos fazer sorrisos acontecerem!
                        #EJC #AçãoDoBem #DiaDasCrianças
                    </p>
                </div>

                {/* 🎨 Logo à direita */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center md:justify-end"
                >
                    <Image
                        src="/ejc.png"
                        alt="Logo EJC"
                        width={220}
                        height={220}
                    />
                </motion.div>
            </CardBox>

            {/* ✨ Ícones flutuantes de corações e presentes */}
            <motion.div
                className="fixed bottom-6 right-6 text-white text-4xl"
                animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <FaGift />
            </motion.div>
            <motion.div
                className="fixed bottom-6 left-6 text-[#E20305] text-4xl"
                animate={{ y: [0, -10, 0], rotate: [0, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <FaHeart />
            </motion.div>
        </main>
    );
}
