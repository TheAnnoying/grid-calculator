/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./404.html", "./index.js"],
	theme: {
		extend: {
			fontFamily: {
				"mcfive": ["mcfive", "sans-serif"],
				"mcten": ["mcten", "sans-serif"],
				"mcseven": ["mcseven", "sans-serif"],
				"mctenimportant": ["mctenimportant", "sans-serif"]
			},
			colors: {
				"green-bg": "var(--green-bg)"
			},
			animation: {
                "fade": 'fadeIn 0.6s'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 100 }
                }
            }
		}
	},
	plugins: [require("daisyui")],
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
}