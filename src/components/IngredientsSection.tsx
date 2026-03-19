import { motion } from 'framer-motion';
import { wordRevealContainer, wordRevealChild } from '../utils/animations';

const TUSCAN_EASE = [0.22, 1, 0.36, 1];

const headlineWords = ['Simply', 'Better', 'Ingredients.'];

const ingredients = [
    {
        src: '/assets/parmigiano-wedge.png',
        alt: 'Parmigiano-Reggiano Cheese',
        title: 'Aged Parmesan',
        desc: 'Hand-selected cheeses aged to perfection to provide that characteristic sharp, nutty depth.',
    },
    {
        src: '/assets/european-butter.png',
        alt: 'European Butter',
        title: 'European Butter',
        desc: 'Higher butterfat content for an exceptionally silky, rich texture in every spoonful.',
    },
    {
        src: '/assets/tuscanini-cream.png',
        alt: 'Fresh Italian Cream',
        title: 'Pure Cream',
        desc: 'Sourced from cows grazed on the lush pastures of Northern Italy for a naturally thick consistency.',
    },
];

const cardContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

const cardItem = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1, ease: TUSCAN_EASE },
    },
};

const IngredientsSection = () => {
    return (
        <section id="ingredients" className="py-12 md:py-24 bg-surface-container-highest">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: TUSCAN_EASE }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-20"
                >
                    <motion.h2
                        variants={wordRevealContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 flex flex-wrap justify-center gap-x-[0.3em]"
                    >
                        {headlineWords.map((word, i) => (
                            <span key={i} className="overflow-hidden inline-block">
                                <motion.span variants={wordRevealChild} className="inline-block">
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h2>

                    {/* Animated divider line */}
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.span
                            className="block h-px bg-primary/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8, ease: TUSCAN_EASE }}
                        />
                        <motion.span
                            className="block w-1.5 h-1.5 rounded-full bg-tuscan-red"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.4, ease: TUSCAN_EASE }}
                        />
                        <motion.span
                            className="block h-px bg-primary/30"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8, ease: TUSCAN_EASE }}
                        />
                    </motion.div>

                    <motion.p
                        className="text-on-surface-variant"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7, ease: TUSCAN_EASE }}
                    >
                        We source our ingredients from local Italian producers who share our commitment to purity. No fillers, no shortcuts — just the true essence of Parmesan and cream.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2"
                    variants={cardContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {ingredients.map((ing, i) => (
                        <motion.div
                            key={i}
                            variants={cardItem}
                            className="relative overflow-hidden rounded-lg min-h-[250px] sm:min-h-[300px] md:min-h-[400px] group cursor-pointer"
                        >
                            <motion.img
                                src={ing.src}
                                alt={ing.alt}
                                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                                initial={{ scale: 1.25, filter: 'blur(6px)' }}
                                whileInView={{ scale: 1, filter: 'blur(0px)' }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: i * 0.12, duration: 1.4, ease: TUSCAN_EASE }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-center text-white transition-transform duration-500 ease-out group-hover:-translate-y-1"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: TUSCAN_EASE }}
                            >
                                <h3 className="font-headline text-2xl font-bold mb-4">{ing.title}</h3>
                                <p className="text-sm text-white/80 leading-relaxed max-w-xs mx-auto">
                                    {ing.desc}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IngredientsSection;
