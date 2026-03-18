import { motion } from 'framer-motion';
import { wordRevealContainer, wordRevealChild, burstVariant } from '../utils/animations';

const headlineWords = ['Simply', 'Better', 'Ingredients.'];
const burstEmojis = ['🧀', '🍅', '🥛', '🌿', '🧈'];
const burstAngles = [30, 90, 150, 210, 330];

const IngredientsSection = () => {
    return (
        <section id="ingredients" className="py-12 md:py-24 bg-surface-container-highest">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-20 relative"
                >
                    <motion.h2
                        variants={wordRevealContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-6 flex flex-wrap justify-center gap-x-[0.3em]"
                    >
                        {headlineWords.map((word, i) => (
                            <span key={i} className="overflow-hidden inline-block">
                                <motion.span variants={wordRevealChild} className="inline-block">
                                    {word}
                                </motion.span>
                            </span>
                        ))}
                    </motion.h2>

                    {/* Ingredient burst icons */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {burstEmojis.map((emoji, i) => (
                            <motion.span
                                key={i}
                                className="absolute text-xl md:text-2xl"
                                variants={burstVariant(burstAngles[i], 70)}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.08 }}
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </div>

                    <p className="text-on-surface-variant">
                        We source our ingredients from local Italian producers who share our commitment to purity. No fillers, no shortcuts — just the true essence of Parmesan and cream.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
                    >
                        <motion.img
                            src="/assets/parmigiano-wedge.png"
                            alt="Parmigiano-Reggiano Cheese"
                            className="w-full h-full object-cover absolute inset-0"
                            initial={{ scale: 1.3, filter: 'blur(8px)' }}
                            whileInView={{ scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-center text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 className="font-headline text-2xl font-bold mb-4">Aged Parmesan</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Hand-selected cheeses aged to perfection to provide that characteristic sharp, nutty depth.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative group md:col-span-1 overflow-hidden"
                    >
                        <motion.img
                            alt="European Butter"
                            className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
                            src="/assets/european-butter.png"
                            initial={{ scale: 1.3, filter: 'blur(8px)' }}
                            whileInView={{ scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.15, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-center text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 className="font-headline text-2xl font-bold mb-4">European Butter</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Higher butterfat content for an exceptionally silky, rich texture in every spoonful.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
                    >
                        <motion.img
                            src="/assets/tuscanini-cream.png"
                            alt="Fresh Italian Cream"
                            className="w-full h-full object-cover absolute inset-0"
                            initial={{ scale: 1.3, filter: 'blur(8px)' }}
                            whileInView={{ scale: 1, filter: 'blur(0px)' }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-center text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <h3 className="font-headline text-2xl font-bold mb-4">Pure Cream</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Sourced from cows grazed on the lush pastures of Northern Italy for a naturally thick consistency.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IngredientsSection;
