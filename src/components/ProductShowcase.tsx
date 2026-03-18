import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Premium Alfredo",
        description: "Velvety perfection with 24-month aged Parmigiano Reggiano. The gold standard of white sauces.",
        image: "/assets/product-alfredo.png",
        accent: "bg-tuscan-green",
        ringColor: "ring-tuscan-green/30",
        hoverBg: "group-hover:bg-tuscan-green/10",
        delay: 0
    },
    {
        id: 2,
        name: "Classic Vodka Sauce",
        description: "San Marzano tomatoes meet premium Italian vodka and heavy cream for a perfect pink sauce.",
        image: "/assets/product-vodka.png",
        accent: "bg-tuscan-red",
        ringColor: "ring-tuscan-red/30",
        hoverBg: "group-hover:bg-tuscan-red/10",
        delay: 0.2
    },
    {
        id: 3,
        name: "Artisan Mac & Cheese",
        description: "A decadent three-cheese blend crafted for the ultimate comfort food experience.",
        image: "/assets/product-mac-cheese.png",
        accent: "bg-secondary",
        ringColor: "ring-secondary/30",
        hoverBg: "group-hover:bg-secondary/10",
        delay: 0.4
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            {/* Paper texture overlay */}
            <div
                className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: "url('/assets/texture_cream_gold_1769721877748.png')", backgroundSize: 'cover' }}
            />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-tuscan-red font-label text-xs uppercase tracking-[0.2em] mb-4 block">The Collection</span>
                    <h2 className="font-headline text-5xl md:text-6xl font-bold mb-4">
                        Our <span className="text-tuscan-green">Master</span><span className="text-tuscan-red">pieces</span>
                    </h2>
                    <div className="flex h-1.5 w-24 mx-auto overflow-hidden">
                        <div className="w-1/3 bg-tuscan-green" />
                        <div className="w-1/3 bg-white border-y border-gray-200" />
                        <div className="w-1/3 bg-tuscan-red" />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: product.delay, duration: 0.6 }}
                            className={`flex flex-col items-center group rounded-lg p-6 transition-colors duration-300 ${product.hoverBg}`}
                        >
                            <div className="relative h-80 w-full flex items-center justify-center mb-8">
                                <div className={`absolute w-56 h-56 rounded-full bg-surface-container-high shadow-lg ring-2 ${product.ringColor} transition-transform duration-500 group-hover:scale-110`} />
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="relative h-72 object-contain drop-shadow-2xl z-10"
                                    animate={{ y: [0, -12, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: product.delay
                                    }}
                                />
                            </div>
                            <div className="text-center">
                                <div className={`w-10 h-1.5 ${product.accent} mx-auto mb-4`} />
                                <h3 className="text-2xl font-headline font-bold text-primary mb-2 group-hover:text-tuscan-red transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-on-surface-variant mb-6 max-w-xs mx-auto leading-relaxed text-sm">
                                    {product.description}
                                </p>
                                <button className="bg-tuscan-green/10 text-tuscan-green font-semibold uppercase tracking-wider text-xs px-4 py-2 hover:bg-tuscan-green hover:text-white transition-all duration-300">
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
