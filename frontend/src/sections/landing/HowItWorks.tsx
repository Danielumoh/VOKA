import React from "react";
import {
  Languages,
  BookOpenCheck,
  MessageSquareText,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Languages,
    title: "Choose your language",
    description:
      "Start with Yoruba, Igbo or Hausa and follow a learning path built for your level.",
  },
  {
    number: "02",
    icon: BookOpenCheck,
    title: "Learn in context",
    description:
      "Work through short lessons built around vocabulary, pronunciation and everyday situations.",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Practice what you learn",
    description:
      "Strengthen your understanding with listening exercises, conversations and practical activities.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Build real progress",
    description:
      "Complete lessons, revisit difficult topics and keep moving forward through your learning journey.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="bg-voka-cream py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-voka-orange">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl lg:text-5xl">
            A simple path from{" "}
            <span className="text-voka-green">learning to speaking.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-voka-muted">
            Voka breaks language learning into practical steps so you can build
            confidence without feeling overwhelmed.
          </p>
        </div>

        {/* Learning steps */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-voka-border bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-voka-green-light transition-colors group-hover:bg-voka-green">
                    <Icon className="h-5 w-5 text-voka-green transition-colors group-hover:text-white" />
                  </div>

                  <span className="text-sm font-bold text-voka-orange">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-voka-ink">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-voka-muted">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Learning flow */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-sm font-semibold text-voka-green sm:flex-row sm:gap-5">
          <span>Learn</span>
          <ArrowRight className="hidden h-4 w-4 sm:block" />

          <span>Listen</span>
          <ArrowRight className="hidden h-4 w-4 sm:block" />

          <span>Practice</span>
          <ArrowRight className="hidden h-4 w-4 sm:block" />

          <span>Speak</span>
        </div>
      </div>
    </section>
  );
};
