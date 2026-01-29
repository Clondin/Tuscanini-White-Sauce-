import React from 'react';
import { motion } from 'framer-motion';

const BrandStory = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Image Grid Side */}
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
                                    src="/assets/italian_ingredients_rustic.png"
                                    alt="Fresh Ingredients"
                                    className="rounded-lg shadow-lg w-full h-64 object-cover"
                                />
                                <div className="p-6 bg-tuscan-cream rounded-lg shadow-md border-l-4 border-tuscan-gold">
                                    <p className="font-serif italic text-tuscan-black text-lg">
                                        "Vero Gusto Italiano"
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="/assets/plated_pasta_premium.png"
                                    alt="Plated Pasta"
                                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-tuscan-gold font-bold tracking-widest uppercase mb-2 block"
                        >
                            Our Story
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif text-tuscan-black mb-6"
                        >
                            From the Heart of Tuscany
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-700 text-lg leading-relaxed mb-6"
                        >
                            At Tuscanini, we believe that great food starts with the soil. Our ingredients are sourced directly from small family farms across the Italian countryside. We don't cut corners; we honor traditions that have been passed down for generations.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-700 text-lg leading-relaxed mb-8"
                        >
                            When you open a jar of Tuscanini, you aren't just making dinner—you're inviting Italy to your table.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="border-2 border-tuscan-black px-8 py-3 rounded-full hover:bg-tuscan-black hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                        >
                            Discover Our Process
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BrandStory;
