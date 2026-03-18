import { useSectionObserver } from '../hooks/useSectionObserver';

const sections = [
    { id: 'heritage', label: 'Heritage' },
    { id: 'products', label: 'Products' },
    { id: 'recipe', label: 'Recipe' },
    { id: 'story', label: 'Story' },
    { id: 'ingredients', label: 'Ingredients' },
];

const StickyDotNav = () => {
    const activeSection = useSectionObserver();

    const handleClick = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="group relative flex items-center justify-end"
                    aria-label={`Scroll to ${section.label}`}
                >
                    <span className="absolute right-6 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {section.label}
                    </span>
                    <span
                        className={`block rounded-full transition-all duration-300 ${
                            activeSection === section.id
                                ? 'w-3 h-3 bg-tuscan-red scale-110'
                                : 'w-2 h-2 bg-on-surface/30 group-hover:bg-on-surface/60'
                        }`}
                    />
                </button>
            ))}
        </nav>
    );
};

export default StickyDotNav;
