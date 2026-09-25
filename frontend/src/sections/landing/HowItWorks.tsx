import React from 'react';
import { Globe, BookOpen, Volume2, MessageSquare } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose a language',
      description: 'Select Yorùbá, Ígbò, or Hausa based on your personal learning goals or heritage.',
      icon: Globe,
    },
    {
      number: '02',
      title: 'Learn practical lessons',
      description: 'Engage with structured, bite-sized lessons focused on everyday expressions and grammar.',
      icon: BookOpen,
    },
    {
      number: '03',
      title: 'Practice with native speakers',
      description: 'Listen to native pronunciation and practice real conversations with native speakers.',
      icon: Volume2,
    },
    {
      number: '04',
      title: 'Start speaking',
      description: 'Gain natural fluency and speak with confidence in real-world scenarios.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
          How It Works
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          A clear, step-by-step path designed to get you speaking naturally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold text-indigo-400 font-['Plus_Jakarta_Sans']">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
