import { NavLink, Link } from "react-router-dom";
import { Compass, LogIn } from "lucide-react";

function Navbar() {
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Compass className="h-5 w-5" />
          </span>

          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            RoamBudget
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-foreground"
                : "text-muted-foreground transition hover:text-foreground"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/plan"
            className={({ isActive }) =>
              isActive
                ? "text-foreground"
                : "text-muted-foreground transition hover:text-foreground"
            }
          >
            Plan a Trip
          </NavLink>

          <NavLink
            to="/trip"
            className={({ isActive }) =>
              isActive
                ? "text-foreground"
                : "text-muted-foreground transition hover:text-foreground"
            }
          >
            My Itinerary
          </NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {token ? (
            <button
              onClick={handleLogout}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <LogIn className="h-4 w-4" />
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
