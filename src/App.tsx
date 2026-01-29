import Hero from './components/Hero';
import SauceShowcase from './components/SauceShowcase';
import BrandStory from './components/BrandStory';

function App() {
    return (
        <div className="min-h-screen font-sans">
            <Hero />
            <BrandStory />
            <SauceShowcase />

            <footer className="bg-[var(--color-blue)] text-white py-12 text-center">
                <p className="font-serif italic text-[var(--color-gold)] text-xl mb-4">Tuscanini</p>
                <p className="opacity-60 text-sm">© {new Date().getFullYear()} Tuscanini. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
