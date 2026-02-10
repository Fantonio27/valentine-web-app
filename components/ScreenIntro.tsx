import React from 'react';

interface ScreenIntroProps {
  onNext: () => void;
}

const ScreenIntro: React.FC<ScreenIntroProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between px-6 py-8 overflow-hidden bg-peach-light/80 dark:bg-background-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 doodle-pattern opacity-20 dark:opacity-5 mix-blend-multiply z-0"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 -right-10 w-56 h-56 bg-primary/15 rounded-full blur-3xl animate-float-delayed pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 border-4 border-primary/20 rounded-full animate-float-medium pointer-events-none" style={{borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'}}></div>

      {/* Header */}
      <header className="relative z-10 w-full text-center mt-8 space-y-2">
        <div className="inline-block bg-white/60 dark:bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-primary/20 rotate-2 shadow-sm mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">For My Love of my Life</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          Hello <span className="text-primary handwritten-underline relative z-10">Ganda</span>,<br/>
          I have a <br/>question...
        </h1>
      </header>

      {/* Main Illustration */}
      <div className="flex-1 flex items-center justify-center w-full relative z-10">
        {/* Blob behind bear */}
        <div className="absolute w-64 h-64 bg-white dark:bg-white/10 rounded-full shadow-xl blur-sm opacity-60 animate-pulse"></div>
        
        {/* Star Sticker */}
        <div className="absolute top-10 left-4 transform rotate-[-5deg] animate-bounce-slow" style={{filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'}}>
            <span className="material-icons-round text-5xl text-yellow-400" style={{ textShadow: '2px 2px 0px #e67e22' }}>star</span>
        </div>
        
        {/* Heart Sticker */}
        <div className="absolute bottom-16 right-6 transform rotate-12 animate-wiggle" style={{filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'}}>
             <span className="material-icons-round text-5xl text-primary/80" style={{ textShadow: '2px 2px 0px white' }}>favorite</span>
        </div>

        {/* Bear Image */}
        <div className="relative z-10 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA25A1Rhsbm2VBi5o6W8vHxqcKgHnSWXZPcRDnqb9rUOFMFIftIHyVyZG5DS2VtgAb3DcZucDJTjgWg5NL_7hT1JKcUI08F9r3o3JQYTpsKRBdYU87TTPVpISM6K5umIn3hjsa7SIdKQaDPy8M-Tu0n-Ez2ktVl9_j2dic-09FcS0jckHhq4MhyiYLo8RyO-8WjcdgJ4sOzSrwBZeVqAVE5HAQduIInOBx0u86mEdif1oFnaAO7fFM6lm5QvBBAnpYyYCdIe5N2k7Y" 
                alt="Cute bear holding heart" 
                className="w-64 h-64 object-cover rounded-full border-8 border-white dark:border-primary/20 shadow-2xl rotate-3"
            />
            {/* Speech Bubble */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-xl rounded-bl-none shadow-lg border-2 border-primary transform -rotate-6">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">Psst! Look here!</span>
            </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full mb-8 flex flex-col items-center space-y-4 z-10">
        <button 
            onClick={onNext}
            className="group relative w-full max-w-xs"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
            <div className="relative w-full bg-primary hover:bg-pink-600 text-white font-bold text-xl py-5 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                <span>Open My Heart</span>
                <span className="text-2xl group-hover:animate-ping">💖</span>
            </div>
        </button>

        <div className="text-center opacity-70">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                ⚠️ Warning: Extremely cheesy content inside
            </p>
            <div className="mt-2 flex justify-center space-x-1">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span className="w-1 h-1 bg-primary rounded-full opacity-50"></span>
                <span className="w-1 h-1 bg-primary rounded-full opacity-25"></span>
            </div>
        </div>
      </div>

      {/* Decorative Corner Tape */}
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20 pointer-events-none">
        <div className="bg-primary text-white text-xs font-bold py-1 text-center w-32 transform rotate-45 translate-x-8 translate-y-6 shadow-md border-b-2 border-dashed border-white/30">
            LOVE
        </div>
      </div>
    </div>
  );
};

export default ScreenIntro;