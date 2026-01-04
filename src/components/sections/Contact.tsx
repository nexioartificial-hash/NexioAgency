"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-transparent border-t border-border/50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 text-foreground">
                            HABLEMOS <span className="text-primary italic">EN SERIO</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            ¿Tenés un proceso que te roba tiempo? Te ayudo a pensar si la IA es la solución.
                        </p>
                    </div>

                    <div className="space-y-8 max-w-2xl mx-auto">
                        {/* WhatsApp CTA */}
                        <motion.a
                            href="https://wa.me/5491170591782"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="block w-full py-6 rounded-2xl bg-[#128C7E] text-white font-bold text-xl flex items-center justify-center gap-3 hover:bg-[#0F7A6D] transition-all shadow-[0_0_30px_rgba(18,140,126,0.3)] hover:shadow-[0_0_40px_rgba(18,140,126,0.5)]"
                        >
                            <WhatsAppIcon className="w-7 h-7" />
                            Hablanos por WhatsApp
                        </motion.a>

                        {/* Calendly CTA */}
                        <motion.a
                            href="https://calendly.com/nexioartificial"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="block w-full py-6 rounded-2xl bg-primary text-white font-bold text-xl flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-[0_0_30px_rgba(200,100,70,0.3)] hover:shadow-[0_0_40px_rgba(200,100,70,0.5)]"
                        >
                            <Calendar className="w-7 h-7" />
                            Agendar una reunión
                        </motion.a>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-center pt-8 space-y-6"
                        >
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Ubicación</h4>
                                <p className="text-muted-foreground">Disponibilidad LATAM + España</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Contacto</h4>
                                <p className="text-foreground font-bold hover:text-primary transition-colors">
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=nexioartificial@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        nexioartificial@gmail.com
                                    </a>
                                </p>
                                <p className="text-muted-foreground font-mono">+54 9 11 7059-1782</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
