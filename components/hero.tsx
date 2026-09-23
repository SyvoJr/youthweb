import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src="/retreat-hero.png"
        alt="Young people worshipping together at an outdoor summer retreat at golden hour"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 py-28 text-center sm:py-36">
        <span className="mb-5 inline-flex items-center rounded-full border border-primary/60 bg-primary/15 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          Annual Youth Retreat
        </span>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
          AWAKEN. ENCOUNTER. BECOME.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg text-white/85">
          Join us for the Annual Youth Retreat 2027 — three days of worship, teaching, fellowship, and spiritual
          encounter for youth and young people.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 text-sm text-white/90 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            July 31 – August 3rd, 2027
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            IMJC
          </span>
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button render={<a href="#tickets" />} nativeButton={false} size="lg">
            Get Your Ticket
          </Button>
          <Button
            render={<a href="#about" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
