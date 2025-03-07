// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from 'starlight-theme-catppuccin';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [catppuccin()],
			title: 'botch.lol',
			lastUpdated: true,
			social: {
				github: 'https://github.com/tiltowait/botch',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/get-started' },
						{ label: 'Character Creation', slug: 'guides/character-creation' },
						{ label: 'Character Management', slug: 'guides/character-management' },
						{ label: 'Traits & Specialties', slug: 'guides/traits' },
						{ label: 'Rolls', slug: 'guides/rolls' },
						{ label: 'Premium Features', slug: 'guides/premium' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
