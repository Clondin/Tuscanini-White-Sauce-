import { motion } from 'framer-motion';

const RecipeSection = () => {
    return (
        <section id="recipe" className="py-32 bg-surface overflow-hidden relative">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-tuscan-green/5" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-tuscan-red/5" />

            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    {/* Text / Tip */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-5/12 order-2 md:order-1"
                    >
                        <h2 className="font-headline text-5xl font-black mb-8 leading-tight italic">
                            The <span className="text-tuscan-red">Perfect</span> Pour.
                        </h2>
                        <div className="bg-surface-container-high p-10 relative border-t-4 border-tuscan-green">
                            <span className="material-symbols-outlined absolute -top-6 -left-6 text-6xl text-tuscan-red opacity-20">restaurant</span>
                            <h3 className="font-bold text-tuscan-red uppercase tracking-[0.2em] text-sm mb-4">Chef's Secret Tip</h3>
                            <p className="text-lg italic text-on-surface-variant leading-relaxed">
                                "For the ultimate silky texture, heat the Tuscanini Alfredo sauce gently in a wide pan. Toss with al dente pasta and a splash of pasta water. The starch creates an emulsion that binds our cream and cheese perfectly to every strand."
                            </p>
                            <div className="mt-8 flex items-center gap-4 cursor-pointer group">
                                <div className="w-12 h-12 bg-tuscan-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg shadow-tuscan-green/30">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                </div>
                                <span className="font-label font-semibold text-tuscan-green group-hover:underline">View Recipe Guide</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Lifestyle Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12 order-1 md:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-tuscan-green/10 translate-x-4 translate-y-4" />
                        <div className="absolute inset-0 bg-tuscan-red/10 -translate-x-2 -translate-y-2" />
                        <img
                            alt="Premium plated fettuccine alfredo"
                            className="relative z-10 w-full h-[600px] object-cover shadow-2xl ring-2 ring-tuscan-green/20"
                            src="/assets/plated_pasta_premium_1769721852433.png"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecipeSection;
