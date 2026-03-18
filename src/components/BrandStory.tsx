import { motion } from 'framer-motion';

const BrandStory = () => {
    return (
        <section className="py-24 bg-surface-container-low relative overflow-hidden">
            {/* Decorative tricolor vertical stripe on right */}
            <div className="absolute right-0 top-0 bottom-0 z-10 flex">
                <div className="w-1.5 bg-tuscan-green" />
                <div className="w-1.5 bg-white/80" />
                <div className="w-1.5 bg-tuscan-red" />
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image Grid */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 mt-12"
                            >
                                <img
                                    src="/assets/italian_ingredients_rustic_1769721864775.png"
                                    alt="Fresh Italian Ingredients"
                                    className="shadow-lg w-full h-64 object-cover ring-2 ring-tuscan-green/20"
                                />
                                <div className="p-6 bg-tuscan-green text-white editorial-shadow">
                                    <p className="font-headline italic text-lg">
                                        "Vero Gusto Italiano"
                                    </p>
                                    <p className="text-white/70 text-xs mt-1 uppercase tracking-widest">True Italian Taste</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/assets/plated_pasta_premium_1769721852433.png"
                                    alt="Plated Pasta"
                                    className="shadow-xl w-full h-80 object-cover ring-2 ring-tuscan-red/20"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-tuscan-red font-bold tracking-widest uppercase mb-2 block text-xs">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
                            From the <span className="text-tuscan-green">Heart</span> of <span className="text-tuscan-red">Tuscany</span>
                        </h2>
                        <div className="flex h-1.5 w-24 overflow-hidden mb-8">
                            <div className="w-1/3 bg-tuscan-green" />
                            <div className="w-1/3 bg-white border-y border-gray-200" />
                            <div className="w-1/3 bg-tuscan-red" />
                        </div>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                            At Tuscanini, we believe that great food starts with the soil. Our ingredients are sourced directly from small family farms across the Italian countryside. We don't cut corners; we honor traditions that have been passed down for generations.
                        </p>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                            When you open a jar of Tuscanini, you aren't just making dinner — you're inviting <span className="text-tuscan-green font-semibold">Italy</span> to your table.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-tuscan-green text-white px-8 py-3 hover:bg-tuscan-green-dark transition-all duration-300 uppercase tracking-widest text-sm font-semibold shadow-lg shadow-tuscan-green/20">
                                Discover Our Process
                            </button>
                            <button className="border-2 border-tuscan-red text-tuscan-red px-8 py-3 hover:bg-tuscan-red hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
                                Find a Store
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
