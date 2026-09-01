import React from 'react';
import { ArrowRight, Sparkles, Compass, Users, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Background Radial Glow */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/15 to-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" /> */}

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl font-['Plus_Jakarta_Sans'] leading-[1.15]">
        Learn Nigerian Languages.{' '}
        {/* <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 -webkit-background-clip-text text-transparent">
          Speak With Confidence.
        </span> */}
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
        Learn Yoruba, Igbo and Hausa through practical lessons, native speakers and the culture behind the language.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="#waitlist"
          className="glow-pill w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Join the Waitlist</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </a>

        <a
          href="#languages"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800/90 font-semibold text-base backdrop-blur-md transition-all duration-200"
        >
          <Compass className="w-4 h-4 text-slate-400" />
          <span>Explore Languages</span>
        </a>
      </div>

      {/* Trust & Highlights Bar */}
      <div className="mt-20 pt-10 border-t border-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl text-slate-400 text-sm">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="font-medium">Practical Interactive Lessons</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
            <Users className="w-4 h-4" />
          </div>
          <span className="font-medium">Native Speaker Audio</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-medium">Cultural Context & Stories</span>
        </div>
      </div>
    </section>
  );
};
