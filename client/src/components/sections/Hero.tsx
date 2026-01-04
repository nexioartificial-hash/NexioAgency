"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest"
                >
                    <Sparkles className="w-3 h-3 text-accent" />
                    Implementación Accesible de IA
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-serif font-black tracking-tighter mb-8 leading-[0.9] text-foreground"
                >
                    TU EMPRESA <br />
                    <span className="text-primary italic">MERECE IA</span> <br />
                    QUE FUNCIONA.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-3xl mx-auto text-muted-foreground md:text-xl mb-12 font-sans leading-relaxed"
                >
                    Automatizamos procesos, creamos asistentes inteligentes y te acompañamos hasta que todo funcione. <br className="hidden md:block" />
                    <span className="text-foreground/80">Sin jerga, sin fortunas, sin dejarte solo.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="https://calendly.com/nexioartificial/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 overflow-hidden shadow-[0_0_40px_rgba(200,100,70,0.4)] hover:scale-105 transition-all text-lg"
                    >
                        <span className="relative z-10">Agendá una llamada gratis</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-[#BE5538] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <Link
                        href="#services"
                        className="px-10 py-5 rounded-2xl border border-border bg-white/5 font-bold hover:bg-white/10 transition-all text-foreground text-lg"
                    >
                        Ver soluciones
                    </Link>
                </motion.div>
            </div>

        </section>
    );
}
