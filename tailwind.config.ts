import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'color-bg': '#F3F4F2'
			}
		}
	},

	plugins: []
} satisfies Config;
