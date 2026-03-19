import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [phase, setPhase] = useState<'logo' | 'shimmer' | 'exit'>('logo');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('shimmer'), 1200);
        const t2 = setTimeout(() => setPhase('exit'), 2600);
        const t3 = setTimeout(onComplete, 3400);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {phase !== 'exit' ? null : null}
            <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a08] overflow-hidden"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                key="loading-screen"
            >
                {/* Subtle radial glow behind logo */}
                <motion.div
                    className="absolute w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(253,208,141,0.08) 0%, transparent 70%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: [0, 0.6, 0.4] }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                />

                {/* Floating gold particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[#fdd08d]"
                        initial={{
                            x: (Math.random() - 0.5) * 200,
                            y: (Math.random() - 0.5) * 200,
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, Math.random() * 1.5 + 0.5, 0],
                            y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 300],
                        }}
                        transition={{
                            duration: Math.random() * 2 + 2,
                            delay: Math.random() * 1.5 + 0.5,
                            ease: 'easeOut',
                        }}
                    />
                ))}

                <div className="relative flex flex-col items-center">
                    {/* Italian flag line above logo */}
                    <motion.div
                        className="flex h-[2px] overflow-hidden mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 120, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="w-1/3 bg-tuscan-green" />
                        <div className="w-1/3 bg-white/60" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </motion.div>

                    {/* Logo container with shimmer */}
                    <div className="relative">
                        {/* Main logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <img
                                src="/assets/tuscanini-logo.svg"
                                alt="Tuscanini"
                                className="w-64 sm:w-80 md:w-96 loading-logo"
                            />
                        </motion.div>

                        {/* Gold shimmer sweep */}
                        <motion.div
                            className="absolute inset-0 loading-shimmer pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={phase === 'shimmer' ? { opacity: [0, 1, 0] } : {}}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                        />
                    </div>

                    {/* Tagline */}
                    <motion.p
                        className="mt-8 text-[#fdd08d]/70 font-label text-xs uppercase tracking-[0.35em]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Imported from Italy
                    </motion.p>

                    {/* Italian flag line below */}
                    <motion.div
                        className="flex h-[2px] overflow-hidden mt-6"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 120, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="w-1/3 bg-tuscan-green" />
                        <div className="w-1/3 bg-white/60" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </motion.div>

                    {/* Loading progress bar */}
                    <motion.div
                        className="mt-10 h-[1px] bg-[#fdd08d]/10 overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: 200 }}
                        transition={{ duration: 0.4, delay: 1 }}
                    >
                        <motion.div
                            className="h-full bg-gradient-to-r from-tuscan-green via-[#fdd08d] to-tuscan-red"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                    </motion.div>
                </div>

                {/* Corner accents */}
                <motion.div
                    className="absolute top-8 left-8 w-12 h-12 border-l border-t border-[#fdd08d]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                    className="absolute top-8 right-8 w-12 h-12 border-r border-t border-[#fdd08d]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                    className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[#fdd08d]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.div
                    className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[#fdd08d]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default LoadingScreen;
