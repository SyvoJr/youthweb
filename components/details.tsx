import { CalendarDays, MapPin, Users } from "lucide-react"

const details = [
  {
    icon: CalendarDays,
    label: "When",
    value: "July 31 – August 3rd, 2027",
  },
  {
    icon: MapPin,
    label: "Where",
    value: "IMJC",
  },
  {
    icon: Users,
    label: "Who",
    value: "Youth & young people",
  },
]

export function Details() {
  return (
    <section id="details" className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">The details</p>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          Mark your calendar
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {details.map((item) => (
          <div key={item.label} className="rounded-2xl border border-border bg-card p-8 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <item.icon className="h-6 w-6" />
            </span>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
            <p className="mt-1 text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
