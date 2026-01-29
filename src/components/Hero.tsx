
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image - Parallax Effect */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/assets/banner-vineyard.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    filter: 'brightness(0.6)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="block text-lg md:text-2xl font-sans tracking-[0.2em] uppercase mb-4 text-tuscan-gold"
                >
                    Authentic Italian Craftsmanship
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-8xl font-serif font-bold mb-6 text-shadow-lg leading-tight"
                >
                    Taste the Tradition.<br />
                    Elevate the Everyday.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto text-gray-200"
                >
                    Premium sauces, bronze-cut pasta, and the soul of Tuscany in every jar.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="bg-tuscan-gold text-white px-10 py-4 rounded-full text-lg font-semibold tracking-wide hover:bg-white hover:text-tuscan-gold transition-colors duration-300 shadow-xl"
                >
                    Shop Collection
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5" /></svg>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
