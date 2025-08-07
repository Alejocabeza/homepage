/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0A192F',
				'accent': '#64FFDA',
				'text-primary': '#CCD6F6',
				'text-secondary': '#8892B0',
				'bg-secondary': 'rgb(2 12 27 / <alpha-value>)',
			}
		},
	},
	plugins: [],
}
