"use client";

import { motion } from "framer-motion";
import { Clock, HelpCircle, XCircle, MessageSquareOff } from "lucide-react";

const painPoints = [
    {
        icon: Clock,
        title: "Tu equipo pierde horas en tareas repetitivas",
        desc: "Cargar datos, responder lo mismo mil veces, procesos que 'alguien' tiene que hacer a mano."
    },
    {
        icon: HelpCircle,
        title: "Escuchás de IA, pero no sabés por dónde empezar",
        desc: "Ves noticias todos los días pero te sentís abrumado por el exceso de opciones sin criterio claro."
    },
    {
        icon: XCircle,
        title: "Ya te vendieron tecnología que nadie usó",
        desc: "Sistemas complejos que terminan juntando polvo digital porque nadie entendió cómo aplicarlos."
    },
    {
        icon: MessageSquareOff,
        title: "Los 'expertos' te hablan en un idioma que no entendés",
        desc: "Técnicos que hablan en código y consultoras en jerga corporativa. Te sentís ignorante y abandonás."
    }
];

export default function Problem() {
    return (
        <section id="problem" className="py-24 bg-transparent border-y border-border/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 text-foreground">
                        ¿TE SUENA <span className="text-primary italic text-accent">FAMILIAR?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        No es por la tecnología. Es por tres problemas que nadie está resolviendo bien en el mercado actual.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <point.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 text-foreground">{point.title}</h4>
                                <p className="text-muted-foreground">{point.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center p-8 rounded-3xl bg-amber-950/20 backdrop-blur-sm border border-amber-700/30 max-w-3xl mx-auto"
                >
                    <p className="text-xl font-medium text-foreground italic">
                        &quot;El problema no es que no quieras, es que nadie te lo explicó para que entiendas.&quot;
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
