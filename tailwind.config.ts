import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#0A0A0C',
          text: '#F4F4F5',
          muted: '#A1A1AA',
          border: '#1E1E22',
          accent: {
            DEFAULT: '#C85A32',
            dark: '#A84323',
            light: '#1E1613',
          }
        }
      },
      letterSpacing: {
        widest: '0.15em',
        loose: '0.05em',
      },
    },
  },
  plugins: [],
};
export default config;
