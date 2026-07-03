import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Plane } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            AI Budget Engine
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Travel more. <span className="text-coral">Spend smarter.</span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            RoamBudget designs trips that fit your wallet — not the other way
            around. Set a hard cap, pick a vibe, and our AI assembles transport,
            stays and a day-by-day itinerary tuned to the last rupee.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/plan"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              Plan my budget trip
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
            >
              Sign in
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
            {[
              {
                label: "Avg savings",
                value: "32%",
              },
              {
                label: "Destinations",
                value: "180+",
              },
              {
                label: "Trips planned",
                value: "12k",
              },
            ].map((item) => (
              <div key={item.label}>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </dt>

                <dd className="font-display text-2xl font-bold text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right */}
        <div className="relative hidden lg:block">
          <div className="card-soft absolute right-0 top-4 w-[420px] -rotate-2 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Manali · 3D 2N
                </p>

                <p className="font-display text-2xl font-bold text-foreground">
                  ₹14,820{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    / ₹15,000 cap
                  </span>
                </p>
              </div>

              <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                98% used
              </span>
            </div>

            <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-muted">
              <div className="w-[40%] bg-primary"></div>
              <div className="w-[35%] bg-coral"></div>
              <div className="w-[15%] bg-accent"></div>
              <div className="w-[10%] bg-success"></div>
            </div>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Transport · Volvo</span>

                <span className="font-semibold">₹5,920</span>
              </li>

              <li className="flex justify-between">
                <span className="text-muted-foreground">Stay · Zostel</span>

                <span className="font-semibold">₹4,200</span>
              </li>

              <li className="flex justify-between">
                <span className="text-muted-foreground">Food</span>

                <span className="font-semibold">₹2,200</span>
              </li>

              <li className="flex justify-between">
                <span className="text-muted-foreground">Activities</span>

                <span className="font-semibold">₹2,500</span>
              </li>
            </ul>
          </div>

          <div className="card-soft absolute bottom-0 left-4 w-[340px] rotate-3 p-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-coral/15 text-coral">
                <Plane className="h-4 w-4" />
              </span>

              <div>
                <p className="text-sm font-semibold text-foreground">
                  Fastest route
                </p>

                <p className="text-xs text-muted-foreground">
                  IndiGo + Cab · 4h 15m
                </p>
              </div>
            </div>

            <p className="mt-3 font-display text-xl font-bold text-foreground">
              ₹5,400
            </p>

            <p className="text-xs text-muted-foreground">
              vs Volvo ₹1,850 — pick your trade-off.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
