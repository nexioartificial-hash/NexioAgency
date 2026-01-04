"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "¿Esto es para mi tipo de empresa?",
        a: "Nexio se especializa en empresas medianas tradicionales y PyMEs que operan en servicios, comercio o industria. Si sentís que tu equipo pierde tiempo en tareas repetitivas, somos para vos."
    },
    {
        q: "¿Cuánto cuesta realmente implementar IA?",
        a: "Nuestros proyectos 'Quick Win' arrancan desde los USD 400. No necesitás inversiones millonarias para empezar a ver resultados."
    },
    {
        q: "¿Cuánto tiempo lleva ver resultados?",
        a: "Semanal, no mensual. Tenemos un modelo de entrega rápida donde los primeros impactos se ven en 2 a 4 semanas."
    },
    {
        q: "¿Qué pasa si no funciona?",
        a: "Garantía de satisfacción Nexio: si en los primeros 14 días no ves valor real, no pagás. No queremos clientes atados, queremos resultados que se ven."
    },
    {
        q: "¿Mi equipo va a saber usarlo?",
        a: "Absolutamente. Usamos herramientas no-code/low-code intuitivas e incluimos capacitación personalizada en cada proyecto para garantizar la adopción."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-serif font-black mb-12 text-center text-foreground">
                        RESOLVEMOS TUS <span className="text-primary italic">DUDAS</span>
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-border rounded-2xl overflow-hidden bg-card"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-bold text-foreground">{faq.q}</span>
                                    <Plus className={`w-5 h-5 text-primary transition-transform ${openIndex === index ? "rotate-45" : ""}`} />
                                </button>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="px-6 pb-6 text-muted-foreground leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
