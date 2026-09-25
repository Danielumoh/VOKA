import React from "react";
import {
  ArrowUpRight,
  Headphones,
  MessageCircle,
  BookOpen,
} from "lucide-react";

const languages = [
  {
    name: "Yorùbá",
    greeting: "Ẹ n lẹ́",
    meaning: "Hello",
    description:
      "Build confidence in everyday Yoruba through practical vocabulary, pronunciation and cultural context.",
    lessons: "Beginner path",
  },
  {
    name: "Igbo",
    greeting: "Ndewo",
    meaning: "Hello",
    description:
      "Learn conversational Igbo through useful expressions, listening practice and real-life situations.",
    lessons: "Beginner path",
  },
  {
    name: "Hausa",
    greeting: "Sannu",
    meaning: "Hello",
    description:
      "Develop practical Hausa skills with guided lessons designed around communication and everyday life.",
    lessons: "Beginner path",
  },
];

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-voka-orange">
              Languages
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl lg:text-5xl">
              Start with a language that{" "}
              <span className="text-voka-green">matters to you.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-voka-muted">
            Whether you're reconnecting with family, moving somewhere new or
            simply curious, start with the language that brings you closer.
          </p>
        </div>

        {/* Language cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {languages.map((language) => (
            <article
              key={language.name}
              className="group flex min-h-[420px] flex-col rounded-[2rem] border border-voka-border bg-voka-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-8"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-voka-border bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-voka-green">
                  {language.lessons}
                </span>

                <button
                  type="button"
                  aria-label={`Explore ${language.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-voka-border bg-white text-voka-ink transition-colors group-hover:bg-voka-green group-hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              {/* Language */}
              <div className="mt-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-voka-muted">
                  {language.name}
                </p>

                <h3 className="mt-5 text-4xl font-bold tracking-tight text-voka-ink">
                  {language.greeting}
                </h3>

                <p className="mt-2 text-lg font-medium text-voka-green">
                  {language.meaning}
                </p>
              </div>

              <p className="mt-6 leading-7 text-voka-muted">
                {language.description}
              </p>

              {/* Features */}
              <div className="mt-auto pt-8">
                <div className="border-t border-voka-border pt-6">
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-voka-muted">
                    <span className="flex items-center gap-2">
                      <Headphones className="h-4 w-4 text-voka-orange" />
                      Listening
                    </span>

                    <span className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-voka-orange" />
                      Speaking
                    </span>

                    <span className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-voka-orange" />
                      Culture
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Expansion note */}
        <div className="mt-10 flex justify-center">
          <p className="rounded-full bg-voka-green-light px-5 py-2.5 text-center text-sm font-medium text-voka-green">
            More Nigerian languages will join Voka as we grow.
          </p>
        </div>
      </div>
    </section>
  );
};
