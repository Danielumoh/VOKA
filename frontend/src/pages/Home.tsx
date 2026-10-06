import React from "react";

import { Navbar } from "../sections/landing/Navbar";
import { Hero } from "../sections/landing/Hero";
import { Problem } from "../sections/landing/Problem";
import { HowItWorks } from "../sections/landing/HowItWorks";
import { Languages } from "../sections/landing/Languages";
import { Instructors } from "../sections/landing/Instructors";
import { Vision } from "../sections/landing/Vision";
import { WaitlistCTA } from "../sections/landing/WaitlistCTA";
import { Footer } from "../sections/landing/Footer";


export const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Languages />
        <Instructors />
        <Vision />
        <WaitlistCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;