import { motion } from 'framer-motion';

const Heritage = () => {
    return (
        <section id="heritage" className="py-24 bg-surface-container-low relative">
            {/* Top border: tricolor stripe */}
            <div className="absolute top-0 left-0 right-0 flex h-1">
                <div className="w-1/3 bg-tuscan-green" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-tuscan-red" />
            </div>

            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-tuscan-green/15 -z-10" />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-tuscan-red/15 -z-10" />
                        <img
                            alt="Tuscanini Alfredo Sauce Jar"
                            className="editorial-shadow w-full aspect-[4/5] object-contain bg-white p-8 transition-transform duration-700 group-hover:scale-[1.02] border-b-4 border-tuscan-green"
                            src="/assets/product-alfredo.png"
                        />
                        <div className="absolute bottom-6 -right-6 bg-surface p-8 editorial-shadow max-w-[200px] border-l-4 border-tuscan-red">
                            <p className="font-headline text-2xl text-tuscan-red leading-tight italic">Est. 1910</p>
                            <p className="font-label text-xs uppercase tracking-widest mt-2 text-tuscan-green">The Gold Standard</p>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h2 className="font-headline text-5xl font-bold leading-tight">
                            <span className="text-tuscan-green">Heritage</span> in Every <span className="text-tuscan-red">Jar</span>
                        </h2>
                        {/* Italian tricolor divider */}
                        <div className="flex h-1.5 w-24 overflow-hidden">
                            <div className="w-1/3 bg-tuscan-green" />
                            <div className="w-1/3 bg-white border-y border-gray-200" />
                            <div className="w-1/3 bg-tuscan-red" />
                        </div>
                        <p className="text-lg leading-relaxed text-on-surface-variant">
                            Every jar of Tuscanini Alfredo is a testament to generations of culinary excellence. We believe that true luxury lies in simplicity. Our sauce isn't just made; it's curated using time-honored techniques passed down through Italian families.
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="border-l-4 border-tuscan-green pl-4 bg-tuscan-green/5 p-4">
                                <h4 className="font-headline text-xl text-tuscan-green font-bold">Imported Quality</h4>
                                <p className="text-sm mt-2 text-on-surface-variant">
                                    The 'Imported from Italy' stamp ensures you receive the same ingredients found in Michelin-star kitchens across Rome.
                                </p>
                            </div>
                            <div className="border-l-4 border-tuscan-red pl-4 bg-tuscan-red/5 p-4">
                                <h4 className="font-headline text-xl text-tuscan-red font-bold">Small Batch</h4>
                                <p className="text-sm mt-2 text-on-surface-variant">
                                    We prioritize quality over quantity, producing our sauces in limited runs to maintain consistent artisan texture.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Heritage;
