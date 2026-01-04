"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Gerente de Operaciones",
        company: "Distribuidora Mayorista",
        text: "El equipo perdía 15 horas semanales respondiendo WhatsApps. Nexio automatizó el 80% de las consultas y ahora cerramos pedidos mientras dormimos.",
        stat: "15h ahorradas/semana"
    },
    {
        name: "Dueño / CEO",
        company: "Servicios Contables",
        text: "Teníamos miedo de la IA, pero con Nexio entendimos específicamente lo que necesitábamos. La implementación llevó 2 semanas y el ROI fue inmediato.",
        stat: "ROI en mes 1"
    },
    {
        name: "Directora Administrativa",
        company: "Clínica Privada",
        text: "La gestión de turnos era un caos. El sistema Nexio 360 organizó todo el flujo administrativo sin que tengamos que contratar más gente.",
        stat: "0 errores técnicos"
    }
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-transparent border-t border-border/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 text-foreground">
                        RESULTADOS <span className="text-primary italic">REALES</span>
                    </h2>
                    <p className="text-muted-foreground italic">&quot;Lo que funciona le gana a lo que impresiona.&quot;</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-3xl bg-card border border-border flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-foreground leading-relaxed mb-8 flex-grow">
                                &quot;{t.text}&quot;
                            </p>
                            <div className="mt-auto">
                                <div className="font-bold text-foreground">{t.name}</div>
                                <div className="text-sm text-muted-foreground mb-4">{t.company}</div>
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase">
                                    {t.stat}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
