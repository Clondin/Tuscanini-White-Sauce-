import { useEffect, useState } from 'react';

const SECTION_IDS = ['heritage', 'products', 'recipe', 'story', 'ingredients'];

export function useSectionObserver(): string {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        const ratios = new Map<string, number>();

        SECTION_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        ratios.set(id, entry.intersectionRatio);
                    });

                    let bestId = '';
                    let bestRatio = 0;
                    ratios.forEach((ratio, sectionId) => {
                        if (ratio > bestRatio) {
                            bestRatio = ratio;
                            bestId = sectionId;
                        }
                    });

                    if (bestRatio > 0) {
                        setActiveSection(bestId);
                    }
                },
                { threshold: [0, 0.25, 0.5, 0.75, 1] }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return activeSection;
}
