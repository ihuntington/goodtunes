module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'gt-main-opaque': 'rgba(255, 255, 255, .8)',
                'gt-blue': '#0033ff',
                'gt-green': '#4ce957',
                'gt-grey': '#333333',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}