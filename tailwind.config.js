/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["selector"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				"24/25": "96%",
			},
			fontFamily: {
				spectral: "Spectral, serif",
			},
			keyframes: {
				popColorButton: {
					"0%": {
						transform: "scale(0)",
					},
					"65%": {
						transform: "scale(0.8)",
					},
					"85%": {
						transform: "scale(1.3)",
					},
					"100%": {
						transform: "scale(1)",
					},
				},
			},
			animation: {
				"pop-button": "popColorButton 0.4s ease-in-out 1",
			},
		},
	},
	plugins: [],
};
