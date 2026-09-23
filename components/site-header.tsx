import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            YR
          </span>
          <span className="text-sm font-semibold tracking-tight">Youth Retreat 2027</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#experience" className="transition-colors hover:text-foreground">
            Experience
          </a>
          <a href="#details" className="transition-colors hover:text-foreground">
            Details
          </a>
        </nav>
        <Button render={<a href="#tickets" />} size="sm">
          Get Tickets
        </Button>
      </div>
    </header>
  )
}
