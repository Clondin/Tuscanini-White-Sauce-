import React from 'react';

interface ProductCardProps {
    title: string;
    tagline: string;
    description: string;
    image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, tagline, description, image }) => {
    return (
        <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100">
            <div className="relative h-64 overflow-hidden bg-gray-50 flex items-center justify-center p-6">
                <div className="absolute w-40 h-40 bg-[var(--color-cream)] rounded-full z-0 group-hover:scale-150 transition-transform duration-500" />
                <img
                    src={image}
                    alt={title}
                    className="relative z-10 w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
            </div>

            <div className="p-8 text-center flex-grow flex flex-col items-center">
                <h3 className="text-2xl font-bold text-[var(--color-blue)] mb-2 font-serif">{title}</h3>
                <p className="text-[var(--color-gold)] font-medium italic mb-4 font-serif">{tagline}</p>
                <p className="text-gray-600 mb-6 flex-grow font-light leading-relaxed">{description}</p>

                <button className="mt-auto px-6 py-2 border-2 border-[var(--color-red)] text-[var(--color-red)] rounded-full hover:bg-[var(--color-red)] hover:text-white transition-colors uppercase text-sm font-bold tracking-wider">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
