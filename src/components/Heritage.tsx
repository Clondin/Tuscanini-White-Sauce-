import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { wordRevealContainer, wordRevealChild } from '../utils/animations';
import { useCountUp } from '../hooks/useCountUp';
import SkeletonImage from './ui/SkeletonImage';

const headlineWords = [
    { text: 'Heritage', weight: 'font-bold' },
    { text: 'in', weight: 'font-light' },
    { text: 'Every', weight: 'font-light' },
    { text: 'Jar', weight: 'font-bold' },
];

const Heritage = () => {
    const statsRef = useRef<HTMLDivElement>(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
    const yearCount = useCountUp(1987, statsInView, 2500);
    const importedCount = useCountUp(100, statsInView, 2000);

    return (
        <section id="heritage" className="py-12 md:py-24 bg-surface-container-low relative">
            <div className="absolute inset-0 opacity-[0.06] bg-cover bg-center pointer-events-none" style={{ backgroundImage: "url('/assets/rustic-flour-wood.png')" }} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <SkeletonImage
                            alt="Tuscanini Sauce Collection"
                            className="editorial-shadow w-full object-contain bg-white p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                            src="/assets/group-sauces.png"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <motion.h2
                            variants={wordRevealContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="font-headline text-2xl sm:text-3xl md:text-5xl text-primary leading-tight flex flex-wrap gap-x-[0.3em]"
                        >
                            {headlineWords.map((word, i) => (
                                <span key={i} className="overflow-hidden inline-block">
                                    <motion.span variants={wordRevealChild} className={`inline-block ${word.weight}`}>
                                        {word.text}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.h2>
                        <div className="flex h-1 w-20 overflow-hidden">
                            <div className="w-1/3 bg-tuscan-green" />
                            <div className="w-1/3 bg-white border-y border-gray-200" />
                            <div className="w-1/3 bg-tuscan-red" />
                        </div>
                        <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant">
                            Every jar of Tuscanini Alfredo is a testament to generations of culinary excellence. We believe that true luxury lies in simplicity. Our sauce isn't just made; it's curated using time-honored techniques passed down through Italian families.
                        </p>

                        {/* Animated stat counters */}
                        <div ref={statsRef} className="flex gap-6 sm:gap-8 py-2">
                            <div>
                                <span className="font-headline text-3xl md:text-4xl font-bold text-tuscan-gold">
                                    {statsInView ? yearCount : 0}
                                </span>
                                <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Since</p>
                            </div>
                            <div>
                                <span className="font-headline text-3xl md:text-4xl font-bold text-tuscan-gold">
                                    {statsInView ? importedCount : 0}%
                                </span>
                                <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-1">Imported</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pt-2 sm:pt-4">
                            <div className="border-l-4 border-tuscan-green pl-4">
                                <h4 className="font-headline text-xl text-primary font-bold">Imported Quality</h4>
                                <p className="text-sm mt-2 text-on-surface-variant">
                                    The 'Imported from Italy' stamp ensures you receive the same ingredients found in Michelin-star kitchens across Rome.
                                </p>
                            </div>
                            <div className="border-l-4 border-tuscan-red pl-4">
                                <h4 className="font-headline text-xl text-primary font-bold">Small Batch</h4>
                                <p className="text-sm mt-2 text-on-surface-variant">
                                    We prioritize quality over quantity, producing our sauces in limited runs to maintain consistent artisan texture.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
