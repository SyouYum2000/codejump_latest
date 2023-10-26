/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens:{
			sm:{'min':'1px','max':'768px'},
            md:{'min':'769px'}
		},
		extend: {},
	},
	plugins: [],
}
