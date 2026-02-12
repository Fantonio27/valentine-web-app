import React, { useState, useRef } from 'react';

interface ScreenQuestionProps {
  onYes: () => void;
  onBack: () => void;
}

const PHRASES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
  "Plsss? :(",
  "Pretty please? :(",
  "With a cherry on top?",
  "You have no choice! 😜, It's a YES!"
];

const ScreenQuestion: React.FC<ScreenQuestionProps> = ({ onYes, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState<{x: number, y: number, width: number, height: number} | null>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const getNoButtonText = () => {
    return PHRASES[Math.min(noCount, PHRASES.length - 1)];
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col relative overflow-hidden text-gray-800 dark:text-gray-100 selection:bg-primary selection:text-white">
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#ee2b6c 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.08'}}></div>
            {/* Blobs */}
            <div className="absolute w-72 h-72 rounded-full bg-primary/20 top-[-50px] left-[-50px] animate-blob blur-[50px] mix-blend-multiply filter"></div>
            <div className="absolute w-96 h-96 rounded-full bg-primary/10 bottom-[-100px] right-[-100px] animate-blob blur-[50px] mix-blend-multiply filter" style={{animationDelay: '2s'}}></div>
            <div className="absolute w-48 h-48 rounded-full bg-yellow-200/40 dark:bg-yellow-900/20 top-1/2 left-1/4 animate-blob blur-[50px] mix-blend-multiply filter" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Header */}
        <header className="relative z-20 px-6 pt-8 pb-4 flex justify-between items-center" data-aos="fade-down">
             <button onClick={onBack} className="w-12 h-12 rounded-full bg-white dark:bg-background-dark shadow-sm border border-primary/20 flex items-center justify-center text-primary transition-transform active:scale-95 hover:bg-primary/5">
                <span className="material-icons-round">arrow_back</span>
             </button>
             <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-12 h-12 rounded-full shadow-sm border border-primary/20 flex items-center justify-center transition-all active:scale-95 ${isPlaying ? 'bg-primary text-white' : 'bg-white dark:bg-background-dark text-primary hover:bg-primary/5'}`}
             >
                <span className="relative left-[1.5px] top-[-1px] text-xl">🧚</span>
             </button>
        </header>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center">
             <span className="absolute top-1/4 left-10 text-primary/30 animate-float text-4xl">❤</span>
             <span className="absolute top-1/3 right-8 text-primary/20 animate-float-delayed text-2xl">💕</span>
             <span className="absolute bottom-1/3 left-16 text-primary/20 animate-float text-3xl">💖</span>
             <span className="absolute top-1/2 right-12 text-primary/10 animate-pulse-slow text-5xl">💗</span>
        </div>

        {/* Main Card */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-12 w-full max-w-md mx-auto">
             <div className="glass-card w-full rounded-xl p-8 shadow-xl shadow-primary/10 flex flex-col items-center text-center relative overflow-hidden transform transition-all hover:scale-[1.01]" data-aos="zoom-in">
                {/* Hero Icon */}
                <div className="w-32 h-32 mb-8 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-4 border-white dark:border-background-dark opacity-50"></div>
                    <span className="text-6xl animate-bounce">💌</span>
                </div>

                {/* Question */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight leading-tight">
                    Will you be <br/>
                    <span className="text-primary relative inline-block">
                        my Valentine?
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                        </svg>
                    </span>
                </h1>

                <p className="text-gray-500 dark:text-gray-300 mb-10 text-lg font-medium max-w-[260px] leading-relaxed">
                   My first love, my first girlfriend, my first Valentine — every “first” feels perfect because it’s with you. 🤗
                    

                    {/* I promise to buy you chocolates and give you unlimited hugs! 🤗 */}
                </p>

                {/* Buttons */}
                <div className="w-full space-y-4 relative z-10">
                    <button 
                        onClick={onYes}
                        className="group w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/30 transform transition-all active:scale-95 flex items-center justify-center gap-2 text-lg"
                    >
                        <span>Yes, of course</span>
                        <span className="group-hover:animate-ping">😘</span>
                    </button>
                    
                    <button 
                        ref={noButtonRef}
                         onClick={() => {
                             // Initial click to start flying
                             if (!noButtonPosition && noButtonRef.current) {
                                 const rect = noButtonRef.current.getBoundingClientRect();
                                 setNoButtonPosition({ x: rect.left, y: rect.top, width: rect.width, height: rect.height });
                                 
                                 // Small delay to allow rendering at initial position before moving
                                 setTimeout(() => {
                                     const x = Math.random() * (window.innerWidth - 100);
                                     const y = Math.random() * (window.innerHeight - 50);
                                     setNoButtonPosition(prev => prev ? { ...prev, x, y } : null);
                                 }, 50);
                             }
                             
                             if (noCount < PHRASES.length - 1) {
                                setNoCount(noCount + 1);
                             }
                        }}
                        className={`w-full bg-white dark:bg-white/5 border-2 border-primary/20 hover:border-primary text-primary hover:bg-primary/5 font-bold py-4 px-8 rounded-full transform transition-all active:scale-95 flex items-center justify-center gap-2 text-lg ${noButtonPosition ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        <span>{noButtonPosition ? PHRASES[0] : getNoButtonText()}</span>
                        <span className="animate-pulse">💕</span>
                    </button>
                </div>

                {/* Decorative Blobs inside card */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
             </div>
        </main>

        {/* Flying No Button (Outside the transformed card) */}
        {noButtonPosition && (
            <button 
                onClick={() => {
                    const x = Math.random() * (window.innerWidth - 100);
                    const y = Math.random() * (window.innerHeight - 50);
                    setNoButtonPosition(prev => prev ? { ...prev, x, y } : null);
                    
                    if (noCount >= PHRASES.length - 1) {
                        onYes();
                    } else {
                        setNoCount(noCount + 1);
                    }
                }}
                style={{ 
                    position: 'fixed', 
                    left: noButtonPosition.x, 
                    top: noButtonPosition.y,
                    width: noButtonPosition.width,
                    height: noButtonPosition.height,
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 9999
                }}
                className="bg-white dark:bg-white/5 backdrop-blur-sm border-2 border-primary/20 text-primary font-bold py-4 px-8 rounded-full shadow-2xl flex items-center justify-center gap-2 text-lg whitespace-nowrap"
            >
                <span>{getNoButtonText()}</span>
                <span className="animate-pulse">💕</span>
            </button>
        )}

        <div className="h-6 w-full z-10"></div>
    </div>
  );
};


export default ScreenQuestion;