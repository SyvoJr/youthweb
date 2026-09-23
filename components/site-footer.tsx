export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-10 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          YR
        </span>
        <p className="text-sm font-semibold">Annual Youth Retreat 2027</p>
        <p className="text-sm text-muted-foreground">July 31 – August 3rd, 2027 · IMJC</p>
        <p className="mt-4 text-xs text-muted-foreground">
          © 2027 Annual Youth Retreat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
