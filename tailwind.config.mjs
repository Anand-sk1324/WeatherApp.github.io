/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows:{
				'layout': 'auto 1fr auto auto'
			},
			
			gridTemplateColumns:{
				'layout': '1fr 400px'
			},
			
		},
	},
	plugins: [],
}
