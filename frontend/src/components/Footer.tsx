import React from 'react';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Globe className="w-4 h-4" />
          </div>
          <span className="text-lg font-bold text-white tracking-wide">
            VOKA<span className="text-indigo-500">.</span>
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 text-sm text-slate-400">
          <a href="#learn" className="hover:text-white transition-colors">Learn</a>
          <a href="#instructors" className="hover:text-white transition-colors">For Instructors</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} VOKA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
