/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter'],
                poppins: ['Poppins'],
                monts: ['Montserrat'],
            },
            colors: {
                gray: '#2C394B',
                dark: '#082032',
                primary: '#FF4C29',
                secondary: '#334756',
            },
        },
    },
    plugins: [],
};
