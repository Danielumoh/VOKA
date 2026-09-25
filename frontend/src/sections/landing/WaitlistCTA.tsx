import React from "react";
import { ArrowRight, Mail } from "lucide-react";

export const WaitlistCTA: React.FC = () => {
  return (
    <section id="waitlist" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-voka-cream px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative shapes */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-voka-green-light" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-voka-orange-light/70" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-voka-green-light">
              <Mail className="h-5 w-5 text-voka-green" />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-voka-orange">
              Join the journey
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-voka-ink sm:text-4xl lg:text-5xl">
              Be among the first to{" "}
              <span className="text-voka-green">learn with Voka.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-voka-muted">
              Voka is being built to make Nigerian languages easier to learn,
              practise and carry into everyday life.
            </p>

            {/* Waitlist form */}
            <form
              className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>

              <input
                id="waitlist-email"
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-full border border-voka-border bg-white px-5 py-3.5 text-sm text-voka-ink outline-none placeholder:text-voka-muted focus:border-voka-green focus:ring-2 focus:ring-voka-green/10"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-voka-green px-6 py-3.5 text-sm font-semibold text-white hover:bg-voka-green-dark"
              >
                Join waitlist
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 text-xs text-voka-muted">
              Product updates only. No unnecessary noise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
