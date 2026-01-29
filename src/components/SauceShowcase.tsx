import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        title: "Premium Mac & Cheese Sauce",
        tagline: "Comfort Meets Craftsmanship.",
        description: "A golden embrace of real Italian cheeses. Smooth, creamy, and ready to transform your pasta into a masterpiece.",
        // Using a clear placeholder for now, user can replace
        image: "https://placehold.co/400x600/png?text=Mac+%26+Cheese+Sauce&font=playfair"
    },
    {
        id: 2,
        title: "Classic Alfredo Sauce",
        tagline: "Velvety. Rich. Timeless.",
        description: "Crafted with genuine Parmesan and fresh cream. The authentic white sauce that clings to every strand.",
        image: "https://placehold.co/400x600/png?text=Classic+Alfredo&font=playfair"
    },
    {
        id: 3,
        title: "Vodka Sauce",
        tagline: "Bold & Balanced.",
        description: "San Marzano tomatoes, fresh cream, and a splash of premium vodka. A restaurant favorite, perfected for your home.",
        image: "https://placehold.co/400x600/png?text=Vodka+Sauce&font=playfair"
    }
];

const SauceShowcase = () => {
    return (
        <section id="collection" className="py-24 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[var(--color-cream)] to-white pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <span className="text-[var(--color-red)] font-bold tracking-[0.2em] uppercase text-sm block mb-3">Our Collection</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-blue)]">The Stars of the Table</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SauceShowcase;
