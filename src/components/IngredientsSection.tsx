import { motion } from 'framer-motion';

const IngredientsSection = () => {
    return (
        <section id="ingredients" className="py-24 bg-surface-container-highest relative">
            {/* Top tricolor stripe */}
            <div className="absolute top-0 left-0 right-0 flex h-1">
                <div className="w-1/3 bg-tuscan-green" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-tuscan-red" />
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="font-headline text-5xl font-bold mb-4">
                        Simply <span className="text-tuscan-green">Better</span> <span className="text-tuscan-red">Ingredients</span>.
                    </h2>
                    <div className="flex h-1.5 w-24 mx-auto overflow-hidden mb-6">
                        <div className="w-1/3 bg-tuscan-green" />
                        <div className="w-1/3 bg-white border-y border-gray-200" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </div>
                    <p className="text-on-surface-variant">
                        We source our ingredients from local Italian producers who share our commitment to purity. No fillers, no shortcuts — just the true essence of Parmesan and cream.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {/* Aged Parmesan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="bg-surface p-12 flex flex-col items-center text-center border-t-4 border-tuscan-green"
                    >
                        <span className="material-symbols-outlined text-4xl text-tuscan-green mb-6">workspace_premium</span>
                        <h3 className="font-headline text-2xl font-bold mb-4 text-tuscan-green">Aged Parmesan</h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                            Hand-selected cheeses aged to perfection to provide that characteristic sharp, nutty depth.
                        </p>
                    </motion.div>

                    {/* Center Image - Group Sauces */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="relative group md:col-span-1"
                    >
                        <img
                            alt="Tuscanini Sauce Collection"
                            className="w-full h-full object-cover min-h-[400px]"
                            src="/assets/group-sauces.png"
                        />
                        <div className="absolute inset-0 bg-tuscan-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <button className="bg-white text-tuscan-red px-6 py-3 font-semibold uppercase tracking-widest text-xs shadow-lg hover:bg-tuscan-red hover:text-white transition-colors">
                                Explore Provenance
                            </button>
                        </div>
                    </motion.div>

                    {/* Pure Cream */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-tuscan-red p-12 flex flex-col items-center text-center text-white"
                    >
                        <span className="material-symbols-outlined text-4xl text-white/80 mb-6">eco</span>
                        <h3 className="font-headline text-2xl font-bold mb-4">Pure Cream</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Sourced from cows grazed on the lush pastures of Northern Italy for a naturally thick consistency.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IngredientsSection;
