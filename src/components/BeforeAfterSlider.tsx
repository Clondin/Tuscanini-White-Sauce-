import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderX, setSliderX] = useState(50);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderX(Math.max(5, Math.min(95, x)));
    };

    const handlePointerDown = (e: React.PointerEvent) => {
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    return (
        <section className="py-12 md:py-24 bg-surface-container-low">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 md:mb-12"
                >
                    <span className="text-tuscan-red font-label text-xs uppercase tracking-[0.2em] mb-3 block">Before &amp; After</span>
                    <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-primary">From Jar to Plate</h2>
                </motion.div>

                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden cursor-col-resize h-[250px] sm:h-[350px] md:h-[500px] select-none touch-none"
                    onPointerMove={handlePointerMove}
                    onPointerDown={handlePointerDown}
                >
                    {/* After image (full) */}
                    <img
                        src="/assets/plated_pasta_premium_1769721852433.png"
                        alt="Plated pasta dish"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Before image (clipped) */}
                    <div
                        className="absolute inset-0"
                        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
                    >
                        <img
                            src="/assets/group-sauces.png"
                            alt="Sauce jars"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Divider line */}
                    <div
                        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
                        style={{ left: `${sliderX}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                                <path d="M7 4L3 10L7 16M13 4L17 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Labels */}
                    <span className="absolute top-4 left-4 bg-white/90 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1">
                        Jar
                    </span>
                    <span className="absolute top-4 right-4 bg-white/90 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1">
                        Plate
                    </span>
                </motion.div>
            </div>
        </section>
    );
};

export default BeforeAfterSlider;
