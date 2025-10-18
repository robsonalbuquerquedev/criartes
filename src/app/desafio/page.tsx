// src/app/desafio/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaPlay, FaBirthdayCake, FaMusic, FaHeart } from "react-icons/fa";

export default function DesafioPage() {
    const videos = [
        {
            title: "DESAFIO 1 ANO EM 14 SEMANAS (TORNE-SE UM POLIGLOTA COMIGO)",
            url: "https://www.youtube.com/embed/Qn2bDiUDKPg?si=gxRVbDsOkbpKs9v0",
            thumbnail: "https://img.youtube.com/vi/Qn2bDiUDKPg/hqdefault.jpg",
        },
        {
            title: "Uma noite de estudos em francês | colocando o cronograma em dia",
            url: "https://www.youtube.com/embed/CgvgNJgMSLc?si=J14XLzHektYsBc-q",
            thumbnail: "https://img.youtube.com/vi/CgvgNJgMSLc/hqdefault.jpg",
        },
    ];

    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-[#FFFDFD] text-[#510505] p-8">
            {/* 🎉 Homenagem de aniversário com foto em destaque */}
            <motion.section
                className="bg-gradient-to-r from-pink-100 via-yellow-100 to-pink-100 rounded-3xl shadow-md p-8 mb-10 border border-[#510505]/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Texto e ícones */}
                <div className="flex-1">
                    <motion.h1
                        className="text-4xl font-bold mb-3 text-[#7A1A1A] flex justify-center md:justify-start items-center gap-3"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <FaBirthdayCake className="text-pink-500" />
                        Feliz Aniversário, <span className="text-[#510505]">Teacher Laiane Mochi!</span> 🎉
                    </motion.h1>

                    <p className="text-lg text-[#510505] mt-3 max-w-xl">
                        Hoje é dia de celebrar o dom da sua vida, da sua alegria e da sua paixão por ensinar!
                        Que Deus continue te abençoando com muita sabedoria, amor e sucesso! 💖🎶
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
                        <FaMusic className="text-pink-500" />
                        <FaHeart className="text-red-500" />
                        <FaBirthdayCake className="text-yellow-500" />
                        <FaMusic className="text-pink-500" />
                    </div>
                </div>

                {/* Imagem da homenageada */}
                <motion.div
                    className="flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/laianemochi.jpg"
                        alt="Laiane Mochi"
                        className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-pink-200"
                    />
                </motion.div>
            </motion.section>

            {/* Cabeçalho do Desafio */}
            <motion.header
                className="text-center mb-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl font-bold mb-2 flex justify-center items-center gap-3">
                    <FaYoutube className="text-red-600" />
                    Desafio: 1 ano em 14 semanas
                </h1>
                <p className="text-lg">
                    Acompanhe os vídeos da professora{" "}
                    <strong>Laiane Mochi</strong> e torne-se um poliglota junto com ela!
                </p>
            </motion.header>

            {/* Grade de vídeos */}
            <section className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {videos.map((video, index) => (
                    <motion.article
                        key={index}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden border border-[#510505]/20 hover:shadow-xl transition-all cursor-pointer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={() =>
                            setActiveVideo(activeVideo === index ? null : index)
                        }
                    >
                        <div className="relative aspect-video flex items-center justify-center bg-black">
                            {activeVideo === index ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <motion.div
                                        className="absolute inset-0 bg-black/40 flex items-center justify-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2 }}
                                            className="bg-red-600 text-white p-4 rounded-full shadow-lg"
                                        >
                                            <FaPlay size={40} />
                                        </motion.div>
                                    </motion.div>
                                </>
                            )}
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{video.title}</h2>
                        </div>
                    </motion.article>
                ))}
            </section>

            {/* Rodapé */}
            <motion.footer
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <p>
                    Confira mais conteúdos no canal do YouTube:{" "}
                    <a
                        href="https://www.youtube.com/@laianemochi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold hover:text-[#7a1a1a] flex justify-center items-center gap-2 mt-2"
                    >
                        <FaYoutube className="text-red-600" /> @laianemochi
                    </a>
                </p>
            </motion.footer>
        </main>
    );
}
