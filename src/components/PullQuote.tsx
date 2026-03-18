import { motion } from 'framer-motion';

const PullQuote = () => {
    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-headline text-6xl md:text-8xl text-tuscan-gold/30 leading-none select-none block">&ldquo;</span>
                    <blockquote className="font-headline italic text-2xl sm:text-3xl md:text-4xl text-primary leading-snug -mt-6 md:-mt-10 mb-6">
                        The secret is never the recipe — it is always the ingredients.
                    </blockquote>
                    <div className="flex h-1 w-16 mx-auto overflow-hidden mb-4">
                        <div className="w-1/3 bg-tuscan-green" />
                        <div className="w-1/3 bg-white border-y border-gray-200" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </div>
                    <cite className="text-sm text-on-surface-variant not-italic tracking-widest uppercase">— Traditional Italian Proverb</cite>
                </motion.div>
            </div>
        </section>
    );
};

export default PullQuote;
