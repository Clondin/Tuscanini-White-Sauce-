export interface Product {
    id: number;
    slug: string;
    name: string;
    shortName: string;
    description: string;
    longDescription: string;
    image: string;
    delay: number;
    accent: string;
    accentHex: string;
    ingredients: string[];
    backText: string;
    tagline: string;
    price: string;
    origin: string;
    weight: string;
    lifestyleImage?: string;
    heroIngredients: {
        name: string;
        description: string;
        emoji: string;
        image?: string;
    }[];
    nutritionFacts: {
        servingSize: string;
        calories: string;
        fat: string;
        sodium: string;
        protein: string;
    };
    recipeImage?: string;
    recipe: {
        title: string;
        servings: string;
        prepTime: string;
        steps: string[];
    };
    productionStats: {
        label: string;
        value: string;
    }[];
    certifications: string[];
}

export const products: Product[] = [
    {
        id: 1,
        slug: 'alfredo',
        name: 'Premium Alfredo',
        shortName: 'Alfredo',
        description: 'Velvety perfection with 24-month aged Parmigiano Reggiano. The gold standard of white sauces.',
        longDescription: 'Our Premium Alfredo sauce is crafted in the tradition of Rome\'s finest trattorias. Made with 24-month aged Parmigiano Reggiano, European-style butter, and fresh heavy cream, every jar delivers the authentic richness that has made Alfredo sauce a beloved classic worldwide.',
        image: '/assets/hero-product-alfredo.png',
        lifestyleImage: '/assets/alfredo-lifestyle.png',
        delay: 0,
        accent: 'tuscan-gold',
        accentHex: '#C8952E',
        ingredients: ['🧀', '🥛', '🧈'],
        backText: 'Parmigiano Reggiano, Heavy Cream, Butter, Salt',
        tagline: 'The Gold Standard',
        price: '$8.99',
        origin: 'Parma, Italy',
        weight: '15 oz (425g)',
        heroIngredients: [
            { name: 'Parmigiano Reggiano', description: 'Aged 24 months in the hills of Parma for deep, complex umami flavor', emoji: '🧀', image: '/assets/parmigiano-wedge.png' },
            { name: 'European Butter', description: 'Higher butterfat content for an exceptionally silky texture', emoji: '🧈', image: '/assets/european-butter.png' },
            { name: 'Heavy Cream', description: 'Fresh, rich cream that forms the velvety base of our sauce', emoji: '🥛', image: '/assets/sauce-jar-closeup.png' },
            { name: 'Sea Salt', description: 'Just a pinch to elevate every ingredient to its fullest expression', emoji: '🧂' },
            { name: 'White Pepper', description: 'Delicately spiced for warmth without overpowering the cheese', emoji: '🌶️' },
        ],
        nutritionFacts: {
            servingSize: '1/4 cup (62g)',
            calories: '110',
            fat: '9g',
            sodium: '430mg',
            protein: '3g',
        },
        recipeImage: '/assets/alfredo-lifestyle.png',
        recipe: {
            title: 'Classic Fettuccine Alfredo',
            servings: '4 servings',
            prepTime: '20 min',
            steps: [
                'Cook 1 lb fettuccine in salted boiling water until al dente. Reserve 1 cup pasta water before draining.',
                'Warm the entire jar of Tuscanini Premium Alfredo in a large skillet over medium-low heat, stirring gently.',
                'Toss the drained pasta into the skillet, adding splashes of pasta water until the sauce coats every strand.',
                'Plate immediately, finish with freshly cracked black pepper and an extra grating of Parmigiano Reggiano.',
            ],
        },
        productionStats: [
            { label: 'Cheese Aging', value: '24 mo' },
            { label: 'Batch Size', value: '200 jars' },
            { label: 'Shelf Life', value: '18 mo' },
            { label: 'Ingredients', value: '5 only' },
        ],
        certifications: ['Kosher Certified', 'No Artificial Preservatives', 'Gluten Free'],
    },
    {
        id: 2,
        slug: 'vodka-sauce',
        name: 'Classic Vodka Sauce',
        shortName: 'Vodka Sauce',
        description: 'San Marzano tomatoes meet premium Italian vodka and heavy cream for a perfect pink sauce.',
        longDescription: 'Our Classic Vodka Sauce marries the bright acidity of DOP San Marzano tomatoes with a touch of premium Italian vodka and swirls of fresh heavy cream. The result is a perfectly balanced pink sauce with depth, warmth, and a finish that lingers beautifully.',
        image: '/assets/hero-product-vodka.png',
        lifestyleImage: '/assets/tomato-sauce-simmering.png',
        delay: 0.2,
        accent: 'tuscan-red',
        accentHex: '#CE2B37',
        ingredients: ['🍅', '🥃', '🥛'],
        backText: 'San Marzano Tomatoes, Italian Vodka, Heavy Cream',
        tagline: 'Bold & Refined',
        price: '$8.99',
        origin: 'Campania, Italy',
        weight: '15 oz (425g)',
        heroIngredients: [
            { name: 'San Marzano Tomatoes', description: 'DOP certified, grown in the volcanic soil at the base of Mount Vesuvius', emoji: '🍅', image: '/assets/tomato-sauce-simmering.png' },
            { name: 'Italian Vodka', description: 'Premium spirit that unlocks hidden flavor compounds in the tomatoes', emoji: '🥃' },
            { name: 'Heavy Cream', description: 'Adds luxurious body and tempers the tomato\'s natural acidity', emoji: '🥛' },
            { name: 'Extra Virgin Olive Oil', description: 'Cold-pressed Tuscan oil for authentic Italian character', emoji: '🫒' },
            { name: 'Fresh Garlic', description: 'Aromatic foundation that deepens the sauce\'s complexity', emoji: '🧄' },
        ],
        nutritionFacts: {
            servingSize: '1/2 cup (125g)',
            calories: '130',
            fat: '8g',
            sodium: '490mg',
            protein: '2g',
        },
        recipeImage: '/assets/tomato-sauce-simmering.png',
        recipe: {
            title: 'Penne alla Vodka',
            servings: '4 servings',
            prepTime: '25 min',
            steps: [
                'Cook 1 lb penne rigate in generously salted water until just shy of al dente. Reserve 1 cup pasta water.',
                'Heat the jar of Tuscanini Vodka Sauce in a deep skillet over medium heat until it begins to gently simmer.',
                'Add the penne directly to the sauce with a splash of pasta water. Toss for 2 minutes so the pasta absorbs the sauce.',
                'Serve in warmed bowls, topped with fresh basil leaves and a dusting of Pecorino Romano.',
            ],
        },
        productionStats: [
            { label: 'Tomato Source', value: 'DOP' },
            { label: 'Batch Size', value: '200 jars' },
            { label: 'Shelf Life', value: '18 mo' },
            { label: 'Ingredients', value: '8 only' },
        ],
        certifications: ['Kosher Certified', 'No Artificial Preservatives', 'DOP Tomatoes'],
    },
    {
        id: 3,
        slug: 'mac-and-cheese',
        name: 'Artisan Mac & Cheese',
        shortName: 'Mac & Cheese',
        description: 'A decadent three-cheese blend crafted for the ultimate comfort food experience.',
        longDescription: 'Our Artisan Mac & Cheese sauce is a decadent triple-cheese blend of sharp aged Cheddar, nutty Gruyère, and 24-month Parmigiano Reggiano, slow-melted into fresh cream. Simply heat, pour over your favorite pasta, and experience comfort food elevated to an art form.',
        image: '/assets/hero-product-mac-cheese.png',
        lifestyleImage: '/assets/grated-parmesan.png',
        delay: 0.4,
        accent: 'tuscan-green',
        accentHex: '#009246',
        ingredients: ['🧀', '🧀', '🥛'],
        backText: 'Cheddar, Gruyère, Parmigiano Reggiano, Cream',
        tagline: 'Triple Indulgence',
        price: '$9.49',
        origin: 'Emilia-Romagna, Italy',
        weight: '15 oz (425g)',
        heroIngredients: [
            { name: 'Aged Cheddar', description: 'Sharp and full-bodied, aged for maximum depth of flavor', emoji: '🧀', image: '/assets/grated-parmesan.png' },
            { name: 'Gruyère', description: 'Nutty, sweet Swiss cheese that melts into pure silk', emoji: '🧀' },
            { name: 'Parmigiano Reggiano', description: 'The king of cheeses adds umami complexity to the blend', emoji: '🧀', image: '/assets/parmigiano-wedge.png' },
            { name: 'Fresh Cream', description: 'Rich, smooth base that binds the three cheeses into harmony', emoji: '🥛' },
            { name: 'Mustard Powder', description: 'A whisper of mustard that sharpens and brightens the cheese', emoji: '✨' },
        ],
        nutritionFacts: {
            servingSize: '1/4 cup (62g)',
            calories: '120',
            fat: '10g',
            sodium: '460mg',
            protein: '4g',
        },
        recipeImage: '/assets/grated-parmesan.png',
        recipe: {
            title: 'Ultimate Baked Mac & Cheese',
            servings: '6 servings',
            prepTime: '35 min',
            steps: [
                'Preheat oven to 375°F. Cook 1 lb elbow macaroni until al dente, then drain well.',
                'Warm the jar of Tuscanini Mac & Cheese sauce in a large saucepan, stirring until smooth and heated through.',
                'Fold the pasta into the sauce and transfer to a buttered baking dish. Top with panko breadcrumbs and extra grated cheese.',
                'Bake for 15-20 minutes until the top is golden and bubbling. Rest 5 minutes before serving.',
            ],
        },
        productionStats: [
            { label: 'Cheese Blend', value: '3 types' },
            { label: 'Batch Size', value: '200 jars' },
            { label: 'Shelf Life', value: '18 mo' },
            { label: 'Ingredients', value: '7 only' },
        ],
        certifications: ['Kosher Certified', 'No Artificial Preservatives', 'Gluten Free'],
    },
];

export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find((p) => p.slug === slug);
};
