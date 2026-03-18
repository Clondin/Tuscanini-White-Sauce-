import { motion } from 'framer-motion';
import { wordRevealContainer, wordRevealChild } from '../utils/animations';
import SkeletonImage from './ui/SkeletonImage';

const headlineWords = ['From', 'the', 'Heart', 'of', 'Tuscany'];

const BrandStory = () => {
    return (
        <section id="story" className="py-12 md:py-24 bg-surface-container-low relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04] bg-repeat pointer-events-none" style={{ backgroundImage: "url('/assets/texture-marble.png')" }} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <SkeletonImage
                            src="/assets/alfredo-lifestyle.png"
                            alt="Tuscanini Alfredo with fresh fettuccine"
                            className="shadow-xl w-full h-56 sm:h-72 md:h-96 object-cover"
                        />
                        <div className="p-6 bg-surface editorial-shadow border-l-4 border-tuscan-green mt-4">
                            <span className="font-headline text-4xl md:text-5xl text-tuscan-gold/20 leading-none select-none">&ldquo;</span>
                            <p className="font-accent text-3xl md:text-5xl text-on-surface -mt-4">
                                Vero Gusto Italiano
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-tuscan-red font-bold tracking-widest uppercase mb-2 block text-xs">Our Story</span>
                        <motion.h2
                            variants={wordRevealContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-2xl sm:text-3xl md:text-5xl font-headline font-bold text-primary mb-6 flex flex-wrap gap-x-[0.3em]"
                        >
                            {headlineWords.map((word, i) => (
                                <span key={i} className="overflow-hidden inline-block">
                                    <motion.span variants={wordRevealChild} className="inline-block">
                                        {word}
                                    </motion.span>
                                </span>
                            ))}
                        </motion.h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                            At Tuscanini, we believe that great food starts with the soil. Our ingredients are sourced directly from small family farms across the Italian countryside. We don't cut corners; we honor traditions that have been passed down for generations.
                        </p>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                            When you open a jar of Tuscanini, you aren't just making dinner — you're inviting Italy to your table.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
