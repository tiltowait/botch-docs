// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from 'starlight-theme-catppuccin';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          plugins: [catppuccin()],
          title: 'botch.lol',
          lastUpdated: true,
          favicon: '/favicon.png',
          social: {
              github: 'https://github.com/tiltowait/botch',
          },
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Getting Started', slug: 'guides/getting-started' },
                      { label: 'Character Creation', slug: 'guides/character-creation' },
                      { label: 'Character Management', slug: 'guides/character-management' },
                      { label: 'Traits & Specialties', slug: 'guides/traits' },
                      { label: 'Rolls', slug: 'guides/rolls' },
                      { label: 'Macros', slug: 'guides/macros' },
                      { label: 'Premium Features', slug: 'guides/premium' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
              { label: 'Privacy Policy', slug: 'privacy-policy' },
          ],
      }),
	],

  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0'
  },
});
