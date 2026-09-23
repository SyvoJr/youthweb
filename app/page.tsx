import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhatHappens } from "@/components/what-happens"
import { Details } from "@/components/details"
import { Tickets } from "@/components/tickets"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <WhatHappens />
        <Details />
        <Tickets />
      </main>
      <SiteFooter />
    </div>
  )
}
