import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppScreen } from './types';
import ScreenIntro from './components/ScreenIntro';
import ScreenPreamble from './components/ScreenPreamble';
import ScreenLoveLetter from './components/ScreenLoveLetter';
import ScreenJourney from './components/ScreenJourney';
import ScreenQuestion from './components/ScreenQuestion';
import ScreenSuccess from './components/ScreenSuccess';

// External library for confetti (simulated via import if available, but using a custom implementation for simplicity/reliability in this context without npm install)
// For this environment, we'll assume a self-contained flow.

export default function App() {
  const captivatedTrack = new URL('./assets/music/IV OF SPADES - Captivated (Official Audio).mp3', import.meta.url).href;
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.INTRO);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().then(() => setIsMusicPlaying(true)).catch(() => setIsMusicPlaying(false));
      return;
    }

    audio.pause();
    setIsMusicPlaying(false);
  };

  const navigateTo = (screen: AppScreen) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen(screen);
  };

  const handleOpenLetter = () => {
    navigateTo(AppScreen.LOVELETTER);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentScreen === AppScreen.LOVELETTER) {
      audio.play().then(() => setIsMusicPlaying(true)).catch(() => setIsMusicPlaying(false));
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    setIsMusicPlaying(false);
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.INTRO:
        return <ScreenIntro onNext={handleOpenLetter} />;
      // case AppScreen.PREAMBLE:
      //   return <ScreenPreamble onNext={() => navigateTo(AppScreen.LOVELETTER)} />;
      case AppScreen.LOVELETTER:
        return <ScreenLoveLetter onNext={() => navigateTo(AppScreen.QUESTION)} onBack={() => navigateTo(AppScreen.PREAMBLE)} />;
      // case AppScreen.QUESTION:
        // return <ScreenQuestion onYes={() => navigateTo(AppScreen.SUCCESS)} onBack={() => navigateTo(AppScreen.PREAMBLE)} />;
      // case AppScreen.SUCCESS:
        // return <ScreenSuccess onRestart={() => navigateTo(AppScreen.INTRO)} />;
      default:
        return <ScreenIntro onNext={() => navigateTo(AppScreen.INTRO)} />;
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
        <audio
          ref={audioRef}
          src={captivatedTrack}
          loop
          preload="auto"
        />
        {currentScreen !== AppScreen.INTRO && (
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? 'Pause music' : 'Play music'}
            title={isMusicPlaying ? 'Pause music' : 'Play music'}
            className="fixed top-4 right-4 z-50 h-10 w-10 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark flex items-center justify-center"
          >
            <span className="material-icons-round text-[18px]">
              {isMusicPlaying ? 'volume_up' : 'music_note'}
            </span>
          </button>
        )}
        {/* Render the active screen */}
        {renderScreen()}
    </div>
  );
}
