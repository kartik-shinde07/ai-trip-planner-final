import {
  Wallet,
  MapPinned,
  Users,
  ShieldCheck,
  Sparkles,
  Plane,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Strict budget cap",
    body: "Lock a per-person or total cap. We allocate transport, stay, food and activities so the total never blows past it.",
  },
  {
    icon: MapPinned,
    title: "AI itinerary engine",
    body: "Day-by-day plans with morning, afternoon and evening picks — including free spots and budget eats.",
  },
  {
    icon: Users,
    title: "Built for groups",
    body: "Solo, couple or squad mode. Add expenses on the go and we settle who owes whom automatically.",
  },
  {
    icon: Sparkles,
    title: "Squeeze My Budget",
    body: "One tap swaps premium picks for top-rated hostels and local transport — and re-balances live.",
  },
  {
    icon: ShieldCheck,
    title: "Honest recommendations",
    body: "No paid placements. We surface the cheapest vs fastest options side-by-side, every time.",
  },
  {
    icon: Plane,
    title: "Anywhere, any currency",
    body: "From Manali to Paris — INR, USD, EUR supported with realistic regional prices.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-coral">
          Why RoamBudget
        </p>

        <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Budget-first. Beautifully planned.
        </h2>

        <p className="mt-3 text-muted-foreground">
          We flip travel planning on its head — your budget is the input, the
          itinerary is the output.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="card-soft group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {feature.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
