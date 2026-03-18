import { motion } from 'framer-motion';

const IngredientsSection = () => {
    return (
        <section id="ingredients" className="py-12 md:py-24 bg-surface-container-highest">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10 md:mb-20"
                >
                    <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-6">Simply Better Ingredients.</h2>
                    <p className="text-on-surface-variant">
                        We source our ingredients from local Italian producers who share our commitment to purity. No fillers, no shortcuts — just the true essence of Parmesan and cream.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
                    >
                        <img
                            src="/assets/parmesan-cheese.png"
                            alt="Parmigiano-Reggiano Cheese"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-center text-white">
                            <h3 className="font-headline text-2xl font-bold mb-4">Aged Parmesan</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Hand-selected cheeses aged to perfection to provide that characteristic sharp, nutty depth.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="relative group md:col-span-1"
                    >
                        <img
                            alt="Vodka Pasta Dish"
                            className="w-full h-full object-cover min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
                            src="/assets/vodka-pasta-dish.png"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <button className="bg-surface text-primary px-6 py-3 font-semibold uppercase tracking-widest text-xs">
                                Explore Provenance
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[400px]"
                    >
                        <img
                            src="/assets/tuscanini-cream.png"
                            alt="Fresh Italian Cream"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 text-center text-white">
                            <h3 className="font-headline text-2xl font-bold mb-4">Pure Cream</h3>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Sourced from cows grazed on the lush pastures of Northern Italy for a naturally thick consistency.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IngredientsSection;
