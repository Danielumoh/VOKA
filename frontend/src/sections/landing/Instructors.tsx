import React from "react";
import { BadgeCheck, MessagesSquare, Users, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Native knowledge",
    description:
      "Learn pronunciation, expressions and context from people who understand how the language is actually spoken.",
  },
  {
    icon: MessagesSquare,
    title: "Real conversation",
    description:
      "Move beyond memorising words and build confidence through practical, human conversation.",
  },
  {
    icon: Users,
    title: "A place for instructors",
    description:
      "Voka is being designed to eventually connect learners with native speakers and language instructors.",
  },
];

export const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="bg-voka-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-voka-orange">
              Human learning
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl lg:text-5xl">
              Learn with people who know the language{" "}
              <span className="text-voka-green">beyond the textbook.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-voka-muted">
              Language carries tone, culture and context. As Voka grows, native
              speakers and instructors will help learners understand the things
              a translation alone cannot teach.
            </p>

            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-voka-green hover:text-voka-green-dark"
            >
              Interested in teaching on Voka?
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="flex gap-5 rounded-3xl border border-voka-border bg-white p-6 sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-voka-green-light">
                    <Icon className="h-5 w-5 text-voka-green" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-voka-orange">
                        0{index + 1}
                      </span>

                      <h3 className="text-lg font-bold text-voka-ink">
                        {benefit.title}
                      </h3>
                    </div>

                    <p className="mt-2 leading-7 text-voka-muted">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
