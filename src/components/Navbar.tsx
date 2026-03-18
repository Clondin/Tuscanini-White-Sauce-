import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-4 left-4 right-4 z-50">
            <nav className={`w-full rounded-xl backdrop-blur-xl transition-all duration-500 ${scrolled ? 'bg-white/80 shadow-lg' : 'bg-white/30'}`}>
                <div className="flex justify-between items-center w-full px-8 py-2 max-w-screen-2xl mx-auto">
                    <img
                        src="/assets/tuscanini-logo.svg"
                        alt="Tuscanini"
                        className="h-10 w-auto object-contain"
                    />

                    <div className="hidden md:flex items-center gap-12 font-headline font-light tracking-wide text-sm">
                        <a className="text-on-surface hover:text-tuscan-red transition-colors duration-300" href="#heritage">Our Story</a>
                        <a className="text-on-surface hover:text-tuscan-green transition-colors duration-300" href="#recipe">Recipes</a>
                        <a className="text-on-surface hover:text-tuscan-red transition-colors duration-300" href="#ingredients">Ingredients</a>
                    </div>

                    <button className="bg-tuscan-red text-white px-8 py-2.5 rounded-lg font-medium tracking-tight hover:bg-tuscan-red-dark transition-all duration-300 active:scale-95">
                        Shop Now
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
