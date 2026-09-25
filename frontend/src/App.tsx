import React from "react";
import { Navbar } from "./sections/landing/Navbar";
import { Hero } from "./sections/landing/Hero";
import { Problem } from "./sections/landing/Problem";
import { HowItWorks } from "./sections/landing/HowItWorks";
import { Languages } from "./sections/landing/Languages";
import { Instructors } from "./sections/landing/Instructors";
import { Vision } from "./sections/landing/Vision";
import { WaitlistCTA } from "./sections/landing/WaitlistCTA";
import { Footer } from "./sections/landing/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen">
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
