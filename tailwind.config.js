module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'gt-main-opaque': 'rgba(255, 255, 255, .95)',
                'gt-red': '#ff0000',
                'gt-orange': '#ff9a00',
                'gt-yellow': '#fffc00',
                'gt-green': '#0abf01',
                'gt-blue': '#0033ff',
                'gt-violet': '#bb79e5',
                'gt-pink': '#ffafc8',
                'gt-light-blue': '#75d7ef',
                'gt-brown': '#6f4721',
                'gt-grey': '#6f4721',
            },
            gridTemplateColumns: {
                'gt-frame': '10px 1fr 10px',
                'gt-layout': 'minmax(300px, 25%) 1fr',
            },
            gridTemplateRows: {
                'gt-frame': '10px 1fr 10px',
            },
            height: {
                'gt-main': 'calc(100vh - 20px)'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}