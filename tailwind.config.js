/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#ff00ff',
        electricBlue: '#00ffff',
        deepViolet: '#1a0033',
      },
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 10px rgba(255,0,255,0.7), 0 0 20px rgba(0,255,255,0.6)',
        neonSoft: '0 0 6px rgba(255,0,255,0.45), 0 0 12px rgba(0,255,255,0.35)',
      },
      backgroundImage: {
        neonGrid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      animation: {
        slowPulse: 'slowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: 0.6, filter: 'drop-shadow(0 0 10px rgba(255,0,255,0.8))' },
          '50%': { opacity: 1, filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.9))' },
        },
      },
    },
  },
  plugins: [],
};
