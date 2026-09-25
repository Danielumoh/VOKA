import React from "react";
import { Heart, Languages } from "lucide-react";

export const Vision: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-voka-green py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Statement */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-voka-orange-light">
              More than learning
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Our languages carry stories worth keeping alive.
            </h2>
          </div>

          {/* Vision */}
          <div>
            <p className="text-lg leading-8 text-white/80">
              Nigeria is home to hundreds of languages, each carrying
              generations of history, humour, identity and culture.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Voka's long-term vision is to make Nigerian languages easier to
              learn, practise, teach and preserve through technology — wherever
              learners happen to be.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <Languages className="h-5 w-5 text-voka-orange-light" />

                <p className="mt-4 font-semibold">Built around our languages</p>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Starting with Yoruba, Igbo and Hausa, with room to grow.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <Heart className="h-5 w-5 text-voka-orange-light" />

                <p className="mt-4 font-semibold">Connected to culture</p>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  Because learning a language also means understanding the
                  people and context behind it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
