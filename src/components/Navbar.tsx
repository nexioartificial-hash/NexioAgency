"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Nosotros", href: "#about" },
    { name: "Cómo trabajamos", href: "#method" },
    { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-transparent backdrop-blur-md border-border/20 py-3"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/logo_nexio_transparent_absolute.png"
                            alt="Nexio Logo"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(200,100,70,0.5)]"
                            priority
                        />
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight text-foreground">
                        NEXIO AGENCY
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://calendly.com/nexioartificial/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:opacity-90 transition-all shadow-[0_0_15px_rgba(200,100,70,0.4)]"
                    >
                        Agendar llamada
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border py-6 px-6 md:hidden flex flex-col gap-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://calendly.com/nexioartificial/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-full py-3 rounded-xl bg-primary text-white text-center font-bold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Agendar llamada
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
