export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who it&apos;s for</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Made for youth and young people
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            The Annual Youth Retreat 2027 is a space to step away from the everyday and draw closer to God and one
            another. Over three days you&apos;ll experience prayer, worship, and biblical teaching alongside genuine
            fellowship, honest life discussions, and time to simply have fun.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Whether you come with friends or on your own, you&apos;ll leave encouraged, connected, and spiritually
            refreshed.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src="/retreat-fellowship.png"
            alt="Young people laughing and sitting together in a circle outdoors during the retreat"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
