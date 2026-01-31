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
  title: 'Pressure Washing Mill Hall PA | House Washing & Roof Cleaning',
  description:
    'Professional pressure washing services in Mill Hall, PA. House washing, roof cleaning, concrete cleaning, and more. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Services"
        title="Complete exterior cleaning for Mill Hall properties"
        invert
      >
        <p>
          Professional cleaning services for homes and businesses throughout
          Mill Hall and the surrounding Clinton County area.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="House Washing" invert>
            Soft wash cleaning that's safe for all siding types. We remove years
            of algae, mold, and grime without damage.
          </GridListItem>
          <GridListItem title="Roof Cleaning" invert>
            Black streaks gone, shingles protected. Our low-pressure treatment
            kills algae at the root for results that last.
          </GridListItem>
          <GridListItem title="Concrete Cleaning" invert>
            Driveways, sidewalks, patios — cleaned with commercial surface
            equipment for even, stripe-free results.
          </GridListItem>
          <GridListItem title="Deck & Fence Cleaning" invert>
            Restore weathered wood and composite surfaces. Perfect before
            staining or just to look great again.
          </GridListItem>
          <GridListItem title="Gutter Cleaning" invert>
            Remove debris and brighten oxidized gutters. We clean inside and
            out for complete results.
          </GridListItem>
          <GridListItem title="Commercial Services" invert>
            Local businesses and commercial properties. Flexible scheduling
            to fit your needs.
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
          Right on our route
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Mill Hall sits right on Route 220 between Jersey Shore and Lock Haven,
            which means we pass through regularly. It's easy for us to schedule
            service in Mill Hall alongside our other Clinton County work.
          </p>
          <p>
            Whether you're in the borough or out in the surrounding township
            areas, we're happy to provide a quote and get your property looking
            its best.
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
        title="Mill Hall and surrounding areas"
      >
        <p>
          We service Mill Hall borough and the surrounding Clinton County
          communities.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Mill Hall Borough">
            All neighborhoods throughout the borough. Residential and
            commercial properties alike.
          </GridListItem>
          <GridListItem title="Bald Eagle Township">
            The surrounding township areas. Rural properties and
            country homes.
          </GridListItem>
          <GridListItem title="Lock Haven">
            Just up the road. We service Lock Haven and Mill Hall
            on the same trips.
          </GridListItem>
          <GridListItem title="Flemington">
            Nearby in Clinton County. Part of our regular service
            territory.
          </GridListItem>
          <GridListItem title="Beech Creek">
            Down toward I-80. We're happy to service properties
            in the Beech Creek area.
          </GridListItem>
          <GridListItem title="Jersey Shore">
            Our home base down Route 220. Mill Hall is an easy
            drive from Jersey Shore.
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
            Ready to get started in Mill Hall?
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Text or call for a fast quote. We'll get back to you the same day.
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

export default function MillHallPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/service-areas"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            All Service Areas
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Mill Hall, PA"
        title="Professional pressure washing in Mill Hall and Bald Eagle Township."
      >
        <p>
          House washing, roof cleaning, and complete exterior cleaning services for
          Mill Hall homes and businesses. Local team, quality results.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="15 min" label="From Jersey Shore" />
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
