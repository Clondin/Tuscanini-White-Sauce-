import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductBySlug, products } from '../data/products';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    }),
};

const ProductPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const product = getProductBySlug(slug || '');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-surface">
                <div className="text-center">
                    <h1 className="font-headline text-4xl font-bold text-primary mb-4">Product Not Found</h1>
                    <p className="text-on-surface-variant mb-8">The product you're looking for doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-tuscan-red text-white px-6 py-3 rounded-lg font-medium hover:bg-tuscan-red-dark transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    const otherProducts = products.filter((p) => p.slug !== product.slug);

    return (
        <main className="min-h-screen bg-surface">
            {/* Hero Section */}
            <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]">
                    <img src="/assets/texture-paper.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                    <motion.div initial="hidden" animate="visible" className="mb-8">
                        <motion.div variants={fadeUp} custom={0}>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-tuscan-red transition-colors text-sm font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Collection
                            </Link>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Product Image */}
                        <motion.div
                            className="relative flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div
                                className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full"
                                style={{ backgroundColor: `${product.accentHex}10`, boxShadow: `0 0 80px ${product.accentHex}15` }}
                            />
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                className="relative z-10 h-56 sm:h-72 md:h-96 object-contain drop-shadow-2xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </motion.div>

                        {/* Product Info */}
                        <motion.div initial="hidden" animate="visible">
                            <motion.span
                                variants={fadeUp}
                                custom={0.1}
                                className="text-xs uppercase tracking-[0.2em] font-label mb-3 block"
                                style={{ color: product.accentHex }}
                            >
                                {product.tagline}
                            </motion.span>
                            <motion.h1
                                variants={fadeUp}
                                custom={0.2}
                                className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight"
                            >
                                {product.name}
                            </motion.h1>
                            <motion.p
                                variants={fadeUp}
                                custom={0.3}
                                className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-6 max-w-lg"
                            >
                                {product.longDescription}
                            </motion.p>
                            <motion.div variants={fadeUp} custom={0.4} className="flex items-baseline gap-4 mb-8">
                                <span className="font-headline text-3xl font-bold text-primary">{product.price}</span>
                                <span className="text-on-surface-variant text-sm">{product.weight}</span>
                            </motion.div>
                            <motion.div variants={fadeUp} custom={0.5} className="flex flex-wrap gap-4">
                                <button className="inline-flex items-center gap-2 bg-tuscan-red text-white px-6 py-3 sm:px-8 rounded-lg font-medium hover:bg-tuscan-red-dark transition-all duration-300 active:scale-95">
                                    <ShoppingCart className="w-4 h-4" />
                                    Add to Cart
                                </button>
                                <span className="inline-flex items-center px-4 py-3 rounded-lg border border-outline-variant text-on-surface-variant text-sm">
                                    Origin: {product.origin}
                                </span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Ingredients Bento Grid */}
            <section className="py-16 md:py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <motion.span variants={fadeUp} custom={0} className="text-tuscan-red font-label text-xs uppercase tracking-[0.2em] mb-3 block">
                            What's Inside
                        </motion.span>
                        <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-3xl md:text-5xl font-bold text-primary">
                            Premium Ingredients
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {/* Hero ingredient card */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0.1}
                            className="md:col-span-2 md:row-span-2 rounded-2xl flex flex-col justify-end relative overflow-hidden min-h-[280px] md:min-h-[400px]"
                            style={{ backgroundColor: `${product.accentHex}08`, border: `1px solid ${product.accentHex}15` }}
                        >
                            {product.heroIngredients[0].image ? (
                                <img
                                    src={product.heroIngredients[0].image}
                                    alt={product.heroIngredients[0].name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <span className="absolute top-8 left-8 text-6xl md:text-8xl">{product.heroIngredients[0].emoji}</span>
                            )}
                            <div className="relative z-10 p-5 sm:p-8 md:p-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                                <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{product.heroIngredients[0].name}</h3>
                                <p className="text-white/80 leading-relaxed max-w-md">{product.heroIngredients[0].description}</p>
                            </div>
                        </motion.div>

                        {/* Smaller ingredient cards */}
                        {product.heroIngredients.slice(1, 3).map((ing, i) => (
                            <motion.div
                                key={ing.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={0.2 + i * 0.1}
                                className="rounded-2xl bg-white border border-outline-variant/30 relative overflow-hidden"
                            >
                                {ing.image ? (
                                    <>
                                        <img src={ing.image} alt={ing.name} className="w-full h-32 md:h-36 object-cover" />
                                        <div className="p-5 md:p-6">
                                            <h4 className="font-headline text-lg font-bold text-primary mb-1">{ing.name}</h4>
                                            <p className="text-on-surface-variant text-sm leading-relaxed">{ing.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-6 md:p-8">
                                        <span className="text-3xl md:text-4xl mb-4 block">{ing.emoji}</span>
                                        <h4 className="font-headline text-lg font-bold text-primary mb-1">{ing.name}</h4>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">{ing.description}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {/* Bottom row */}
                        {product.heroIngredients.slice(3, 5).map((ing, i) => (
                            <motion.div
                                key={ing.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={0.4 + i * 0.1}
                                className="rounded-2xl bg-white border border-outline-variant/30 relative overflow-hidden"
                            >
                                {ing.image ? (
                                    <>
                                        <img src={ing.image} alt={ing.name} className="w-full h-32 md:h-36 object-cover" />
                                        <div className="p-5 md:p-6">
                                            <h4 className="font-headline text-lg font-bold text-primary mb-1">{ing.name}</h4>
                                            <p className="text-on-surface-variant text-sm leading-relaxed">{ing.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="p-6 md:p-8">
                                        <span className="text-3xl md:text-4xl mb-4 block">{ing.emoji}</span>
                                        <h4 className="font-headline text-lg font-bold text-primary mb-1">{ing.name}</h4>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">{ing.description}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                        {/* Fill remaining grid cell with accent block */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={0.5}
                            className="rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center"
                            style={{ backgroundColor: `${product.accentHex}10` }}
                        >
                            <span className="font-headline text-4xl md:text-5xl font-bold" style={{ color: product.accentHex }}>
                                {product.productionStats[3]?.value}
                            </span>
                            <span className="text-on-surface-variant text-sm mt-2">
                                {product.productionStats[3]?.label}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Recipe / Culinary Guide */}
            <section className="py-16 md:py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.span variants={fadeUp} custom={0} className="text-tuscan-green font-label text-xs uppercase tracking-[0.2em] mb-3 block">
                                Culinary Guide
                            </motion.span>
                            <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-3xl md:text-5xl font-bold text-primary mb-2">
                                {product.recipe.title}
                            </motion.h2>
                            <motion.div variants={fadeUp} custom={0.15} className="flex gap-4 text-sm text-on-surface-variant mb-10">
                                <span>{product.recipe.servings}</span>
                                <span className="text-outline-variant">|</span>
                                <span>{product.recipe.prepTime}</span>
                            </motion.div>

                            <ol className="space-y-8">
                                {product.recipe.steps.map((step, i) => (
                                    <motion.li
                                        key={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={0.2 + i * 0.1}
                                        className="flex gap-5"
                                    >
                                        <span
                                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                            style={{ backgroundColor: product.accentHex }}
                                        >
                                            {i + 1}
                                        </span>
                                        <p className="text-on-surface-variant leading-relaxed pt-1">{step}</p>
                                    </motion.li>
                                ))}
                            </ol>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-container-high lg:sticky lg:top-32"
                        >
                            <img
                                src={product.recipeImage || product.lifestyleImage || product.image}
                                alt={product.recipe.title}
                                className={`w-full h-full ${product.recipeImage ? 'object-cover' : 'object-contain p-12'}`}
                            />
                            <div
                                className="absolute inset-0 rounded-2xl"
                                style={{ background: `linear-gradient(135deg, ${product.accentHex}08, ${product.accentHex}03)` }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technical Specs — Dark Band */}
            <section className="py-16 md:py-20 bg-primary text-on-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Production Stats */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.span variants={fadeUp} custom={0} className="text-tuscan-gold font-label text-xs uppercase tracking-[0.2em] mb-3 block">
                                Production Details
                            </motion.span>
                            <motion.h2 variants={fadeUp} custom={0.1} className="font-headline text-3xl md:text-4xl font-bold mb-10">
                                Crafted with Precision
                            </motion.h2>
                            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                                {product.productionStats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        custom={0.2 + i * 0.1}
                                        className="border border-white/10 rounded-xl p-3 sm:p-5"
                                    >
                                        <span className="font-headline text-xl sm:text-2xl md:text-3xl font-bold block mb-1">{stat.value}</span>
                                        <span className="text-white/60 text-sm">{stat.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Nutrition + Certifications */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.span variants={fadeUp} custom={0} className="text-tuscan-gold font-label text-xs uppercase tracking-[0.2em] mb-3 block">
                                Nutrition Facts
                            </motion.span>
                            <motion.div variants={fadeUp} custom={0.1} className="border border-white/10 rounded-xl p-6 mb-8">
                                <p className="text-white/60 text-sm mb-4">Serving size: {product.nutritionFacts.servingSize}</p>
                                <div className="space-y-3">
                                    {[
                                        ['Calories', product.nutritionFacts.calories],
                                        ['Total Fat', product.nutritionFacts.fat],
                                        ['Sodium', product.nutritionFacts.sodium],
                                        ['Protein', product.nutritionFacts.protein],
                                    ].map(([label, value]) => (
                                        <div key={label} className="flex justify-between border-b border-white/5 pb-2">
                                            <span className="text-white/80">{label}</span>
                                            <span className="font-bold">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} custom={0.3} className="flex flex-wrap gap-3">
                                {product.certifications.map((cert) => (
                                    <span
                                        key={cert}
                                        className="px-4 py-2 rounded-full border border-tuscan-gold/30 text-tuscan-gold text-xs font-medium uppercase tracking-wider"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Other Products */}
            <section className="py-16 md:py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2 variants={fadeUp} custom={0} className="font-headline text-3xl md:text-4xl font-bold text-primary">
                            More from the Collection
                        </motion.h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {otherProducts.map((p, i) => (
                            <motion.div
                                key={p.slug}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                custom={i * 0.15}
                            >
                                <Link
                                    to={`/products/${p.slug}`}
                                    className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-outline-variant/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="h-40 md:h-48 object-contain mb-6 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <span
                                        className="text-xs uppercase tracking-[0.2em] font-label mb-2"
                                        style={{ color: p.accentHex }}
                                    >
                                        {p.tagline}
                                    </span>
                                    <h3 className="font-headline text-xl font-bold text-primary mb-2 group-hover:text-tuscan-red transition-colors">
                                        {p.name}
                                    </h3>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">{p.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;
