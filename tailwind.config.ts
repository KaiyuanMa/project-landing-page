import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				white: '#F3F4F2',
				botanical: 'rgb(72,134,124)',
				pebble: 'rgb(187,190,191)',
				'rose-gold': 'rgb(151,99,80)'
			}
		}
	},

	plugins: []
} satisfies Config;
