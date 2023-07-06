/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),var(--transparent))',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: 1, transform: 'translateY(100px)' },
          to: { opacity: 1, transform: 'translateY(100px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
        },
        'fade-in-up': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        'fade-up-and-bounce': {
          '0%': {
            opacity: 0,
            transform: 'translateY(100px)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            offset: 0,
          },
          '50%': {
            opacity: 1,
            transform: 'translateY(-20px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            offset: 0.5,
          },
          '75%': {
            opacity: 1,
            transform: 'translateY(10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            offset: 0.75,
          },
          '85%': {
            opacity: 1,
            transform: 'translateY(-5px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            offset: 0.85,
          },

          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            offset: 1,
          },
        },
      },
      animation: {
        'fade-up':
          'fade-in 400ms var(--animation-delay, 0ms)  ease-in forwards',
        'fade-in-up': 'fade-in-up 1200ms ease-in-out',
        'fade-up-and-bounce':
          'fade-up-and-bounce 1000ms var(--animation-delay,0s) ease-in forwards',
        'fade-in':
          'fade-in 1400ms var(--animation-delay, 0ms)  ease-in forwards',
      },
    },
  },
  plugins: [],
};
