import typography from '@tailwindcss/typography';

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
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						color: theme('colors.text-secondary'),
						'h1, h2, h3, h4, h5, h6': {
							color: theme('colors.text-primary'),
						},
						h1: { fontSize: theme('fontSize.2xl') },
						h2: { fontSize: theme('fontSize.xl') },
						h3: { fontSize: theme('fontSize.lg') },
						strong: { color: theme('colors.text-primary') },
						a: { color: theme('colors.accent') },
					},
				},
			}),
		},
	},
	plugins: [typography],
}
