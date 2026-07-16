'use client'

export default function ScrollButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className="bg-gradient-ocean text-white p-3 rounded-full shadow-lg 
          hover:bg-white hover:text-gray-800 transition-all duration-300
          animate-bounce hover:animate-none
          ring-2 ring-white/50 hover:ring-gray-800/50
          transform hover:scale-110"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          className="transition-transform group-hover:rotate-180"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M5 10l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
}