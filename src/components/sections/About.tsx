"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Heart } from "lucide-react";

const values = [
    {
        title: "Honestidad Incómoda",
        description: "Decimos la verdad aunque cueste. Si la IA no es la solución, te lo decimos de frente.",
        icon: Shield,
    },
    {
        title: "Claridad Radical",
        description: "Traducimos la complejidad a lenguaje humano. Si no lo podés explicar simple, no sirve.",
        icon: Target,
    },
    {
        title: "Acompañamiento Real",
        description: "No desaparecemos después de entregar. Somos tus socios en la evolución digital.",
        icon: Heart,
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 text-foreground leading-tight">
                        ¿POR QUÉ EXISTE <span className="text-primary italic">NEXIO?</span>
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                        Nexio Agency nació en la intersección de la creatividad humana y la inteligencia artificial. Somos un puente entre la tecnología de vanguardia y las empresas que sostienen la economía real.
                    </p>

                    <div className="space-y-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex gap-6 justify-center"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <div className="text-left max-w-md">
                                    <h4 className="text-lg font-bold mb-2 text-foreground">{value.title}</h4>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
