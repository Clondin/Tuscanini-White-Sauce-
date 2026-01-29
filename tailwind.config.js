/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#C5A059',
                blue: '#003366',
                cream: '#F9F7F2',
                red: '#D14836',
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
