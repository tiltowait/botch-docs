// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import starlight from '@astrojs/starlight';
import catppuccin from 'starlight-theme-catppuccin';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://botch.lol',
  // vite: {
  //    css: {
  //       preprocessorOptions: {
  //          scss: {
  //            additionalData: `@import "./src/styles/bootstrap-custom.scss";`
  //          }
  //       }
  //    }
  // },
  integrations: [
      starlight({
          plugins: [catppuccin()],
          title: 'botch.lol',
          logo: {
              src: './src/assets/botch-logo.webp',
          },
          lastUpdated: true,
          favicon: '/favicon.png',
          social: {
              github: 'https://github.com/tiltowait/botch',
              discord: 'https://discord.gg/QHnCdSPeEE',
              patreon: 'https://patreon.com/tiltowait',
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
              { label: 'Administration', slug: 'administration' },
              { label: 'Preferences', slug: 'preferences' },
              { label: 'Privacy Policy', slug: 'privacy-policy' },
              { label: 'Terms of Service', slug: 'terms-of-service' },
          ],
      }),
      svelte(),
	],

  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0'
  },
});
