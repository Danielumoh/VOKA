import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../sections/landing/Navbar";
import { Footer } from "../sections/landing/Footer";
import {
  ArrowRight,
  Volume2,
  BookOpen,
  Headphones,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
const languages = [
  {
    id: 1,
    name: "Yoruba",
    description: "Learn Yoruba language and culture",
    available: true,
  },
  {
    id: 2,
    name: "Igbo",
    description: "Learn Igbo language and culture",
    available: false,
  },
  {
    id: 3,
    name: "Hausa",
    description: "Learn Hausa language and culture",
    available: false,
  },
];

const learningSteps = [
  {
    id: 1,
    title: "Learn",
    description:
      "Build useful vocabulary and understand how the language works.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Listen",
    description:
      "Hear native pronunciation and get familiar with how words sound.",
    icon: Headphones,
  },
  {
    id: 3,
    title: "Practice",
    description:
      "Use what you've learned through simple exercises and conversations.",
    icon: MessageCircle,
  },
  {
    id: 4,
    title: "Review",
    description: "Revisit lessons and strengthen what you've already learned.",
    icon: RotateCcw,
  },
];
const Learn: React.FC = () => {
  return (
    <div className="min-h-screen bg-voka-cream">
      <Navbar />

      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page heading */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-voka-ink sm:text-5xl lg:text-6xl">
              Choose the language that brings you{" "}
              <span className="text-voka-green">closer to home.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-voka-muted">
              Start your learning journey with practical lessons, native
              pronunciation and everyday conversations you can actually use.
            </p>
          </div>

          {/* Language cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {languages.map((language) => (
              <div
                key={language.id}
                className="flex flex-col rounded-2xl border border-voka-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              >
                {/* Availability */}
                <div className="mb-8">
                  {language.available ? (
                    <span className="inline-flex rounded-full bg-voka-green-light px-3 py-1 text-xs font-semibold text-voka-green">
                      Available
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-voka-orange-light px-3 py-1 text-xs font-semibold text-voka-orange">
                      Coming soon
                    </span>
                  )}
                </div>

                {/* Language information */}
                <h2 className="text-2xl font-bold tracking-tight text-voka-ink">
                  {language.name}
                </h2>

                <p className="mt-3 leading-7 text-voka-muted">
                  {language.description}
                </p>

                {/* Action */}
                <div className="mt-auto pt-8">
                  {language.available ? (
                    <Link
                      to={`/learn/${language.name.toLowerCase()}`}
                      className="inline-flex items-center justify-center rounded-full bg-voka-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-voka-green-dark"
                    >
                      Learn {language.name}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-voka-muted">
                      Lessons are coming soon.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* How you'll learn */}
          <section className="mt-24 border-t border-voka-border pt-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl">
                How you'll learn
              </h2>

              <p className="mt-4 text-lg leading-8 text-voka-muted">
                Build real language skills through a simple learning cycle
                designed around understanding and everyday use.
              </p>
            </div>

            {/* Your learningSteps.map() goes here */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {learningSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="rounded-2xl border border-voka-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-voka-green-light">
                      <Icon className="h-5 w-5 text-voka-green" />
                    </div>

                    <p className="mt-6 text-sm font-semibold text-voka-orange">
                      0{step.id}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-voka-ink">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-voka-muted">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="mt-24 border-t border-voka-border pt-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-voka-orange">
                Start speaking
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl">
                Try your first Yoruba lesson
              </h2>

              <p className="mt-4 text-lg leading-8 text-voka-muted">
                Get a feel for how Voka teaches with a simple everyday greeting.
              </p>
            </div>

            <div className="mt-10 max-w-3xl rounded-[2rem] border border-voka-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-voka-muted">
                Yoruba · Beginner
              </p>

              <div className="mt-8 flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl">
                    Ẹ káàrọ̀
                  </h3>

                  <p className="mt-2 text-voka-muted">Good morning</p>
                </div>

                <button
                  type="button"
                  aria-label="Play Yoruba pronunciation"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-voka-green text-white hover:bg-voka-green-dark"
                >
                  <Volume2 className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 border-t border-voka-border pt-6">
                <h4 className="font-semibold text-voka-ink">
                  Everyday greetings
                </h4>

                <p className="mt-2 leading-7 text-voka-muted">
                  Learn what to say, how it sounds and when to use it.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  to="/learn/yoruba"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-voka-green px-6 py-3 text-sm font-semibold text-white hover:bg-voka-green-dark"
                >
                  Start learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
          <section className="mt-24 rounded-[2rem] bg-voka-green-light px-6 py-10 sm:px-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-voka-green">
              Voka is growing
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-voka-ink sm:text-3xl">
              More languages are coming.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-voka-muted">
              Igbo and Hausa are next as we continue building practical ways to
              learn Nigerian languages.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;
