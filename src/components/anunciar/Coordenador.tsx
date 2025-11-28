"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coordenadores } from "@/data/coordenadores";

export default function Coordenador() {
    const [index, setIndex] = useState(0);
    const [showPrompt, setShowPrompt] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const coord = coordenadores[index];
    const TIME_TO_PROMPT = 6000;

    function startTimer() {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {
            setShowPrompt(true);
        }, TIME_TO_PROMPT);
    }

    useEffect(() => {
        setShowPrompt(false);
        startTimer();

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [index]);

    function handleNext() {
        setShowPrompt(false);
        setIndex((prev) => (prev + 1) % coordenadores.length);
    }

    function handleStayLonger() {
        setShowPrompt(false);
        startTimer(); // reinicia o tempo sem mostrar o modal novamente
    }

    return (
        <div className="flex flex-col h-full relative">

            {/* Modal elegante animado */}
            <AnimatePresence>
                {showPrompt && (
                    <motion.div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-2xl shadow-2xl border border-white/40 max-w-xs w-[90%] text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <p className="text-gray-800 font-semibold mb-4 text-lg">
                                Deseja ver o próximo coordenador?
                            </p>

                            <div className="flex flex-col gap-3 mt-2">
                                <button
                                    onClick={handleStayLonger}
                                    className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 shadow hover:bg-gray-300 transition cursor-pointer"
                                >
                                    Continuar mais um pouco
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="px-4 py-2 rounded-lg bg-sky-600 text-white shadow hover:bg-sky-700 transition cursor-pointer"
                                >
                                    Próximo
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-xl font-semibold text-center px-6 mb-4 
               bg-gradient-to-r from-sky-700 to-sky-900 
               bg-clip-text text-transparent drop-shadow-sm"
            >
                E a coordenação para o ano de 2026, do ministério:
            </motion.h1>

            {/* Área interna */}
            <div className="flex flex-col items-center text-center flex-1">

                {/* Fotos */}
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex-1 flex items-center justify-center"
                >
                    <div className="w-full h-full max-h-60 overflow-hidden rounded-xl flex gap-3">
                        {coord.foto.map((img, i) => (
                            <div key={i} className="flex-1 h-full">
                                <Image
                                    src={img}
                                    alt={coord.nomes}
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-full rounded-xl shadow-lg border border-white/40"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Informações */}
                <div className="mt-6 flex flex-col items-center text-center">

                    {/* Ministério */}
                    <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-sky-800 tracking-wide drop-shadow-sm"
                    >
                        {coord.ministerio}
                    </motion.p>

                    {/* Linha elegante */}
                    <div className="w-14 h-[2px] bg-sky-700/40 my-2 rounded-full"></div>

                    {/* Nome(s) */}
                    <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg font-medium text-gray-700 opacity-90"
                    >
                        {coord.nomes}
                    </motion.p>
                </div>

                {/* Mensagem personalizada com cruz */}
                <motion.p
                    key={coord.mensagem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative text-sm text-gray-700 mt-4 leading-relaxed px-4 italic bg-white/40 backdrop-blur-sm py-3 rounded-xl shadow border border-white/30"
                >
                    <span className="text-sky-600 text-lg absolute -top-2 left-3 opacity-80">✝</span>
                    <span className="block mt-4">“{coord.mensagem}”</span>
                </motion.p>

                {/* Logo sozinha com destaque */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 flex justify-center"
                >
                    <Image
                        src="/images/logo.png"
                        width={105}
                        height={105}
                        alt="Logo"
                        className="opacity-95 drop-shadow-[0_0_12px_rgba(30,144,255,0.35)] 
                   hover:drop-shadow-[0_0_18px_rgba(30,144,255,0.5)] 
                   transition-all duration-500"
                    />
                </motion.div>
            </div>
        </div>
    );
}
