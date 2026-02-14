import React, { useState, useEffect } from 'react';
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
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.INTRO);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const navigateTo = (screen: AppScreen) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.INTRO:
        return <ScreenIntro onNext={() => navigateTo(AppScreen.LOVELETTER)} />;
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
        {/* Render the active screen */}
        {renderScreen()}
    </div>
  );
}