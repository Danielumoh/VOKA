import React from 'react';
import { Users } from 'lucide-react';

export const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mx-auto mb-6">
          <Users className="w-6 h-6" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          &ldquo;Learn from people who actually speak it.&rdquo;
        </h2>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Master real pronunciations, dialects, and cultural nuances directly from native speakers and passionate instructors across Nigeria.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl">
            <h3 className="font-bold text-white text-base">Native Expertise</h3>
            <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
              Curated by fluent speakers who understand local nuance and natural dialogue.
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl">
            <h3 className="font-bold text-white text-base">Interactive Guidance</h3>
            <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
              Receive feedback on voice pronunciation and conversational rhythm.
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl">
            <h3 className="font-bold text-white text-base">Community Connection</h3>
            <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
              Practice speaking in supportive cohorts led by experienced mentors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
