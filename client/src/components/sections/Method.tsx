"use client";

import { motion } from "framer-motion";

const steps = [
    { id: "C", title: "Comprender", desc: "Entendemos tu problema de negocio, no solo el técnico." },
    { id: "L", title: "Listar", desc: "Identificamos todas las oportunidades de automatización." },
    { id: "A", title: "Arquitectar", desc: "Diseñamos la estructura lógica de la solución." },
    { id: "R", title: "Realizar", desc: "Construimos la automatización con herramientas de élite." },
    { id: "I", title: "Integrar", desc: "Conectamos la IA con tus flujos de trabajo actuales." },
    { id: "D", title: "Documentar", desc: "Te entregamos todo el conocimiento por escrito." },
    { id: "A", title: "Acompañar", desc: "Seguimos a tu lado para asegurar el funcionamiento." },
    { id: "D", title: "Dar autonomía", desc: "Nuestro éxito es que puedas seguir creciendo solo." },
];

export default function Method() {
    return (
        <section id="method" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 text-foreground">
                    MÉTODO <span className="text-primary italic">CLARIDAD</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                    Un proceso estructurado para que entiendas qué estamos haciendo y por qué.
                </p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl bg-card border border-border flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                    >
                        <span className="text-4xl font-serif font-black text-primary mb-4">{step.id}</span>
                        <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
