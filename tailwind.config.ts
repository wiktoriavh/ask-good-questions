import { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';
import Typography from '@tailwindcss/typography';

export default {
  content: ['index.html'],
  theme: {
    extend: {
      typography: (theme: PluginAPI['theme']) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.900'),
            h1: {
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.bold'),
              marginTop: theme('spacing.4'),
            },
            a: {
              color: theme('colors.teal[800]'),
              backgroundColor: 'rgba(17, 94, 89, 0.05)',
              paddingLeft: theme('spacing.1'),
              paddingRight: theme('spacing.1'),
              marginLeft: '-0.25rem',
              marginRight: '-0.25rem',
              borderRadius: theme('borderRadius.md'),
              '&:hover': {
                color: theme('colors.zinc.100'),
                backgroundColor: theme('colors.teal.800'),
              },
            },
            'li::marker': {
              color: theme('colors.teal.900'),
            },
          },
        },

        invert: {
          css: {
            color: theme('colors.zinc.100'),
            a: {
              color: theme('colors.teal.400'),
              backgroundColor: 'rgba(45, 212, 191, 0.05)',
              '&:hover': {
                color: theme('colors.zinc.900'),
                backgroundColor: theme('colors.teal.400'),
              },
            },
            'li::marker': {
              color: theme('colors.teal.400'),
            },
          },
        },
      }),
      boxShadow: {
        outer: '0 0 0 0.5rem var(--tw-shadow-color)',
      },
    },
  },
  plugins: [Typography],
} satisfies Config;
