import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-36 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Tuscanini Authentic Italian Alfredo"
                    className="w-full h-full object-cover"
                    src="/assets/hero-alfredo.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface/70 via-surface/30 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-headline text-4xl md:text-6xl font-bold text-primary/60 leading-[1.1] tracking-tighter mb-8"
                    >
                        Authentic Alfredo, Directly from Italy.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed"
                    >
                        A rich, creamy, and traditional sauce crafted with artisanal expertise and imported directly from the heart of Italy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="bg-tuscan-green text-white px-10 py-4 font-semibold tracking-wide hover:bg-tuscan-green-dark transition-colors duration-300">
                            Explore the Collection
                        </button>
                        <button className="bg-transparent border border-outline/20 text-on-surface px-10 py-4 font-semibold hover:bg-surface-container-low transition-colors duration-300">
                            Watch the Process
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
