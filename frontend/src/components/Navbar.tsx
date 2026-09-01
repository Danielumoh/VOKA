import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sparkles, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Add subtle shadow / background intensification on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: 'Learn', href: '#learn' },
    { label: 'For Instructors', href: '#instructors' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3 shadow-2xl shadow-indigo-950/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT SIDE: Brand Logo - VOKA */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
            aria-label="VOKA Home"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 text-white stroke-[2.2]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-400 rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-2xl font-extrabold tracking-wider text-white font-['Plus_Jakarta_Sans'] group-hover:opacity-90 transition-opacity">
              VOKA<span className="text-gradient font-black">.</span>
            </span>
          </a>

          {/* RIGHT SIDE: Desktop Navigation Items */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <ul className="flex items-center gap-7 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-indigo-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button: Join Waitlist */}
            <a
              href="#waitlist"
              className="glow-pill relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-md hover:shadow-indigo-500/40 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Join Waitlist</span>
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden glass-nav border-t border-slate-800/80 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="max-w-7xl mx-auto px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-all duration-150"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            {/* Mobile CTA: Join Waitlist */}
            <div className="pt-2">
              <a
                href="#waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 active:scale-95 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Join Waitlist</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
