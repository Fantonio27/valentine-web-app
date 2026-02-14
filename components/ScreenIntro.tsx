import React from 'react';

interface ScreenIntroProps {
  onNext: () => void;
}

const ScreenIntro: React.FC<ScreenIntroProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-between px-4 sm:px-6 py-6 sm:py-8 overflow-hidden bg-peach-light/80 dark:bg-background-dark">
      {/* Background Elements */}
      <div className="absolute inset-0 doodle-pattern opacity-20 dark:opacity-5 mix-blend-multiply z-0"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-primary/10 rounded-full blur-2xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-20 -right-10 w-40 sm:w-56 h-40 sm:h-56 bg-primary/15 rounded-full blur-3xl animate-float-delayed pointer-events-none"></div>
      <div className="absolute top-1/3 right-6 sm:right-10 w-16 sm:w-20 h-16 sm:h-20 border-4 border-primary/20 rounded-full animate-float-medium pointer-events-none" style={{borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'}}></div>

      {/* Header */}
      <header className="relative z-10 w-full text-center mt-4 sm:mt-8 space-y-2" data-aos="fade-down">
        <div className="inline-block bg-white/60 dark:bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-primary/20 rotate-2 shadow-sm mb-3 sm:mb-4">
          <span className="text-[10px] sm:text-xs font-bold text-primary uppercase tracking-widest">For My Love of my Life</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight px-2">
          Hello <span className="text-primary handwritten-underline relative z-10">Ganda</span>,<br/>
          I have something <br className="sm:hidden"/><span className="hidden sm:inline"><br/></span>to tell you...
        </h1>
      </header>

      {/* Main Illustration */}
      <div className="flex-1 flex items-center justify-center w-full relative z-10" data-aos="zoom-in">
        {/* Blob behind bear */}
        <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-white dark:bg-white/10 rounded-full shadow-xl blur-sm opacity-60 animate-pulse"></div>
        
        {/* Star Sticker */}
        <div className="absolute top-6 sm:top-10 left-2 sm:left-4 transform rotate-[-5deg] animate-bounce-slow" style={{filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'}}>
            <span className="material-icons-round text-3xl sm:text-5xl text-yellow-400" style={{ textShadow: '2px 2px 0px #e67e22' }}>star</span>
        </div>
        
        {/* Heart Sticker */}
        <div className="absolute bottom-12 sm:bottom-16 right-3 sm:right-6 transform rotate-12 animate-wiggle" style={{filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'}}>
             <span className="material-icons-round text-3xl sm:text-5xl text-primary/80" style={{ textShadow: '2px 2px 0px white' }}>favorite</span>
        </div>

        {/* Bear Image */}
        <div className="relative z-10 transform hover:scale-105 transition-transform duration-300 cursor-pointer">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqICNTFqsdbeuddXnYYGbp29LK2Ft0Jq2U6-La1y2KgG06DnMsUnQYBs9QUGsKL2ZbQtqstyPN5MkJTol8xcdCWdltjWLZDrEvDYPplnhbGGzRfjcfuCTUHvtidM9qY3ZZXpLFuMObt-6JggD1iU0XEM2abSJ7XEZ2nRUO-TOnPhZ5KPzUHvHABFDNzG3Fvb5wDGPEN5l36x9udi_JDV32WIwCSeNTFc3-2iUoewsLMZakas68i-XPAsO6Fw3j1mNcALfZu3mHS4s"
                alt="Cute bear holding heart" 
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full border-6 sm:border-8 border-white dark:border-primary/20 shadow-2xl rotate-3"
            />
            {/* Speech Bubble */}
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-white dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl rounded-bl-none shadow-lg border-2 border-primary transform -rotate-6">
                <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">letter for you</span>
            </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full mb-6 sm:mb-8 flex flex-col items-center space-y-3 sm:space-y-4 z-10" data-aos="fade-up">
        <button 
            onClick={onNext}
            className="group relative w-full max-w-xs px-4"
        >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-pink-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 animate-pulse"></div>
            <div className="relative w-full bg-primary hover:bg-pink-600 text-white font-bold text-lg sm:text-xl py-4 sm:py-5 px-6 sm:px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 sm:gap-3">
                <span>Open My Letter</span>
                <span className="text-xl sm:text-2xl group-hover:animate-ping">💖</span>
            </div>
        </button>

        <div className="text-center opacity-70">
            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
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
      <div className="absolute top-[0px] right-[-18px] w-[120px] sm:w-[150px] h-20 sm:h-24 overflow-hidden z-20 pointer-events-none">
        <div className="bg-primary text-white text-[10px] sm:text-xs font-bold py-1 text-center w-24 sm:w-32 transform rotate-45 translate-x-6 sm:translate-x-8 translate-y-5 sm:translate-y-6 shadow-md border-b-2 border-dashed border-white/30 tracking-wider">
            GURLFIE 🧚
        </div>
      </div>
    </div>
  );
};

export default ScreenIntro;