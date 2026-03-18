import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import ProductShowcase from './components/ProductShowcase';
import RecipeSection from './components/RecipeSection';
import BrandStory from './components/BrandStory';
import IngredientsSection from './components/IngredientsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }, []);

    return (
        <>
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
