import React from "react";
import { MessageCircle, Headphones, MapPin } from "lucide-react";

const reasons = [
  {
    icon: MessageCircle,
    title: "Speak for real life",
    description:
      "Learn the words, phrases and conversations you can actually use with family, friends and people around you.",
  },
  {
    icon: Headphones,
    title: "Hear how it is spoken",
    description:
      "Build confidence with native pronunciation and listening practice instead of learning from text alone.",
  },
  {
    icon: MapPin,
    title: "Learn the culture too",
    description:
      "Understand the context behind expressions, greetings and everyday communication — not just their translations.",
  },
];

export const Problem: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-voka-orange">
            Why Voka
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl lg:text-5xl">
            A language is more than{" "}
            <span className="text-voka-green">words on a screen.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-voka-muted">
            Voka is designed around how Nigerian languages are actually heard,
            spoken and used in everyday life.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-3xl border border-voka-border bg-voka-cream p-7 transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-voka-green-light">
                  <Icon className="h-5 w-5 text-voka-green" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-voka-ink">
                  {reason.title}
                </h3>

                <p className="mt-3 leading-7 text-voka-muted">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Supporting statement */}
        <div className="mt-14 rounded-3xl bg-voka-green px-6 py-8 sm:px-10 sm:py-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="max-w-3xl text-xl font-semibold leading-8 text-white sm:text-2xl">
              From greeting an elder correctly to following a conversation with
              family, Voka focuses on language you can carry into real life.
            </p>

            <span className="shrink-0 text-sm font-semibold text-white/70">
              Learn • Listen • Speak
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
