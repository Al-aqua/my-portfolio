/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			text: 'hsl(38, 100%, 98%)',
			background: 'hsl(72, 16%, 6%)',
			primary: 'hsl(51, 8%, 31%)',
			secondary: 'hsl(41, 26%, 79%)',
			accent: 'hsl(38, 68%, 58%)'
		},
		extend: {}
	},

	plugins: []
};
