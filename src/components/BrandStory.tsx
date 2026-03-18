import { motion } from 'framer-motion';

const BrandStory = () => {
    return (
        <section className="py-24 bg-surface-container-low relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <img
                            src="/assets/mac-and-cheese-dish.png"
                            alt="Plated Mac and Cheese"
                            className="shadow-xl w-full h-96 object-cover"
                        />
                        <div className="p-6 bg-surface editorial-shadow border-l-4 border-tuscan-green mt-4">
                            <p className="font-headline italic text-on-surface text-lg">
                                "Vero Gusto Italiano"
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
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-6">From the Heart of Tuscany</h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                            At Tuscanini, we believe that great food starts with the soil. Our ingredients are sourced directly from small family farms across the Italian countryside. We don't cut corners; we honor traditions that have been passed down for generations.
                        </p>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                            When you open a jar of Tuscanini, you aren't just making dinner — you're inviting Italy to your table.
                        </p>
                        <button className="bg-tuscan-green text-white px-8 py-3 hover:bg-tuscan-green-dark transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
                            Discover Our Process
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
