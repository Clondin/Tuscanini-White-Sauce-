import { motion } from 'framer-motion';
import RippleButton from './ui/RippleButton';
import MagneticWrap from './ui/MagneticWrap';

const Newsletter = () => {
    return (
        <section className="py-12 md:py-24 bg-primary text-on-primary overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.04] bg-repeat pointer-events-none" style={{ backgroundImage: "url('/assets/texture-linen.png')" }} />
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden hidden sm:block">
                <span className="font-headline text-[30rem] leading-none select-none">T</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl"
                >
                    <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Join the Inner Circle of Italian Taste.</h2>
                    <p className="text-on-primary/70 text-base sm:text-lg">
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
                        className="bg-white/10 border-none text-on-primary placeholder:text-on-primary/40 focus:ring-2 focus:ring-tuscan-green w-full md:w-80 px-6 py-4 outline-none text-base"
                        placeholder="Email Address"
                        type="email"
                    />
                    <MagneticWrap>
                        <RippleButton className="bg-tuscan-red text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 font-bold whitespace-nowrap hover:bg-tuscan-red-dark transition-colors">
                            Subscribe
                        </RippleButton>
                    </MagneticWrap>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
