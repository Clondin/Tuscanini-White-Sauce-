interface SectionDividerProps {
    variant?: 'wave' | 'curve' | 'torn';
    fill?: string;
    flip?: boolean;
}

const SectionDivider = ({ variant = 'wave', fill = '#fcf9f3', flip = false }: SectionDividerProps) => {
    const transform = flip ? 'scaleY(-1)' : undefined;

    const paths: Record<string, string> = {
        wave: 'M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,160 L0,160 Z',
        curve: 'M0,128 Q720,0 1440,128 L1440,160 L0,160 Z',
        torn: 'M0,80 L120,96 L240,72 L360,104 L480,64 L600,96 L720,80 L840,112 L960,72 L1080,96 L1200,80 L1320,104 L1440,72 L1440,160 L0,160 Z',
    };

    return (
        <div className="relative w-full -my-px pointer-events-none select-none" style={{ transform }}>
            <svg
                viewBox="0 0 1440 160"
                preserveAspectRatio="none"
                className="w-full h-12 md:h-20 block"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d={paths[variant]} fill={fill} />
            </svg>
        </div>
    );
};

export default SectionDivider;
