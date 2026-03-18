import Hero from '../components/Hero';
import Heritage from '../components/Heritage';
import SectionDivider from '../components/SectionDivider';
import ProductShowcase from '../components/ProductShowcase';
import RecipeSection from '../components/RecipeSection';
import PullQuote from '../components/PullQuote';
import BrandStory from '../components/BrandStory';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import IngredientsSection from '../components/IngredientsSection';
import Newsletter from '../components/Newsletter';
import StickyDotNav from '../components/StickyDotNav';

const HomePage = () => {
    return (
        <>
            <StickyDotNav />
            <main className="min-h-screen">
                <Hero />
                <SectionDivider variant="wave" fill="#f6f3ed" />
                <Heritage />
                <SectionDivider variant="curve" fill="#fcf9f3" />
                <ProductShowcase />
                <SectionDivider variant="torn" fill="#fcf9f3" />
                <RecipeSection />
                <SectionDivider variant="wave" fill="#fcf9f3" />
                <PullQuote />
                <SectionDivider variant="curve" fill="#f6f3ed" />
                <BrandStory />
                <SectionDivider variant="torn" fill="#f6f3ed" />
                <BeforeAfterSlider />
                <SectionDivider variant="wave" fill="#e5e2dc" />
                <IngredientsSection />
                <SectionDivider variant="curve" fill="#003461" />
                <Newsletter />
            </main>
        </>
    );
};

export default HomePage;
