/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./404.html", "./index.js"],
	theme: {
		extend: {
			fontFamily: {
				"mcfive": ["mcfive", "sans-serif"],
				"mcten": ["mcten", "sans-serif"],
				"mcseven": ["mcseven", "sans-serif"]
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
	daisyui: {
		base: false,
		themes: [
			{
				brose: {
					"primary": "#148295",
					"secondary": "#8f4263",
					"accent": "#5c7f67",
					"neutral": "#181818",
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