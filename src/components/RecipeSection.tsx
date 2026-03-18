import { motion } from 'framer-motion';

const RecipeSection = () => {
    return (
        <section id="recipe" className="py-32 bg-surface overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-5/12 order-2 md:order-1"
                    >
                        <h2 className="font-headline text-5xl font-black text-primary mb-8 leading-tight italic">The Perfect Pour.</h2>
                        <div className="bg-surface-container-high p-10 relative">
                            <span className="material-symbols-outlined absolute -top-6 -left-6 text-6xl text-tuscan-red opacity-20">restaurant</span>
                            <h3 className="font-bold text-tuscan-red uppercase tracking-[0.2em] text-sm mb-4">Chef's Secret Tip</h3>
                            <p className="text-lg italic text-on-surface-variant leading-relaxed">
                                "For the ultimate silky texture, heat the Tuscanini Alfredo sauce gently in a wide pan. Toss with al dente pasta and a splash of pasta water. The starch creates an emulsion that binds our cream and cheese perfectly to every strand."
                            </p>
                            <div className="mt-8 flex items-center gap-4 cursor-pointer group">
                                <div className="w-12 h-12 bg-tuscan-green rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                                </div>
                                <span className="font-label font-semibold text-tuscan-green">View Recipe Guide</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-7/12 order-1 md:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-tuscan-green/5 translate-x-4 translate-y-4" />
                        <img
                            alt="Premium plated fettuccine alfredo"
                            className="relative z-10 w-full h-[600px] object-cover shadow-2xl"
                            src="/assets/plated_pasta_premium_1769721852433.png"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecipeSection;
