import { useState, type ReactNode, type ButtonHTMLAttributes, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Ripple {
    id: number;
    x: number;
    y: number;
}

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

let rippleId = 0;

const RippleButton = ({ children, className = '', onClick, ...props }: RippleButtonProps) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = ++rippleId;

        setRipples((prev) => [...prev, { id, x, y }]);
        setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);

        onClick?.(e);
    };

    return (
        <button className={`relative overflow-hidden ${className}`} onClick={handleClick} {...props}>
            {children}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.span
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.4 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute rounded-full bg-white/30 pointer-events-none"
                        style={{
                            left: ripple.x - 20,
                            top: ripple.y - 20,
                            width: 40,
                            height: 40,
                        }}
                    />
                ))}
            </AnimatePresence>
        </button>
    );
};

export default RippleButton;
