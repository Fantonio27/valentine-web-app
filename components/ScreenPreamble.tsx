import React from 'react';

interface ScreenPreambleProps {
  onNext: () => void;
}

const ScreenPreamble: React.FC<ScreenPreambleProps> = ({ onNext }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-surface to-background-light dark:from-background-dark dark:to-black z-0"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-[10%] left-[10%] w-24 h-24 shape-blob animate-float-slow z-0"></div>
      <div className="absolute bottom-[20%] right-[10%] w-32 h-32 shape-blob animate-float-medium z-0" style={{ animationDelay: '1s' }}></div>
      <span className="material-icons-round absolute top-[40%] right-[20%] text-primary/10 animate-float-fast text-5xl z-0">favorite</span>
      <span className="material-icons-round absolute bottom-[10%] left-[20%] text-primary/20 animate-float-slow text-6xl z-0" style={{ animationDelay: '2s' }}>favorite_border</span>

      <main className="relative z-10 w-full max-w-md px-6 py-8 flex flex-col justify-between items-center min-h-[800px]">
        {/* Date Label */}
        <div className="w-full flex justify-center pt-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]" data-aos="fade-down">
            <span className="px-4 py-1 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-sm text-primary text-xs font-semibold tracking-widest uppercase border border-white/60 shadow-sm">
                February 14th & 15th
            </span>
        </div>

        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center w-full space-y-8">
            <div className="relative group cursor-pointer perspective-1000" data-aos="zoom-in">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform scale-75 animate-pulse"></div>
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-700 hover:scale-105">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWk11l7UPM4hLTubzKM_IK5mBZiuIZlTIevVRfUvefG6XCp7gOcWGbcMLBIW5V0Fks0Rls5WrZttdGBfyq1FVKNZOR2dSxWRrNzWFKX4-Q4UY6F2gKQEuouvUWPb2WHSkJjQLIHGT3jQTqSNlZ17WPd-07ilvrBQEYTAoc6KTQhKuv8iQ0-lP7NqLOjNNHJT1MYCxDRohy_kpJI0e-jWKG4nRuQ48AUVM7SwSBO_HQ_pBccqWAopuc1JBnFKE2FZ9FOemBNRCv3U" 
                        alt="Pink heart cloud" 
                        className="w-full h-full object-cover rounded-full shadow-[0_20px_50px_-12px_rgba(238,43,108,0.3)] border-4 border-white/40"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-float-fast">
                        <span className="text-3xl">💌</span>
                    </div>
                </div>
            </div>

            <div className="glass-card w-full p-8 rounded-xl text-center space-y-4 shadow-sm dark:bg-white/5 dark:border-white/10 transition-all hover:shadow-md" data-aos="fade-up">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                        I have something <span className="text-primary">special</span> to ask you...
                    </h1>
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto rounded-full"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-md leading-relaxed font-light">
                    Every moment with you is a reminder of how lucky I am to have you. You make my world brighter, my heart fuller, and my life so much more meaningful.
                </p>
            </div>
        </div>

        {/* CTA */}
        <div className="w-full pt-8 pb-4" data-aos="fade-up" data-aos-delay="200">
            <button 
                onClick={onNext}
                className="group relative w-full py-5 px-8 bg-primary hover:bg-[#d61e5a] text-white rounded-full transition-all duration-300 transform active:scale-95 shadow-[0_10px_40px_-10px_rgba(238,43,108,0.6)] animate-pulse-glow flex items-center justify-center space-x-3 overflow-hidden"
            >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="text-xl font-bold tracking-wide">Will you be...</span>
                <span className="material-icons-round animate-bounce">favorite</span>
            </button>
            <p className="text-center text-gray-400 dark:text-gray-500 text-xs mt-4 tracking-wide font-medium">
                Made with love, just for you.
            </p>
        </div>
      </main>

      {/* Shimmer CSS for button */}
      <style>{`
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ScreenPreamble;