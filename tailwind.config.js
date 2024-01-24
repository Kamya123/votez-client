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
                light: '#F8EDFF',
                dark: '#3D3B40',
                primary: '#525CEB',
                secondary: '#BFCFE7',
            },
        },
    },
    plugins: [],
};
