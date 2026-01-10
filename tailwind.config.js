/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // High-end serif for the actual story
        serif: ['"Cormorant Garamond"', 'serif'], 
        // Clean sans for UI/Menu
        sans: ['"Inter"', 'sans-serif'],
        // Retro mono for the typewriter parts
        mono: ['"Courier Prime"', 'monospace'], 
      },
      colors: {
        paper: '#F5F5F0', // Warm, off-white (easier on eyes than #fff)
        ink: '#1c1c1c',   // Soft black (easier on eyes than #000)
        void: '#111111',  // Dark mode bg
        ash: '#A8A29E',   // Muted text
      },
      // CUSTOMIZING THE READING EXPERIENCE
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch', // Optimal reading width (65 characters)
            color: theme('colors.ink'),
            fontFamily: theme('fontFamily.serif'),
            fontSize: '1.125rem', // 18px base size
            lineHeight: '1.8',    // Loose line height for readability
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
          },
        },
        // Dark mode overrides
        invert: {
          css: {
            '--tw-prose-body': '#d6d3d1', // stone-300
            '--tw-prose-headings': '#ffffff',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}