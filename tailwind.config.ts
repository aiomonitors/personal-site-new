/* eslint-disable @typescript-eslint/naming-convention */
import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				background: {
					DEFAULT: 'hsl(var(--background))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					alt: 'hsl(var(--card))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
				},
				overlay: {
					DEFAULT: 'hsl(var(--overlay))',
				},
			},
		},
	},
	plugins: [],
};
export default config;
