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
  title: 'Pressure Washing State College PA | House Washing & Roof Cleaning',
  description:
    'Professional pressure washing services in State College, PA. House washing, roof cleaning, concrete cleaning, and more. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Services"
        title="Exterior cleaning for State College homes and rentals"
        invert
      >
        <p>
          From single-family homes to student rentals and townhomes, we provide
          dependable exterior cleaning throughout the State College area.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="House Washing" invert>
            Safe soft-wash cleaning for siding, stucco, and brick homes.
          </GridListItem>
          <GridListItem title="Roof Cleaning" invert>
            Low-pressure treatments that remove streaks without damaging shingles.
          </GridListItem>
          <GridListItem title="Concrete Cleaning" invert>
            Driveways, sidewalks, and patios cleaned evenly and professionally.
          </GridListItem>
          <GridListItem title="Deck & Fence Cleaning" invert>
            Restore wood and composite surfaces before staining or sealing.
          </GridListItem>
          <GridListItem title="Gutter Cleaning" invert>
            Debris removal and exterior gutter brightening available.
          </GridListItem>
          <GridListItem title="Rental Turnovers" invert>
            Ideal for landlords, property managers, and student housing.
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
          Built for the State College market
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            State College properties see heavy use from rentals, student housing,
            and seasonal turnover. We know how to clean efficiently while protecting
            surfaces.
          </p>
          <p>
            Our flexible scheduling works well for move-outs, inspections, and
            HOA requirements.
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
        title="State College and surrounding communities"
      >
        <p>
          We service State College and nearby Centre County areas.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="State College Borough">
            Residential neighborhoods and student housing.
          </GridListItem>
          <GridListItem title="College Township">
            Homes and rental properties throughout the area.
          </GridListItem>
          <GridListItem title="Ferguson Township">
            Suburban neighborhoods and townhomes.
          </GridListItem>
          <GridListItem title="Patton Township">
            Residential developments and HOAs.
          </GridListItem>
          <GridListItem title="Boalsburg">
            Historic homes and nearby properties.
          </GridListItem>
          <GridListItem title="Bellefonte">
            Quick drive north. Regular service availability.
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
            Need pressure washing in State College?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Call or text for fast scheduling and clear pricing.
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

export default function StateCollegePage() {
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
        eyebrow="State College, PA"
        title="Professional pressure washing in State College."
      >
        <p>
          Exterior cleaning services for homes, rentals, and businesses
          throughout State College and Centre County.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="1 hr" label="From Williamsport" />
          <StatListItem value="Same day" label="Quotes available" />
          <StatListItem value="Insured" label="Professional service" />
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