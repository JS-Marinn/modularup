import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#172E3F', // Azul profundo
                    foreground: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#FBBF48', // Amarillo vibrante
                    foreground: '#172E3F',
                },
                secondary: {
                    DEFAULT: '#F4E4D6', // Beige suave
                    foreground: '#172E3F',
                }
            },
            fontFamily: {
                display: ['var(--font-nunito-sans)', 'sans-serif'],
                sans: ['var(--font-montserrat)', 'sans-serif'],
                body: ['var(--font-lato)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
