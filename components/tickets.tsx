"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, CalendarDays, MapPin } from "lucide-react"

export function Tickets() {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="tickets" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Register online</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Get your ticket</h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Reserve your spot for the Annual Youth Retreat 2027. Fill in your details below and we&apos;ll hold your
              ticket for the weekend.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <CalendarDays className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-medium">July 31 – August 3rd, 2027</span>
                  <br />
                  <span className="text-muted-foreground">Friday to Monday</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-medium">IMJC</span>
                  <br />
                  <span className="text-muted-foreground">Retreat venue</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">You&apos;re registered!</h3>
                <p className="mt-2 text-pretty text-muted-foreground">
                  {name ? `Thanks, ${name}. ` : ""}Your ticket for the Annual Youth Retreat 2027 is reserved. See you
                  July 31st at IMJC!
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
                  Register another person
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="Your phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" name="age" type="number" min={1} required placeholder="Your age" />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Reserve My Ticket
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Free registration. We&apos;ll be in touch with confirmation details.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
