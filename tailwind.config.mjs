/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				yellow: '#F2E901'
			},
			fontFamily: {
				daciaBold: ['DaciaBlockExtendedBold', 'sans-serif'],
				daciaLight: ['DaciaBlockExtendedLight', 'sans-serif'],
				daciaExtended: ['DaciaBlockExtended', 'sans-serif'],
				daciaRegular: ['DaciaBlock', 'sans-serif'],
				daciaThin: ['DaciaBlockLight', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
