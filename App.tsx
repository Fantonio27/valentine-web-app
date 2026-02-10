import React, { useState } from 'react';
import { AppScreen } from './types';
import ScreenIntro from './components/ScreenIntro';
import ScreenPreamble from './components/ScreenPreamble';
import ScreenJourney from './components/ScreenJourney';
import ScreenQuestion from './components/ScreenQuestion';
import ScreenSuccess from './components/ScreenSuccess';

// External library for confetti (simulated via import if available, but using a custom implementation for simplicity/reliability in this context without npm install)
// For this environment, we'll assume a self-contained flow.

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.INTRO);

  const navigateTo = (screen: AppScreen) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.INTRO:
        return <ScreenIntro onNext={() => navigateTo(AppScreen.PREAMBLE)} />;
      case AppScreen.PREAMBLE:
        return <ScreenPreamble onNext={() => navigateTo(AppScreen.JOURNEY)} />;
      case AppScreen.JOURNEY:
        return <ScreenJourney onNext={() => navigateTo(AppScreen.QUESTION)} onBack={() => navigateTo(AppScreen.PREAMBLE)} />;
      case AppScreen.QUESTION:
        return <ScreenQuestion onYes={() => navigateTo(AppScreen.SUCCESS)} onBack={() => navigateTo(AppScreen.JOURNEY)} />;
      case AppScreen.SUCCESS:
        return <ScreenSuccess onRestart={() => navigateTo(AppScreen.INTRO)} />;
      default:
        return <ScreenIntro onNext={() => navigateTo(AppScreen.PREAMBLE)} />;
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
        {/* Render the active screen */}
        {renderScreen()}
    </div>
  );
}