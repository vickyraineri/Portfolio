module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    
    theme: {
        extend: {
            colors: {
                footer: "#240433"
            }
        },
    },

    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('flowbite/plugin')
    ],
}
