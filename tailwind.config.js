/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./index.js"],
	theme: {
		extend: {
			fontFamily: {
				"mcfive": ["mcfive", "sans-serif"],
				"mcten": ["mcten", "sans-serif"],
				"mcseven": ["mcseven", "sans-serif"]
			},
			animation: {
				"popin": "popFromTop forwards 0.3s",
			},
			colors: {
				"green-bg": "var(--green-bg)"
			}
		}
	},
	daisyui: {
		themes: [
			{
				brose: {
					"primary": "#148295",
					"secondary": "#8f4263",
					"accent": "#5c7f67",
					"neutral": "#2c2e3a",
					"base-100": "#3c4250",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272",
				},
			},
		],
	},
	plugins: [require("daisyui")],
}