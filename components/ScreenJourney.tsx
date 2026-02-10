import React, { useEffect, useState } from 'react';

interface ScreenJourneyProps {
  onNext: () => void;
  onBack: () => void;
}

const ScreenJourney: React.FC<ScreenJourneyProps> = ({ onNext, onBack }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-background-light dark:bg-background-dark min-h-screen relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Sticky Header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 transition-all duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button onClick={onBack} className="p-2 -ml-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
                        <span className="material-icons-round text-2xl">arrow_back_ios_new</span>
                    </button>
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Our Memories</h1>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-icons-round text-primary text-xl">favorite</span>
                </div>
            </div>
        </header>

        <main className="pt-24 pb-32 px-4 min-h-screen relative">
            {/* Ambient Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[80%] h-[50%] bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute top-[40%] -right-[20%] w-[60%] h-[40%] bg-primary/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-[20%] w-[70%] h-[30%] bg-primary/10 rounded-full blur-[90px]"></div>
            </div>

            {/* Hero Text */}
            <div className="relative z-10 mb-8 text-center px-4 animate-[fadeInUp_0.6s_ease-out]">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">My Favorite Moments</p>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                    Here are just a few reasons why you are my <span className="text-primary">everything...</span>
                </h2>
            </div>

            {/* Masonry Grid */}
            <div className="relative z-10 columns-2 gap-4 space-y-4">
                {/* Card 1 */}
                <div className="break-inside-avoid mb-4 animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
                    <div className="bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative aspect-[3/4]">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8KvHkm7k9FQBVcsGRtHhY-O8qhCpvadt11jPbyB6EwNj0xhqPUlbLO990l5JkEhPEAIU7IAS5CpX6QD_Y5KQbLDxcUij0Bgn-P4prpVeiBimZX5Qm2VfpcDQKHbNANdSBS7WrCPY9AdHZU0OPyHAL4ToZW_QGNUgKwAH3BiXAzkZiBUNqID4LQheZd_r1fg7PqfVzrew4_yOkaIBbL8xT07JDemAfOqe970XTUqUgzfl9XQDVppN8WrZayZbb7iSCbgDb8z_a34U" alt="Couple" className="w-full h-full object-cover" />
                            <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 dark:text-white shadow-sm">2019</div>
                        </div>
                        <div className="p-4">
                            <span className="material-icons-round text-primary text-lg mb-2">location_on</span>
                            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                                "Where it all began. I knew from this moment that my life would never be the same."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="break-inside-avoid mb-4 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
                    <div className="bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative aspect-square">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8LbvIbVWSMrfjEMBK39wp1aZkFf7WGuywbm-kZ8IW6YulBhXDq0eq4tiLp0eI9HCjhHRJpHNx75cpqtF-aQSy-3Q9CCz5WbDXek7cqdyDuAYPIUeVQSUnQNWnB1G3SWPX9BNYLNOXx5honmTecQ6R-gTyBjnit7ZqOwSSuYctBbLt_C-418kkep7hega6--GqSFK4q2cvQCshQ2ofnSI7phPa9kuO8W5BYAOYOVN4GLVDhf4tIfGZGcebjujYDtMl_g3BRumpPrs" alt="Coffee" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Sunday Mornings</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                "Just coffee and your smile. It's all I need."
                            </p>
                        </div>
                    </div>
                </div>

                 {/* Card 3 */}
                 <div className="break-inside-avoid mb-4 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
                    <div className="bg-primary/5 dark:bg-primary/20 rounded-lg p-6 text-center border border-primary/10 shadow-sm flex flex-col items-center justify-center gap-3">
                        <span className="text-4xl">🥰</span>
                        <p className="text-primary font-bold text-lg">"Your laugh is my favorite sound in the whole world."</p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="break-inside-avoid mb-4 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
                    <div className="bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative aspect-[4/5]">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-NG4E1-EarGzueOb2fvNPGU4QLY_Rok4pnAYIqa-xyBLRHt5oSUDBA1tZXUh4pMzXySLfXaLQDuMq-I5u7Yx2e6CvNht6vuYZthp0ATHUH29v1jb2_QtZOQ0MZ9n5YTGyoPwWqwqYFXVipdUY9O3giFsoxvWl5_rbxihdbwQPRwM-yjGpWvWl8L4ChqCPWKFi9BYLdJXaf1rVSW2txwdSMUn7QciTAb9rfM-8o50WPfihH22taOWHLyifXX0yhQLcxLjNxwlbjC8" alt="Paris" className="w-full h-full object-cover" />
                            <div className="absolute bottom-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                                <span className="material-icons-round text-[14px]">flight</span> Paris
                            </div>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                "To many more adventures together. I wouldn't want to travel this road with anyone else."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="break-inside-avoid mb-4 animate-[fadeInUp_0.8s_ease-out_0.5s_both]">
                    <div className="bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="p-5 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHDWHHdSKA9UlkzpWtdvk00Kt1VvC02UzyesmU9nh-SLT4C7teeq6f4IZfdqaUVtt0qege9TQ3gw8rPqzz9RkBPFLTFxPhL9TfHojCblhoDHbiwg-2JvIrAWSA2l3tVAGtvm6LRWjG0WkmNHlLzzWdhWOv-qS7gMJBfHwK9kQyBOKoPiDpku5TIBRLJP07SGJfSSO1Sz4h2I5NOkrjO9TDaM2ayfgfwenCyWXTCLRaYiMmMhYLT32o-ijfCKRspavw61l5mP6_OHk" alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Note to you</p>
                                    <p className="font-bold text-gray-900 dark:text-white text-sm">Dec 14, 2023</p>
                                </div>
                            </div>
                            <p className="text-sm italic text-gray-600 dark:text-gray-300 border-l-2 border-primary pl-3">
                                "I love the way you look at me when you think I'm not noticing."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="break-inside-avoid mb-4 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
                    <div className="bg-white dark:bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="relative aspect-square">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYB-qdZhfbYdMilD2Y429WTuIw1HeUXNXJQlwOa2tKM3Pe0UonzuFB-VJ4HlAJp-rRpQTbZR2R2qKLlLrc71XXq4pynLAjb2g0JxA5oDtYMZpO9Re_B-Mq_Lk-8SA_MpdqbiOEEqi0n0dkXIdD59rXziGDU4n12a8pvYQsR3OGVl1J5TWtkbJvfuexYJARg8R3eE52NGxo4UtX8Oh5JLOstAYawpTgsGtykSOs46R7ehVxJ4YhpZ__GiRN3K7uCiY9L1YSP3X2TM0" alt="Polaroid" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="p-4 text-center">
                            <p className="font-display text-primary text-lg font-bold">Forever & Always</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-12"></div>
        </main>

        {/* Footer CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-6 z-50 bg-gradient-to-t from-background-light via-background-light/90 to-transparent dark:from-background-dark dark:via-background-dark/90 pb-8 pt-12">
            <button 
                onClick={onNext}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 px-8 rounded-full shadow-xl shadow-primary/30 transform transition hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group animate-[fadeInUp_0.8s_ease-out_0.8s_both]"
            >
                <span>Keep Going...</span>
                <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
        </div>
    </div>
  );
};

export default ScreenJourney;