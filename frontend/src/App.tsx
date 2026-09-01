import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { Languages } from './components/Languages';
import { Instructors } from './components/Instructors';
import { Vision } from './components/Vision';
import { WaitlistCTA } from './components/WaitlistCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. MAIN CONTENT SECTIONS */}
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Languages />
        <Instructors />
        <Vision />
        <WaitlistCTA />
      </main>

      {/* 3. FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
