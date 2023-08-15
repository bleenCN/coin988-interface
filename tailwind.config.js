/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['components/**/*.{js,ts,jsx,tsx,mdx}', 'app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: '1rem',
      screens: {
        '2xl': ' 1776px',
      },
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'dark-background': '#292A2D',
        'dark-foreground': '#343538',
        'dark-foreground-hover': '#3E3F44',
        'dark-foreground-active': '#2E60FF',
        'light-foreground': '#F6F9FF',
        'light-foreground-hover': '#DCE3F1',
        c1: '#2e60ff',
        c2: '#292a2d',
        c3: '#9ea1ac',
        c4: '#dee1ea',
        c5: '#10b23d',
        c6: '#f13636',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        brand: 'hsl(var(--brand))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'primary-invert': {
          DEFAULT: 'hsl(var(--primary-foreground))',
          foreground: 'hsl(var(--primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        soft: {
          DEFAULT: 'hsl(var(--soft))',
          foreground: 'hsl(var(--soft-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'card-hard': 'hsl(var(--card-hard))',
        'input-placeholder': 'hsl(var(--input-placeholder))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0, opacity: 0 },
          to: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
          to: { height: 0, opacity: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s linear',
        'accordion-up': 'accordion-up 0.2s linear',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))',
      )
    },
  ],
}
