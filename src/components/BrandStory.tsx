import React from 'react';

const BrandStory = () => {
    return (
        <section className="py-20 px-4 bg-[var(--color-cream)]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform md:rotate-2 hover:rotate-0 transition-all duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2070&auto=format&fit=crop"
                            alt="Italian Vineyards"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-blue)] mb-6">
                        The Tuscanini <span className="text-[var(--color-gold)] italic">Difference</span>
                    </h2>
                    <div className="w-20 h-1 bg-[var(--color-red)] mb-8"></div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                        We don't just import Italian food; we import the Italian way of life. Sourced from the finest regions, our ingredients are 100% authentic, bringing the heritage of Italy to your kitchen.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed font-light">
                        From the sun-drenched hills of Tuscany to the artisanal pasta factories of Naples, every jar tells a story of tradition, passion, and uncompromising quality.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BrandStory;
