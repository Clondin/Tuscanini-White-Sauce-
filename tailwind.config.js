/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'tuscan-gold': '#C5A065',
                'tuscan-red': '#8B2E2E',
                'tuscan-cream': '#F9F7F2',
                'tuscan-black': '#1A1A1A',
                'tuscan-olive': '#556B2F',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'paper-texture': "url('/assets/texture_cream_gold.png')",
            }
        },
    },
    plugins: [],
}
