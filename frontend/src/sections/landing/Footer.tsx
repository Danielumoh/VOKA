import React from "react";

const footerLinks = [
  { label: "Languages", href: "#languages" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Tutors", href: "#instructors" },
  { label: "About", href: "#about" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-voka-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-2xl font-bold tracking-tight text-voka-green"
              aria-label="Voka home"
            >
              Voka.
            </a>

            <p className="mt-2 text-sm text-voka-muted">
              Learn the languages that bring you closer.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-voka-muted hover:text-voka-green"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-voka-border pt-6 text-xs text-voka-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Voka. All rights reserved.</p>

          <p>Built for language, culture and connection.</p>
        </div>
      </div>
    </footer>
  );
};
