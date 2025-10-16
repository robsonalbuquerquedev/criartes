// src/app/estrelinha/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EstrelinhaPage() {
    const fotos = [
        "/cat001.jpg",
        "/cat002.jpg",
        "/cat003.jpg",
        "/cat004.jpg",
        "/cat005.jpg",
        "/cat006.jpg",
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center px-4 py-10">
            {/* 🌟 Título */}
            <motion.h1
                className="text-3xl md:text-4xl font-semibold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                🌙 Nossa Estrelinha no Céu
            </motion.h1>

            {/* 💬 Mensagem */}
            <motion.p
                className="text-gray-300 max-w-2xl mb-8 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                Hoje o céu ganhou mais uma estrela.
                Você encheu nossos dias de carinho, ronronadas e amor.
                Vai ficar a saudade, mas também a gratidão por cada momento vivido. 🐾🤍
            </motion.p>

            {/* 🖤 Galeria */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {fotos.map((src, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="overflow-hidden rounded-xl shadow-lg border border-gray-700"
                    >
                        <Image
                            src={src}
                            alt="Lembrança da gatinha"
                            width={250}
                            height={250}
                            className="object-cover grayscale hover:grayscale-0 transition duration-500"
                        />
                    </motion.div>
                ))}
            </div>

            {/* ✨ Rodapé */}
            <motion.p
                className="text-gray-400 mt-8 text-sm italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
            >
                “Alguns anjos não têm asas... têm patinhas.” 🕊️
            </motion.p>
        </main>
    );
}
