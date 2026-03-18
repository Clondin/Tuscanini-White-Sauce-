import type { Variants } from 'framer-motion';

export const TUSCAN_EASE = [0.22, 1, 0.36, 1] as const;

export const wordRevealContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const wordRevealChild: Variants = {
    hidden: {
        y: '100%',
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: TUSCAN_EASE as unknown as number[],
        },
    },
};

export const burstVariant = (angle: number, distance: number): Variants => ({
    hidden: {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
    },
    visible: {
        x: Math.cos((angle * Math.PI) / 180) * distance,
        y: Math.sin((angle * Math.PI) / 180) * distance,
        opacity: [0, 1, 1, 0.8],
        scale: [0, 1.3, 1],
        transition: {
            duration: 0.8,
            ease: TUSCAN_EASE as unknown as number[],
        },
    },
});
