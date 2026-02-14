import React from 'react';

interface ScreenLoveLetterProps {
  onNext: () => void;
  onBack?: () => void;
}

const ScreenLoveLetter: React.FC<ScreenLoveLetterProps> = ({ onNext, onBack }) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-4 py-6 sm:py-12 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 text-2xl sm:text-4xl animate-float-slow">🌸</div>
        <div className="absolute top-20 sm:top-40 right-16 sm:right-32 text-xl sm:text-3xl animate-float">💕</div>
        <div className="absolute bottom-16 sm:bottom-32 left-20 sm:left-40 text-2xl sm:text-4xl animate-float-delayed">🌺</div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 text-xl sm:text-3xl animate-float-slow">✨</div>
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-2xl" data-aos="fade-up">
        {/* Modern Card */}
        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-pink-100 dark:border-pink-900/30">
          
          {/* Header with Icon */}
          <div className="flex flex-col items-center mb-6 sm:mb-10" data-aos="zoom-in">
            <div className="mb-4 sm:mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-pink-400 to-rose-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl sm:text-4xl">💌</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-center mb-2 sm:mb-3">
              For You, My Love
            </h1>
            <div className="flex gap-2 items-center">
              <div className="h-0.5 w-6 sm:w-8 bg-gradient-to-r from-transparent to-pink-400"></div>
              <span className="text-xl sm:text-2xl">💕</span>
              <div className="h-0.5 w-6 sm:w-8 bg-gradient-to-l from-transparent to-pink-400"></div>
            </div>
          </div>

          {/* Letter Content - Modern & Sweet */}
          <div className="space-y-4 sm:space-y-6 text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            
            <p className="text-center text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
              Hi Beautiful, ✨
            </p>

            <p>
              Every day with you feels like a gift. Your smile brightens my mornings, 
              your voice is my favorite sound, and your love is my greatest treasure.
            </p>

            {/* Image Section - Clean */}
            <div className="relative my-6 sm:my-8 group" data-aos="zoom-in" data-aos-delay="400">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://media1.tenor.com/m/cST5JrybbDsAAAAd/love-heart.gif"
                  alt="Love animation" 
                  className="w-full h-40 sm:h-56 object-cover"
                />
              </div>
            </div>

            <p>
              I love how we can be silly together, how you understand me without words, 
              and how you make ordinary moments feel extraordinary. You're not just my partner—
              you're my best friend, my comfort, my joy.
            </p>

            {/* Sweet Accent */}
            <div className="flex justify-center gap-3 sm:gap-4 my-6 sm:my-8">
              <span className="text-2xl sm:text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
              <span className="text-2xl sm:text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>💖</span>
              <span className="text-2xl sm:text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</span>
            </div>

            {/* Second Image - Polaroid Style */}
            <div className="flex justify-center" data-aos="flip-up" data-aos-delay="600">
              <div className="bg-white dark:bg-gray-700 p-3 sm:p-4 shadow-xl rounded-lg transform hover:scale-105 transition-transform duration-300 max-w-full">
                <img 
                  src="https://media1.tenor.com/m/8OXbG_mlQO0AAAAd/milk-and-mocha-bear-couple.gif"
                  alt="Us" 
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto aspect-[4/3] object-cover rounded-md mx-auto"
                />
                <p className="text-center mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Forever & Always 💕
                </p>
              </div>
            </div>

            <p>
              Thank you for choosing me, for loving me, and for being you. 
              I can't wait for all the adventures, laughs, and memories we'll create together.
            </p>

            {/* Signature */}
            <div className="pt-4 sm:pt-6 mt-6 sm:mt-8 border-t border-pink-100 dark:border-pink-900/30" data-aos="fade-up" data-aos-delay="800">
              <div className="text-center space-y-2 sm:space-y-3">
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  All my love,
                </p>
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Your Forever Valentine 💝
                </p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="text-lg sm:text-xl">✨</span>
                  <span className="text-lg sm:text-xl">💕</span>
                  <span className="text-lg sm:text-xl">✨</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center" data-aos="fade-up" data-aos-delay="1000">
          {onBack && (
            <button 
              onClick={onBack}
              className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-sm sm:text-base"
            >
              ← Back
            </button>
          )}
          <button 
            onClick={onNext}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full blur opacity-60 group-hover:opacity-100 transition"></div>
            <div className="relative bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg flex items-center justify-center gap-2 transform transition hover:scale-105">
              <span>Continue</span>
              <span className="group-hover:scale-110 transition-transform">💖</span>
            </div>
          </button>
        </div>
      </div>

      {/* Corner Decoration - Simple */}
      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 hidden sm:block opacity-60" data-aos="fade-down-left">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-5xl">🌸</span>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 hidden sm:block opacity-60" data-aos="fade-up-right">
        <div className="flex flex-col items-center gap-1">
          <span className="text-3xl sm:text-5xl">💕</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenLoveLetter;
