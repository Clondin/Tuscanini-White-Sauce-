import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { burstVariant } from '../utils/animations';
import { products } from '../data/products';

const burstAngles = [0, 120, 240];

const ProductShowcase = () => {
    const [flipped, setFlipped] = useState<Record<number, boolean>>({});

    const toggleFlip = (id: number) => {
        setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section id="products" className="py-12 md:py-24 bg-surface relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/assets/italian_ingredients_rustic_1769721864775.png"
                    alt=""
                    className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-surface/80 backdrop-blur-[2px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-20"
                >
                    <span className="text-tuscan-red font-label text-xs uppercase tracking-[0.2em] mb-4 block">The Collection</span>
                    <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">Our Masterpieces</h2>
                    <div className="flex h-1 w-24 mx-auto overflow-hidden">
                        <div className="w-1/3 bg-tuscan-green" />
                        <div className="w-1/3 bg-white border-y border-gray-200" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isFlipped={!!flipped[product.id]}
                            onFlip={() => toggleFlip(product.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

interface ProductCardProps {
    product: typeof products[0];
    isFlipped: boolean;
    onFlip: () => void;
}

const ProductCard = ({ product, isFlipped, onFlip }: ProductCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * -20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                delay: product.delay,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center group"
        >
            {/* Flip card container */}
            <div
                className="relative h-52 sm:h-64 md:h-80 w-full mb-8 cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={onFlip}
            >
                <motion.div
                    className="w-full h-full relative"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Front face */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        <motion.div
                            className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-surface-container-high shadow-lg"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: product.delay + 0.3,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{ boxShadow: `0 0 40px ${product.accentHex}15` }}
                        />

                        {/* Ingredient burst icons */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {product.ingredients.map((emoji, i) => (
                                <motion.span
                                    key={i}
                                    className="absolute text-2xl md:text-3xl"
                                    variants={burstVariant(burstAngles[i], 90)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: product.delay + 0.6 + i * 0.1 }}
                                >
                                    {emoji}
                                </motion.span>
                            ))}
                        </div>

                        <motion.div
                            className="relative z-10"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="h-48 sm:h-60 md:h-72 object-contain drop-shadow-2xl"
                                style={{ x: springX, y: springY }}
                                initial={{ opacity: 0, y: 80, scale: 0.8, rotate: -3 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    delay: product.delay + 0.15,
                                    duration: 1.2,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                animate={{ y: [0, -12, 0] }}
                            />
                        </motion.div>
                    </div>

                    {/* Back face */}
                    <div
                        className="absolute inset-0 flex items-center justify-center rounded-2xl p-6"
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            backgroundColor: `${product.accentHex}10`,
                            border: `2px solid ${product.accentHex}30`,
                        }}
                    >
                        <div className="text-center">
                            <span className="text-4xl mb-4 block">{product.ingredients.join(' ')}</span>
                            <h4 className="font-headline font-bold text-primary text-lg mb-2">{product.tagline}</h4>
                            <p className="text-sm text-on-surface-variant leading-relaxed">{product.backText}</p>
                            <span className="mt-4 inline-block text-xs uppercase tracking-widest text-on-surface-variant/60">Tap to flip back</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: product.delay + 0.4,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <h3 className="text-2xl font-headline font-bold text-primary mb-2 group-hover:text-tuscan-red transition-colors">
                    {product.name}
                </h3>
                <p className="text-on-surface-variant mb-6 max-w-xs mx-auto leading-relaxed text-sm">
                    {product.description}
                </p>
                <Link
                    to={`/products/${product.slug}`}
                    className="text-tuscan-green font-semibold uppercase tracking-wider text-xs border-b-2 border-transparent hover:border-tuscan-green transition-all"
                >
                    View Details
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default ProductShowcase;
