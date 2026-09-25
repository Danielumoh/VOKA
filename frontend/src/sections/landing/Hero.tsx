import React from "react";
import { ArrowRight, BookOpen, Headphones, Play, Volume2 } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-voka-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: Hero copy */}
          <div className="max-w-2xl">
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-voka-border bg-white px-4 py-2 text-sm font-medium text-voka-green">
              <span className="h-2 w-2 rounded-full bg-voka-orange" />
              Built for Nigerian languages
            </div> */}

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-voka-ink sm:text-6xl lg:text-7xl">
              Learn the language that brings you{" "}
              <span className="text-voka-green">closer to home.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-voka-muted">
              Learn Yoruba, Igbo and Hausa through practical lessons, native
              pronunciation and everyday conversations you can actually use.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#languages"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-voka-green px-6 py-3.5 text-sm font-semibold text-white hover:bg-voka-green-dark"
              >
                Start learning
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-voka-border bg-white px-6 py-3.5 text-sm font-semibold text-voka-ink hover:bg-voka-green-light"
              >
                <Play className="h-4 w-4 text-voka-green" />
                See how it works
              </a>
            </div>

            {/* Languages */}
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-voka-muted">
              <span className="font-medium text-voka-ink">Start with</span>

              <span>Yoruba</span>
              <span className="h-1 w-1 rounded-full bg-voka-orange" />
              <span>Igbo</span>
              <span className="h-1 w-1 rounded-full bg-voka-orange" />
              <span>Hausa</span>
            </div>
          </div>

          {/* RIGHT: Product preview */}
          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto">
            {/* Decorative background */}
            <div className="absolute -inset-8 -z-10 rounded-full bg-voka-green-light/70 blur-3xl" />

            <div className="rounded-[2rem] border border-voka-border bg-white p-3 shadow-xl shadow-black/5">
              {/* Fake application header */}
              <div className="flex items-center justify-between border-b border-voka-border px-5 py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-voka-muted">
                    Yoruba · Beginner
                  </p>

                  <p className="mt-1 font-semibold text-voka-ink">
                    Your learning journey
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-voka-green-light">
                  <BookOpen className="h-5 w-5 text-voka-green" />
                </div>
              </div>

              {/* Lesson content */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-voka-orange">
                      Lesson 04
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-voka-ink">
                      Everyday greetings
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-voka-green-light px-3 py-1.5 text-xs font-semibold text-voka-green">
                    <Headphones className="h-3.5 w-3.5" />
                    Listening
                  </div>
                </div>

                {/* Vocabulary card */}
                <div className="mt-7 rounded-2xl bg-voka-cream p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-3xl font-bold tracking-tight text-voka-ink">
                        Ẹ káàrọ̀
                      </p>

                      <p className="mt-2 text-sm text-voka-muted">
                        Good morning
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label="Play pronunciation"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-voka-green text-white hover:bg-voka-green-dark"
                    >
                      <Volume2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-6 border-t border-voka-border pt-4">
                    <p className="text-xs leading-5 text-voka-muted">
                      Used as a respectful morning greeting in Yoruba.
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-7">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-voka-ink">
                      Lesson progress
                    </span>

                    <span className="font-semibold text-voka-green">72%</span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-voka-green-light">
                    <div className="h-full w-[72%] rounded-full bg-voka-green" />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-voka-ink px-5 py-3.5 text-sm font-semibold text-white hover:bg-voka-green"
                >
                  Continue lesson
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
