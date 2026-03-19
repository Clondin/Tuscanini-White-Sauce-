import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { wordRevealContainer, wordRevealChild } from '../utils/animations';

const words = ['Authentic', 'Alfredo,', 'Directly', 'from', 'Italy.'];

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-start md:items-center pt-24 sm:pt-28 md:pt-36 overflow-hidden">
            <motion.div className="absolute inset-0 z-0" style={{ scale: imageScale }}>
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet="/assets/hero-alfredo.png"
                    />
                    <img
                        alt="Tuscanini Authentic Italian Alfredo"
                        className="w-full h-full object-cover"
                        src="https://github.com/user-attachments/assets/f89e9aec-59d4-4545-90ce-bada816fe438"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-surface/50 to-transparent md:bg-gradient-to-r md:from-surface/70 md:via-surface/30 md:to-transparent" />
            </motion.div>

            <motion.div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full" style={{ y: textY }}>
                <div className="max-w-2xl md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                    <motion.h1
                        variants={wordRevealContainer}
                        initial="hidden"
                        animate="visible"
                        className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold text-primary/60 leading-[1.1] tracking-tighter mb-4 sm:mb-6 md:mb-8 flex flex-wrap gap-x-[0.3em] justify-center md:justify-start"
                    >
                        {words.map((word, i) => (
                            <span key={i} className="overflow-hidden inline-block">
                                <motion.span variants={wordRevealChild} className="inline-block">
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
                    >
                        A rich, creamy, and traditional sauce crafted with artisanal expertise and imported directly from the heart of Italy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <a href="#products" className="bg-tuscan-green text-white px-6 py-3 text-sm sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-base font-semibold tracking-wide hover:bg-tuscan-green-dark transition-colors duration-300">
                            Explore the Collection
                        </a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
