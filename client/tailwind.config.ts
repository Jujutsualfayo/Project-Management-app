const config = {
  darkMode: 'class', // Enables dark mode via a `dark` class
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        primary: '#1D4ED8',
        secondary: '#9333EA',
        accent: '#F59E0B',
        dark: {
          background: '#121212',
          foreground: '#e5e5e5',
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          accent: '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
