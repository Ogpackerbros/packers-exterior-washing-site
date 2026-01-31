import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Pressure Washing Selinsgrove PA | House Washing & Roof Cleaning',
  description:
    'Professional pressure washing services in Selinsgrove, PA. House washing, roof cleaning, concrete cleaning, and more. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Services"
        title="Complete exterior cleaning for Selinsgrove properties"
        invert
      >
        <p>
          From residential neighborhoods to rental properties near Susquehanna
          University, we provide reliable, professional exterior cleaning.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="House Washing" invert>
            Soft wash cleaning safe for all siding types. We remove algae,
            mold, and grime without damage.
          </GridListItem>
          <GridListItem title="Roof Cleaning" invert>
            Low-pressure treatments that eliminate black streaks while
            protecting shingles.
          </GridListItem>
          <GridListItem title="Concrete Cleaning" invert>
            Driveways, sidewalks, and patios cleaned evenly with commercial
            surface equipment.
          </GridListItem>
          <GridListItem title="Deck & Fence Cleaning" invert>
            Restore wood and composite surfaces before staining or sealing.
          </GridListItem>
          <GridListItem title="Gutter Cleaning" invert>
            Full gutter cleanouts and exterior brightening available.
          </GridListItem>
          <GridListItem title="Commercial Services" invert>
            Apartment buildings, offices, and campus-area properties.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function WhyUs() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Familiar with Selinsgrove homes
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Selinsgrove’s mix of river humidity, mature trees, and older housing
            means exterior surfaces need regular care. We understand how to
            clean safely without damaging siding or roofing.
          </p>
          <p>
            We’re frequently in Snyder County, making scheduling easy and
            allowing us to bundle service routes for better pricing.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function Areas() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Coverage Area"
        title="Selinsgrove and surrounding communities"
      >
        <p>
          We service Selinsgrove and nearby Snyder County areas.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Selinsgrove Borough">
            Residential neighborhoods and rental properties throughout town.
          </GridListItem>
          <GridListItem title="Shamokin Dam">
            Homes and commercial properties just minutes away.
          </GridListItem>
          <GridListItem title="Sunbury">
            Riverfront properties and nearby neighborhoods.
          </GridListItem>
          <GridListItem title="Middleburg">
            Rural and residential properties throughout the area.
          </GridListItem>
          <GridListItem title="Lewisburg">
            Easy drive across the river. Regular service availability.
          </GridListItem>
          <GridListItem title="Snyder County">
            Surrounding townships and rural properties.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ready to get started in Selinsgrove?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Call or text for a fast, no-obligation quote.
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

export default function SelinsgrovePage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link href="/service-areas" className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
            ← All Service Areas
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Selinsgrove, PA"
        title="Professional pressure washing in Selinsgrove, PA."
      >
        <p>
          House washing, roof cleaning, and exterior cleaning services for
          Selinsgrove homes and businesses.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="35 min" label="From Williamsport" />
          <StatListItem value="Same day" label="Quotes available" />
          <StatListItem value="Local" label="Owned & operated" />
        </StatList>
      </Container>

      <Services />
      <WhyUs />
      <Areas />
      <CTA />
      <ContactSection />
    </RootLayout>
  )
}