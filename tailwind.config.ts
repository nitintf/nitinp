import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: '4vw',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				moranga: ['var(--font-moranga)', 'fallbackFontHere'],
				silka: ['var(--font-silka)', 'fallbackFontHere'],
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				border: 'var(--border)',
				highlight: 'var(--nav-link-highlight)',
				secondary: 'var(--secondary)',
				navBg: 'var(--nav-link-bg)',
			},
			height: {
				navbar: 'var(--top-navbar-height)',
				logo: 'var(--logo)',
			},
			width: {
				logo: 'var(--logo)',
			},
			boxShadow: {
				link: 'var(--link)',
				linkhover: 'var(--link-hover)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
export default config
