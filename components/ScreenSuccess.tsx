import React, { useEffect } from 'react';

// Use a simple simulated confetti effect for React without external dependencies
const ConfettiParticle: React.FC<{ delay: number; left: number }> = ({ delay, left }) => (
    <div 
        className="absolute top-0 w-3 h-3 rounded-full animate-float-fast"
        style={{
            left: `${left}%`,
            backgroundColor: ['#ee2b6c', '#ff8aa5', '#ffd700', '#3498db'][Math.floor(Math.random() * 4)],
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${delay}s`,
            opacity: 0.8
        }}
    />
);

interface ScreenSuccessProps {
  onRestart: () => void;
}

const ScreenSuccess: React.FC<ScreenSuccessProps> = ({ onRestart }) => {
    
    // Create an array of particles
    const particles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2
    }));

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-primary text-white overflow-hidden">
        {/* Confetti */}
        {particles.map(p => (
            <ConfettiParticle key={p.id} delay={p.delay} left={p.left} />
        ))}

        <div className="z-10 text-center space-y-8 p-8 animate-fade-in-up" data-aos="zoom-in">
            <div className="w-40 h-40 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-8xl animate-bounce">🎉</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                YAYYY!
            </h1>
            <p className="text-2xl font-medium text-white/90 max-w-sm mx-auto">
                Best. Valentine. Ever. <br/>
                Can't wait to see you! ❤️
            </p>

            <button 
                onClick={onRestart}
                className="mt-12 px-8 py-3 bg-white text-primary rounded-full font-bold shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
                Watch Again
            </button>
        </div>
    </div>
  );
};

export default ScreenSuccess;