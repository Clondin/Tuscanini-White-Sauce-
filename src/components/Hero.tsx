import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image Parallax Placeholder */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1523528283115-9bf9b1699245?q=80&w=2069&auto=format&fit=crop")',
                    filter: 'brightness(0.7)'
                }}
            >
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    Authentic Italy. <br />
                    <span className="italic font-serif font-light text-[var(--color-gold)]">Now at Your Table.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto text-white/90 drop-shadow-md">
                    Experience the true taste of Tuscany with our new premium sauce collection.
                </p>
                <button
                    className="bg-[var(--color-gold)] text-[var(--color-blue)] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 flex items-center gap-2 mx-auto shadow-lg"
                    onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore the Collection
                    <ArrowRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default Hero;
