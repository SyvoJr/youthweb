import {
  HandHeart,
  Music,
  BookOpen,
  Users,
  Puzzle,
  MessageCircle,
  MessagesSquare,
  Gamepad2,
  Sparkles,
} from "lucide-react"

const activities = [
  { icon: HandHeart, title: "Prayer", description: "Set-apart time to seek God together." },
  { icon: Music, title: "Worship", description: "Lift your voice in praise and adoration." },
  { icon: BookOpen, title: "Biblical Teaching", description: "Grounded, practical teaching from the Word." },
  { icon: Users, title: "Fellowship", description: "Build real friendships and community." },
  { icon: Puzzle, title: "Team Building", description: "Grow together through shared challenges." },
  { icon: MessageCircle, title: "Testimonies", description: "Hear how God is moving in real lives." },
  { icon: MessagesSquare, title: "Life Discussions", description: "Honest conversations that matter." },
  { icon: Gamepad2, title: "Games", description: "Laughter, fun, and friendly competition." },
  { icon: Sparkles, title: "Spiritual Encounters", description: "Space to meet with God personally." },
]

export function WhatHappens() {
  return (
    <section id="experience" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">What happens</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything packed into the weekend
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A full experience designed to feed your faith, deepen friendships, and create lasting memories.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
