"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    opacity: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);
    const mouse = useRef({ x: 0, y: 0, radius: 200 });

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        const numberOfParticles = 150;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        handleResize();

        function init() {
            particles = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas!.width;
                const y = Math.random() * canvas!.height;
                particles.push({
                    x: x,
                    y: y,
                    baseX: x,
                    baseY: y,
                    size: Math.random() * 2 + 1,
                    density: (Math.random() * 25) + 5,
                    opacity: Math.random() * 0.6 + 0.3,
                });
            }
        }

        function animate() {
            ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                const dx = mouse.current.x - p.x;
                const dy = mouse.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.current.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.current.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * p.density;
                    const directionY = forceDirectionY * force * p.density;
                    p.x -= directionX;
                    p.y -= directionY;
                } else {
                    if (p.x !== p.baseX) {
                        p.x -= (p.x - p.baseX) / 15;
                    }
                    if (p.y !== p.baseY) {
                        p.y -= (p.y - p.baseY) / 15;
                    }
                }

                ctx!.beginPath();
                ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(200, 100, 70, ${p.opacity})`;
                ctx!.fill();
            }
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mounted]);

    if (!mounted) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-10"
            style={{ display: "block", background: "transparent" }}
        />
    );
}
