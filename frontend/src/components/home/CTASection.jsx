import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="card-soft relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground sm:p-12">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
              AI Powered Planning
            </p>

            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Your next trip,
              <br />
              planned in under <span className="text-coral">60 seconds.</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-primary-foreground/80">
              Tell us where you want to go, when you're travelling and your
              total budget. Our AI instantly builds your complete itinerary,
              hotels, transport and daily expenses.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            <Link
              to="/plan"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              Start Planning
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/auth"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/20"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
