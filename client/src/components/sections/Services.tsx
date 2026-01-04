"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, UserCheck, ShieldCheck, Search, Lightbulb } from "lucide-react";

const services = [
    {
        title: "Diagnóstico Express",
        description: "Evaluamos tu operación y detectamos dónde la IA puede darte resultados reales de inmediato.",
        icon: Lightbulb,
        color: "text-primary",
    },
    {
        title: "Automatización a Medida",
        description: "Conectamos tus sistemas para que trabajen solos y eliminen las tareas repetitivas de tu equipo.",
        icon: Zap,
        color: "text-accent",
    },
    {
        title: "Asistente Nexio",
        description: "Chatbots inteligentes entrenados con tu información que atienden clientes 24/7 sin descanso.",
        icon: MessageSquare,
        color: "text-primary",
    },
    {
        title: "Sistema Nexio 360",
        description: "Transformación completa de un área del negocio con múltiples automatizaciones integradas.",
        icon: ShieldCheck,
        color: "text-accent",
    },
    {
        title: "Soporte Nexio",
        description: "Acompañamiento continuo para asegurar que tu tecnología evolucione y nunca se detenga.",
        icon: UserCheck,
        color: "text-primary",
    },
    {
        title: "Consultoría Estratégica",
        description: "Te guiamos en el camino de la digitalización para que no pierdas tiempo ni dinero.",
        icon: Search,
        color: "text-accent",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 text-foreground">
                            NUESTRAS <span className="text-primary italic">SOLUCIONES</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            No entregamos PowerPoints. Entregamos soluciones funcionando que impactan en tu rentabilidad.
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-8xl font-black text-primary/5 select-none font-serif">01</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(200,100,70,0.1)]"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${service.color}`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-primary font-bold text-lg">Proyectos desde USD 400 | Resultados en semanas</p>
                </div>
            </div>
        </section>
    );
}
