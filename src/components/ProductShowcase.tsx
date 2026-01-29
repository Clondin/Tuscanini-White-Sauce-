
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Premium Alfredo",
        description: "Velvety Perfection with 24-month aged Parmigiano Reggiano.",
        image: "/assets/product-alfredo.png",
        bgRotate: "rotate-3",
        delay: 0
    },
    {
        id: 2,
        name: "Classic Vodka Sauce",
        description: "San Marzano tomatoes meet premium Italian vodka and heavy cream.",
        image: "/assets/product-vodka.png",
        bgRotate: "-rotate-2",
        delay: 0.2
    },
    {
        id: 3,
        name: "Artisan Mac & Cheese",
        description: "Bronze-cut shells in a decadent three-cheese blend.",
        image: "/assets/product-mac-cheese.png", // Assuming this, if not we will swap
        bgRotate: "rotate-1",
        delay: 0.4
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-24 bg-tuscan-cream relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none bg-paper-texture" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-tuscan-red mb-4"
                    >
                        Our Masterpieces
                    </motion.h2>
                    <div className="w-24 h-1 bg-tuscan-gold mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: product.delay, duration: 0.6 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Product Image Container */}
                            <div className="relative h-80 w-full flex items-center justify-center mb-8">
                                {/* Decorative Circle */}
                                <div className={`absolute w-64 h-64 rounded-full bg-white shadow-xl ${product.bgRotate} transition-transform duration-500 group-hover:scale-105`} />

                                {/* Product Image - Levitating */}
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="relative h-full object-contain filter drop-shadow-2xl z-10"
                                    animate={{
                                        y: [0, -15, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 2 // Randomize phase
                                    }}
                                />
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-serif font-bold text-tuscan-black mb-2 group-hover:text-tuscan-red transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-xs mx-auto leading-relaxed">
                                    {product.description}
                                </p>
                                <button className="text-tuscan-gold font-semibold uppercase tracking-wider text-sm border-b-2 border-transparent hover:border-tuscan-gold transition-all">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
