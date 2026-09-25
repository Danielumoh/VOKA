import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Languages: React.FC = () => {
  const languagesList = [
    {
      name: 'Yoruba',
      nativeName: 'Yorùbá',
      description: 'Spoken by over 45 million people in Southwestern Nigeria and across West Africa.',
      speakers: '45M+ Speakers',
      tag: 'Available at Launch',
    },
    {
      name: 'Igbo',
      nativeName: 'Ígbò',
      description: 'Spoken by over 30 million people in Southeastern Nigeria and global diaspora.',
      speakers: '30M+ Speakers',
      tag: 'Available at Launch',
    },
    {
      name: 'Hausa',
      nativeName: 'Hausa',
      description: 'Spoken by over 70 million native & second-language speakers across Northern Nigeria & West Africa.',
      speakers: '70M+ Speakers',
      tag: 'Available at Launch',
    },
  ];

  return (
    <section id="languages" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          Languages
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Start your journey with West Africa&apos;s most widely spoken languages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {languagesList.map((lang) => (
          <div
            key={lang.name}
            className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:border-indigo-500/50 transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇳🇬</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {lang.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400">{lang.nativeName}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {lang.description}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400">
              <span>{lang.speakers}</span>
              <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {lang.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
