import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Premium Alfredo",
        description: "Velvety perfection with 24-month aged Parmigiano Reggiano. The gold standard of white sauces.",
        image: "/assets/hero-product-alfredo.png",
        delay: 0
    },
    {
        id: 2,
        name: "Classic Vodka Sauce",
        description: "San Marzano tomatoes meet premium Italian vodka and heavy cream for a perfect pink sauce.",
        image: "/assets/hero-product-vodka.png",
        delay: 0.2
    },
    {
        id: 3,
        name: "Artisan Mac & Cheese",
        description: "A decadent three-cheese blend crafted for the ultimate comfort food experience.",
        image: "/assets/hero-product-mac-cheese.png",
        delay: 0.4
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-12 md:py-24 bg-surface relative overflow-hidden">
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
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: product.delay, duration: 0.6 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative h-52 sm:h-64 md:h-80 w-full flex items-center justify-center mb-8">
                                <div className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full bg-surface-container-high shadow-lg transition-transform duration-500 group-hover:scale-110" />
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className="relative h-48 sm:h-60 md:h-72 object-contain drop-shadow-2xl z-10"
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
                                <h3 className="text-2xl font-headline font-bold text-primary mb-2 group-hover:text-tuscan-red transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-on-surface-variant mb-6 max-w-xs mx-auto leading-relaxed text-sm">
                                    {product.description}
                                </p>
                                <button className="text-tuscan-green font-semibold uppercase tracking-wider text-xs border-b-2 border-transparent hover:border-tuscan-green transition-all">
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
