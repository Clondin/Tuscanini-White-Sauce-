import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-36 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <picture>
                    <source
                        media="(min-width: 768px)"
                        srcSet="/assets/hero-alfredo.png"
                    />
                    <img
                        alt="Tuscanini Authentic Italian Alfredo"
                        className="w-full h-full object-cover"
                        src="https://github.com/user-attachments/assets/f89e9aec-59d4-4545-90ce-bada816fe438"
                    />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-transparent md:bg-gradient-to-r md:from-surface/70 md:via-surface/30 md:to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
                <div className="max-w-2xl md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold text-primary/60 leading-[1.1] tracking-tighter mb-4 sm:mb-6 md:mb-8"
                    >
                        Authentic Alfredo, Directly from Italy.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="font-body text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg mx-auto md:mx-0 mb-6 sm:mb-8 md:mb-10 leading-relaxed"
                    >
                        A rich, creamy, and traditional sauce crafted with artisanal expertise and imported directly from the heart of Italy.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <button className="bg-tuscan-green text-white px-6 py-3 text-sm sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-base font-semibold tracking-wide hover:bg-tuscan-green-dark transition-colors duration-300">
                            Explore the Collection
                        </button>
                        <button className="bg-transparent border border-outline/20 text-on-surface px-6 py-3 text-sm sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-base font-semibold hover:bg-surface-container-low transition-colors duration-300">
                            Watch the Process
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
