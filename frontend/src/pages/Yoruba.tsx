import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Lock } from "lucide-react";

import { Navbar } from "../sections/landing/Navbar";
import { Footer } from "../sections/landing/Footer";

const lessons = [
  {
    id: 1,
    title: "Everyday Greetings",
    description:
      "Learn how to greet people in Yoruba and understand when to use common greetings.",
    available: true,
    duration: "5 min",
  },
  {
    id: 2,
    title: "Introducing Yourself",
    description:
      "Learn how to introduce yourself and start simple conversations.",
    available: false,
    duration: "7 min",
  },
  {
    id: 3,
    title: "Numbers and Counting",
    description:
      "Learn basic Yoruba numbers and how to use them in everyday situations.",
    available: false,
    duration: "6 min",
  },
];

const Yoruba = () => {
  return (
    <div className="min-h-screen bg-voka-cream text-voka-ink">
      <Navbar />

      <main className="px-4 pb-24 pt-32 sm:px-6 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          {/* Back navigation */}
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-sm font-medium text-voka-muted hover:text-voka-green"
          >
            <ArrowLeft className="h-4 w-4" />
            All languages
          </Link>

          {/* Page introduction */}
          <section className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-voka-orange">
              Yoruba · Beginner
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Learn Yoruba.
              <span className="block text-voka-green">
                One conversation at a time.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-voka-muted">
              Start with everyday expressions, build your vocabulary, and
              gradually develop the confidence to speak Yoruba.
            </p>
          </section>

          {/* Course lessons */}
          <section className="mt-20 max-w-4xl">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-voka-orange">
                Your learning journey
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Beginner lessons
              </h2>

              <p className="mt-3 text-voka-muted">
                Start with the basics and build your skills lesson by lesson.
              </p>
            </div>

            <div className="grid gap-6">
              {lessons.map((lesson) => {
                return (
                  <article
                    key={lesson.id}
                    className="rounded-2xl border border-voka-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 sm:p-8"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex gap-4">
                        {/* Lesson icon */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-voka-green-light">
                          {lesson.available ? (
                            <BookOpen className="h-6 w-6 text-voka-green" />
                          ) : (
                            <Lock className="h-5 w-5 text-voka-muted" />
                          )}
                        </div>

                        {/* Lesson information */}
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-voka-orange">
                            Lesson {String(lesson.id).padStart(2, "0")}
                          </p>

                          <h3 className="mt-2 text-xl font-bold text-voka-ink">
                            {lesson.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-sm leading-7 text-voka-muted">
                            {lesson.description}
                          </p>

                          <p className="mt-4 text-xs font-medium text-voka-muted">
                            {lesson.duration} · Beginner
                          </p>
                        </div>
                      </div>

                      {/* Lesson action */}
                      <div className="shrink-0">
                        {lesson.available ? (
                          <Link
                            to={`/learn/yoruba/lesson/${lesson.id}`}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-voka-green px-5 py-3 text-sm font-semibold text-white hover:bg-voka-green-dark"
                          >
                            Start lesson
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-voka-green-light px-4 py-2 text-sm font-medium text-voka-muted">
                            <Lock className="h-3.5 w-3.5" />
                            Coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Closing section */}
          <section className="mt-20 max-w-4xl rounded-3xl bg-voka-green-light p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-voka-green">
              Small steps, real progress
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Every word brings you closer.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-voka-muted">
              Learning a language takes practice. Start with simple expressions,
              repeat what you learn, and keep building your confidence.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Yoruba;
