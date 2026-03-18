import { useEffect, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import ProductShowcase from './components/ProductShowcase';
import RecipeSection from './components/RecipeSection';
import BrandStory from './components/BrandStory';
import IngredientsSection from './components/IngredientsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = useCallback(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }, []);

    return (
        <>
            <AnimatePresence>
                {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            </AnimatePresence>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <Heritage />
                <ProductShowcase />
                <RecipeSection />
                <BrandStory />
                <IngredientsSection />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}

export default App;
