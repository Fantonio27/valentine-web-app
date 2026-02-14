import React, { useRef } from 'react';

interface ScreenLoveLetterProps {
  onNext: () => void;
  onBack?: () => void;
}

const ScreenLoveLetter: React.FC<ScreenLoveLetterProps> = ({ onNext, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-dvh h-dvh font-serif antialiased overflow-hidden flex flex-col items-center justify-center relative">
      {/* Floating Background Hearts Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute bottom-[-5%] left-[5%] text-primary/10 dark:text-primary/20 text-4xl sm:text-6xl animate-float">♥</div>
        <div className="absolute bottom-[-10%] right-[10%] text-primary/15 dark:text-primary/25 text-6xl sm:text-8xl animate-float-delayed">♥</div>
        <div className="absolute top-[15%] left-[2%] text-primary/5 dark:text-primary/10 text-2xl sm:text-4xl animate-float-fast">♥</div>
        <div className="absolute top-[10%] right-[5%] text-primary/10 dark:text-primary/20 text-3xl sm:text-5xl animate-float">♥</div>
        <div className="absolute top-[40%] right-[2%] text-primary/5 dark:text-primary/10 text-xl sm:text-3xl animate-float-delayed">♥</div>
        <div className="absolute bottom-[20%] left-[1%] text-primary/5 dark:text-primary/10 text-3xl sm:text-5xl animate-float-fast">♥</div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-primary/5 dark:from-primary/20 dark:to-transparent"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-md h-full flex flex-col p-4 sm:p-6" ref={containerRef}>
        {/* Header / Navigation */}
        <div className="w-full h-10 sm:h-12 flex items-center justify-between shrink-0 mb-2 sm:mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            {onBack ? (
                <button onClick={onBack} className="text-primary/60 hover:text-primary transition-colors p-2 -ml-2">
                    <span className="material-icons text-xl sm:text-2xl">arrow_back</span>
                </button>
            ) : <div className="w-8"></div>}
            
            <span className="text-primary/60 dark:text-primary/50 text-xs sm:text-sm font-bold tracking-widest uppercase">February 14, 2024</span>
            
            <div className="w-8"></div>
        </div>

        {/* The Parchment Container */}
        <div className="flex-grow relative w-full [perspective:1000px] group flex flex-col min-h-0">
          {/* Paper Shadow & Transform Wrapper */}
          <div className="absolute inset-0 transform transition-transform duration-700 ease-out bg-paper-texture shadow-[0_20px_50px_-12px_rgba(238,43,108,0.25)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden flex flex-col animate-[slideUp_0.8s_ease-out_forwards]">
            {/* Inner Border / Margin Decoration */}
            <div className="absolute inset-1.5 sm:inset-2 border border-primary/10 dark:border-primary/20 rounded-lg pointer-events-none"></div>
            <div className="absolute inset-2 sm:inset-3 border border-primary/5 dark:border-primary/10 rounded-lg pointer-events-none border-dashed"></div>
            
            {/* Scrollable Content Area */}
            <div className="flex-grow overflow-y-auto hide-scrollbar p-5 sm:p-8 relative">
              {/* Paper Header */}
              <div className="mb-6 sm:mb-8 text-center mt-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-icons text-xl sm:text-2xl">favorite</span>
                </div>
              </div>

              {/* The Letter */}
              <article className="text-gray-800 dark:text-gray-200">
                <h1 className="font-handwriting text-2xl sm:text-4xl text-primary mb-4 sm:mb-6">My Dearest Faye,</h1>
                <p className="mb-4 sm:mb-6 font-handwriting text-lg sm:text-2xl leading-relaxed">
                  Every moment with you feels like a beautiful dream I never want to wake up from. It feels like just yesterday that we first met, yet my soul feels as though it has known yours for a thousand lifetimes.
                </p>
                <p className="mb-4 sm:mb-6 font-handwriting text-lg sm:text-2xl leading-relaxed">
                  You are the sun that warms my coldest days and the starlight that guides me through the darkest nights. Your laugh is my favorite melody, and your smile... oh, your smile is the reason I strive to be a better man every single day.
                </p>
                <p className="mb-4 sm:mb-6 font-handwriting text-lg sm:text-2xl leading-relaxed">
                  I cherish the little things—the way you sip your coffee, how your eyes crinkle when you tell a joke, and the warmth of your hand in mine. Life is an adventure, but it only became a masterpiece when you walked into it.
                </p>
                <p className="mb-6 sm:mb-8 font-handwriting text-lg sm:text-2xl leading-relaxed">
                  I promise to love you, honor you, and cherish you through all of life's seasons. You are my forever.
                </p>
                <div className="mt-8 sm:mt-12 text-right">
                  <p className="text-xl sm:text-3xl font-handwriting text-primary transform -rotate-2 inline-block">
                    Yours forever,<br />
                    <span className="text-3xl sm:text-4xl mt-2 block">France</span>
                  </p>
                </div>
              </article>
              
              {/* Bottom Spacer */}
              <div className="h-20 sm:h-24"></div>
            </div>

            {/* Decorative Sticker */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 transform rotate-12 drop-shadow-md z-20 pointer-events-none">
              <div className="bg-white dark:bg-gray-800 p-1 sm:p-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative">
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 w-6 h-3 sm:w-8 sm:h-4 bg-primary/20 rotate-[-5deg] backdrop-blur-[1px]"></div>
                <div className="w-full h-full bg-primary/5 rounded-md flex items-center justify-center overflow-hidden">
                  <img 
                    alt="A vintage style red rose sticker" 
                    className="w-full h-full object-cover opacity-90" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAUQe7zjv1g90ZMPsaeg0HlPuIeIKyfX4Q2uQDUZDGoLXwmhu0no-ofCzu3pdengZWrJk5uv82-C5dGmDChGgAc1V2RnTnbi0aisFm0No4pdT1evGC6ZxdBWoMBsR3F6lZl6UqWbY5eg4mbPlrJu4a2yR4U4JFkQVucH6Zie6zYD82S4cL1bNbMvvh3MfgNFozj3qAwPRKLQ2ZrLSyJMQommwKTk1rfbT5uONmh9YpB2DYN81CoDPGGWdtFGICr2tMfqY_kALtCW8"
                  />
                </div>
              </div>
            </div>
            
            {/* Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-parchment dark:from-parchment-dark to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Footer / Action Area */}
        <div className="shrink-0 h-16 sm:h-24 flex items-center justify-center relative z-20">
          <button 
            onClick={onNext}
            className="bg-primary text-white font-serif font-medium text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(238,43,108,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(238,43,108,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 sm:gap-3 group animate-pulse-slow"
          >
            <span>Keep Reading...</span>
            <span className="material-icons text-lg sm:text-xl group-hover:animate-bounce">favorite</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ScreenLoveLetter;
