import { useEffect } from 'react';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import BrandStory from './components/BrandStory';
import Footer from './components/Footer';

function App() {

    // Simple scroll smoothing or other global effects could go here
    useEffect(() => {
        // For manual smooth scroll behavior if needed, 
        // but CSS scroll-behavior: smooth in index.css on html element is often better
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }, []);

    return (
        <main className="min-h-screen">
            <Hero />
            <ProductShowcase />
            <BrandStory />
            <Footer />
        </main>
    );
}

export default App;
