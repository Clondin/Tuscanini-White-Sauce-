/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#003461',
                'on-primary': '#ffffff',
                'primary-container': '#124b82',
                'secondary': '#795921',
                'on-secondary': '#ffffff',
                'secondary-container': '#fdd08d',
                'tertiary': '#223446',
                'surface': '#fcf9f3',
                'surface-dim': '#dcdad4',
                'surface-container-low': '#f6f3ed',
                'surface-container': '#f0eee8',
                'surface-container-high': '#ebe8e2',
                'surface-container-highest': '#e5e2dc',
                'on-surface': '#1c1c18',
                'on-surface-variant': '#424750',
                'outline': '#727781',
                'outline-variant': '#c2c6d1',
                'inverse-surface': '#31312d',
                'inverse-on-surface': '#f3f0ea',
                'error': '#ba1a1a',
                // Tuscanini brand colors from the Italian flag on the logo
                'tuscan-red': '#CE2B37',
                'tuscan-red-dark': '#9B1B25',
                'tuscan-green': '#009246',
                'tuscan-green-dark': '#006B33',
            },
            fontFamily: {
                headline: ['"Noto Serif"', 'serif'],
                body: ['"Work Sans"', 'sans-serif'],
                label: ['"Work Sans"', 'sans-serif'],
            },
            backgroundImage: {
                'paper-texture': "url('/assets/texture_cream_gold_1769721877748.png')",
            }
        },
    },
    plugins: [],
}
