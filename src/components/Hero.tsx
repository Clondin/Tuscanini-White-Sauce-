import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 md:pt-36 overflow-hidden">
            {/* Background - hero-alfredo banner */}
            <div className="absolute inset-0 z-0">
                <img
                    alt="Tuscanini Authentic Italian Alfredo"
                    className="w-full h-full object-cover"
                    src="/assets/hero-alfredo.png"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/50 to-transparent" />
            </div>

            {/* Decorative vertical tricolor stripe on left edge */}
            <div className="absolute left-0 top-0 bottom-0 z-20 flex">
                <div className="w-1.5 bg-tuscan-green" />
                <div className="w-1.5 bg-white/80" />
                <div className="w-1.5 bg-tuscan-red" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                <div className="max-w-2xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-tuscan-green/10 backdrop-blur-md px-4 py-1.5 mb-6 text-tuscan-green font-label text-xs uppercase tracking-[0.2em] border border-tuscan-green/20"
                    >
                        {/* Mini Italian flag */}
                        <span className="flex h-3 rounded-sm overflow-hidden">
                            <span className="w-1 bg-tuscan-green" />
                            <span className="w-1 bg-white" />
                            <span className="w-1 bg-tuscan-red" />
                        </span>
                        Authentic Italian Heritage
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-headline text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter mb-8"
                    >
                        <span className="text-tuscan-green">Authentic</span> Alfredo,{' '}
                        <br className="hidden md:block" />
                        Directly from{' '}
                        <span className="text-tuscan-red">Italy</span>.
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
                        <button className="bg-tuscan-red text-white px-10 py-4 font-semibold tracking-wide hover:bg-tuscan-red-dark transition-colors duration-300 shadow-xl shadow-tuscan-red/20">
                            Explore the Collection
                        </button>
                        <button className="bg-tuscan-green text-white px-10 py-4 font-semibold hover:bg-tuscan-green-dark transition-colors duration-300 shadow-xl shadow-tuscan-green/20">
                            Watch the Process
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
