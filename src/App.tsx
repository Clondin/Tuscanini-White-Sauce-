import { useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

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
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:slug" element={<ProductPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
