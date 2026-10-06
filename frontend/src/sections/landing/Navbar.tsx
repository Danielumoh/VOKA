import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { label: "Languages", href: "/#languages" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Tutors", href: "/#instructors" },
    { label: "About", href: "/#about" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-voka-border bg-voka-cream/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-voka-green"
            aria-label="Voka home"
          >
            Voka.
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-voka-muted hover:text-voka-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#login"
              className="text-sm font-semibold text-voka-ink hover:text-voka-green"
            >
              Log in
            </a>

            <Link
              to="/learn"
              className="rounded-full bg-voka-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-voka-green-dark"
            >
              Start learning
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="rounded-lg p-2 text-voka-ink hover:bg-voka-green-light md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-voka-border bg-voka-cream md:hidden"
        >
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-voka-ink hover:bg-voka-green-light"
              >
                <span>{link.label}</span>
                <ChevronRight className="h-4 w-4 text-voka-muted" />
              </a>
            ))}

            <Link
              to="/learn"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 flex w-full items-center justify-center rounded-xl bg-voka-green px-5 py-3 font-semibold text-white hover:bg-voka-green-dark"
            >
              Start learning
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
