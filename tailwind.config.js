/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                blue: {
                    50: "#5A87B2",
                    100: "#5A87B2",
                    200: "#5A87B2",
                    300: "#5A87B2",
                    400: "#5A87B2",
                    500: "#5A87B2",
                    600: "#5A87B2",
                    700: "#5A87B2",
                    800: "#5A87B2",
                    900: "#5A87B2"
                }
            }
        }
    },
    variants: {},
    plugins: [require("@tailwindcss/forms")]
};
