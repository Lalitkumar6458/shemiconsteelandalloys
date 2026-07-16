/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        easternBlue: "var(--eastern-blue)",
        greenWhite: "var(--green-white)", 
        burntSienna: "var(--burnt-sienna)",
        tacao: "var(--tacao)",
        glacier: "var(--glacier)",
        eternity: "var(--eternity)", 
        burntUmber: "var(--burnt-umber)",
        powderBlue: "var(--powder-blue)",
        catalinaBlue: "var(--catalina-blue)",
        chathamsBlue: "var(--chathams-blue)"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #1f2937 0%, #7f1d1d 100%)',
        'gradient-warm': 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)',
        'gradient-cool': 'linear-gradient(135deg, #334155 0%, #64748b 100%)',
        'gradient-blue': 'linear-gradient(135deg, #37474f 0%, #78909c 100%)',
        'gradient-brown': 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 100%)',
        'gradient-red': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 20%, #dc2626 40%, #ef4444 60%, #f87171 80%, #fca5a5 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #7f1d1d 0%, #b91c1c 50%, #ef4444 100%)',
        'gradient-fire': 'linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #f87171 100%)',
        'gradient-passion': 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
};
