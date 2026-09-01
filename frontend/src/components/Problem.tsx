import React from 'react';
import { BookOpen, Sparkles, MessageCircleHeart } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          &ldquo;Language is more than translation.&rdquo;
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Traditional apps focus on word-for-word translation, missing the heart of real communication. VOKA bridges the gap by connecting language learning with culture, context, and practical expression.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Practical Lessons</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Learn phrases and expressions you actually use in real-life conversations.
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
              <MessageCircleHeart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Cultural Depth</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Understand the nuance, humor, and stories behind native idioms and proverbs.
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Real Fluency</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Build natural confidence speaking with native speakers and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
