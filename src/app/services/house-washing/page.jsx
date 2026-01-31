import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'House Washing in Williamsport PA | Soft Wash Siding Cleaning',
  description:
    'Professional house washing and soft wash services in Williamsport and Central PA. Safe cleaning for vinyl, brick, stucco, and more. Free estimates.',
}

function WhySection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Why Soft Washing"
        title="The safe way to clean your home"
        invert
      >
        <p>
          High-pressure washing can damage siding, void warranties, and force water
          where it doesn't belong. We use a better method.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Low Pressure" invert>
            Our soft wash process uses about the same pressure as a garden hose,
            eliminating the risk of damage to your siding, paint, or trim.
          </GridListItem>
          <GridListItem title="Kills at the Root" invert>
            Professional cleaning solutions don't just remove algae and mold — they
            kill it at the source so your house stays cleaner, longer.
          </GridListItem>
          <GridListItem title="Warranty Safe" invert>
            Soft washing is the manufacturer-recommended cleaning method for most
            siding types including vinyl, Hardie board, and stucco.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function WhatWeClean() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          What we clean
        </h2>
      </FadeIn>
      <List className="mt-10">
        <ListItem title="Siding">
          Vinyl, aluminum, wood, Hardie board, stucco, brick, and painted surfaces.
          We adjust our process for each material type.
        </ListItem>
        <ListItem title="Soffits & Fascia">
          Often the dirtiest parts of your home's exterior. We treat the entire
          roofline area for a complete transformation.
        </ListItem>
        <ListItem title="Trim & Shutters">
          Window trim, door frames, and decorative shutters get detailed attention
          as part of every house wash.
        </ListItem>
        <ListItem title="Foundation & Entry">
          We treat the foundation line where algae and mildew love to grow, plus
          front porches and entryways.
        </ListItem>
      </List>
    </Container>
  )
}

function Process() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="What to expect"
        title="Our house washing process"
      >
        <p>
          From quote to cleanup, we make the process simple and straightforward.
          No surprises, no upsells — just clean results.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Pre-inspection">
            We walk the property with you, note any concerns, and explain exactly
            what we'll be doing.
          </GridListItem>
          <GridListItem title="Plant Protection">
            Landscaping, flowers, and shrubs get pre-soaked and covered as needed.
            We protect what matters to you.
          </GridListItem>
          <GridListItem title="Soft Wash Application">
            Our cleaning solution is applied at low pressure and allowed to dwell,
            breaking down dirt, algae, and mold.
          </GridListItem>
          <GridListItem title="Thorough Rinse">
            Everything gets rinsed completely — siding, windows, plants, walkways.
            No residue left behind.
          </GridListItem>
          <GridListItem title="Final Walkthrough">
            We walk the property with you again to make sure everything looks right
            before we leave.
          </GridListItem>
          <GridListItem title="Before & After Photos">
            On request, we document the transformation so you can see the difference
            and share with others.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function ServiceArea() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Service area
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          We provide house washing services throughout Central Pennsylvania, including
          Williamsport, Montoursville, Jersey Shore, South Williamsport, Muncy,
          Hughesville, Lock Haven, and surrounding communities. Not sure if we cover
          your area? Just ask — we're happy to accommodate when we can.
        </p>
      </FadeIn>
      <FadeIn className="mt-10">
        <TagList>
          <TagListItem>Williamsport</TagListItem>
          <TagListItem>Montoursville</TagListItem>
          <TagListItem>Jersey Shore</TagListItem>
          <TagListItem>South Williamsport</TagListItem>
          <TagListItem>Muncy</TagListItem>
          <TagListItem>Hughesville</TagListItem>
          <TagListItem>Lock Haven</TagListItem>
          <TagListItem>Mill Hall</TagListItem>
        </TagList>
      </FadeIn>
    </Container>
  )
}

/* ✅ NEW — LOCATION BUTTON SECTION (TIER-1) */
function LocationLinks() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="House Washing by Location"
        title="View localized house washing services"
      >
        <p>
          Select your city below to learn more about our house washing services in
          your area.
        </p>
      </SectionIntro>

      <FadeInStagger className="mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Button href="/services/house-washing/williamsport" className="justify-center">
            Williamsport
          </Button>
          <Button href="/services/house-washing/state-college" className="justify-center">
            State College
          </Button>
          <Button href="/services/house-washing/sunbury" className="justify-center">
            Sunbury
          </Button>
          <Button href="/services/house-washing/lewisburg" className="justify-center">
            Lewisburg
          </Button>
          <Button href="/services/house-washing/lock-haven" className="justify-center">
            Lock Haven
          </Button>
          <Button href="/services/house-washing/bloomsburg" className="justify-center">
            Bloomsburg
          </Button>
        </div>
      </FadeInStagger>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ready to make your house look new again?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Text or call for the fastest quote. Include your address and a few photos
            of what needs cleaning.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="tel:+15703377440" invert>
              Call (570) 337-7440
            </Button>
            <Button href="/contact" invert>
              Request a Quote
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export default function HouseWashingPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Back to Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="House Washing"
        title="Make your siding look brand new — without the damage."
      >
        <p>
          Our soft wash process safely removes years of algae, mold, mildew, and grime
          from your home's exterior. No high pressure, no damage, no streaks.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="100%" label="Soft wash safe" />
          <StatListItem value="2-3 yr" label="Results last" />
          <StatListItem value="Same day" label="Quotes available" />
        </StatList>
      </Container>

      <WhySection />
      <WhatWeClean />
      <Process />
      <ServiceArea />

      {/* ✅ INSERTED — DOES NOT REPLACE ANYTHING */}
      <LocationLinks />

      <CTA />

      <ContactSection />
    </RootLayout>
  )
}