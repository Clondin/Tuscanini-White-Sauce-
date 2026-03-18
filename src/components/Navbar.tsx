import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 md:top-4 md:left-4 md:right-4 z-50">
            <nav className={`w-full md:rounded-xl backdrop-blur-xl transition-all duration-500 ${scrolled ? 'bg-white/80 shadow-lg' : 'bg-white/30'}`}>
                <div className="relative flex justify-center md:justify-between items-center w-full px-4 sm:px-8 py-3 md:py-2 max-w-screen-2xl mx-auto">
                    <img
                        src="/assets/tuscanini-logo.svg"
                        alt="Tuscanini"
                        className="h-12 md:h-10 w-auto object-contain"
                    />

                    <div className="hidden md:flex items-center gap-12 font-headline font-light tracking-wide text-sm">
                        <a className="text-on-surface hover:text-tuscan-red transition-colors duration-300" href="#heritage">Our Story</a>
                        <a className="text-on-surface hover:text-tuscan-green transition-colors duration-300" href="#recipe">Recipes</a>
                        <a className="text-on-surface hover:text-tuscan-red transition-colors duration-300" href="#ingredients">Ingredients</a>
                    </div>

                    <button className="hidden md:block bg-tuscan-red text-white px-4 py-2 text-sm sm:px-8 sm:py-2.5 sm:text-base rounded-lg font-medium tracking-tight hover:bg-tuscan-red-dark transition-all duration-300 active:scale-95">
                        Shop Now
                    </button>

                    {/* Mobile hamburger / close button */}
                    <button
                        className="md:hidden absolute right-4 flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 hover:bg-black/5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                    <div className="flex flex-col items-center gap-6 px-4 pb-6 pt-2 font-headline font-light tracking-wide text-sm">
                        <a
                            className="text-on-surface hover:text-tuscan-red transition-colors duration-300"
                            href="#heritage"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Our Story
                        </a>
                        <a
                            className="text-on-surface hover:text-tuscan-green transition-colors duration-300"
                            href="#recipe"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Recipes
                        </a>
                        <a
                            className="text-on-surface hover:text-tuscan-red transition-colors duration-300"
                            href="#ingredients"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Ingredients
                        </a>
                        <button
                            className="bg-tuscan-red text-white px-8 py-2.5 rounded-lg font-medium tracking-tight hover:bg-tuscan-red-dark transition-all duration-300 active:scale-95 w-full max-w-xs"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
