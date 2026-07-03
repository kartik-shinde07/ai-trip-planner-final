export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} RoamBudget · Travel & Trust
      </div>
    </footer>
  );
}
