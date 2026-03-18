import { motion } from 'framer-motion';

const Newsletter = () => {
    return (
        <section className="py-24 bg-tuscan-green text-white overflow-hidden relative">
            {/* Decorative large T */}
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden">
                <span className="font-headline text-[30rem] leading-none select-none">T</span>
            </div>

            {/* Bottom tricolor accent */}
            <div className="absolute bottom-0 left-0 right-0 flex h-1.5">
                <div className="w-1/3 bg-tuscan-green-dark" />
                <div className="w-1/3 bg-white" />
                <div className="w-1/3 bg-tuscan-red" />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl"
                >
                    <div className="flex h-4 w-12 overflow-hidden mb-6 rounded-sm">
                        <div className="w-1/3 bg-white/80" />
                        <div className="w-1/3 bg-white/40" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </div>
                    <h2 className="font-headline text-4xl font-bold mb-4 leading-tight">
                        Join the Inner Circle of <span className="text-tuscan-red">Italian</span> Taste.
                    </h2>
                    <p className="text-white/70 text-lg">
                        Receive exclusive recipes, artisan stories, and first access to our limited-release collections.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex w-full md:w-auto gap-2"
                >
                    <label htmlFor="newsletter-email" className="sr-only">Email Address</label>
                    <input
                        id="newsletter-email"
                        className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:ring-2 focus:ring-tuscan-red w-full md:w-80 px-6 py-4 outline-none"
                        placeholder="Email Address"
                        type="email"
                    />
                    <button className="bg-tuscan-red text-white px-8 py-4 font-bold whitespace-nowrap hover:bg-tuscan-red-dark transition-colors shadow-lg shadow-tuscan-red/30">
                        Subscribe
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
