import Link from 'next/link'

import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Commercial Pressure Washing Lewisburg PA | Business Exterior Cleaning',
  description:
    'Professional commercial pressure washing in Lewisburg, PA. Storefronts, offices, sidewalks, and multi-unit properties cleaned safely and efficiently. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Commercial Pressure Washing"
        title="Keep your Lewisburg property clean, safe, and professional"
        invert
      >
        <p>
          From downtown storefronts to offices and apartment properties, we help
          Lewisburg businesses maintain clean exteriors that customers notice.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Storefront & Entryway Cleaning" invert>
            High-traffic entrances collect grime fast. We clean sidewalks, storefront
            approaches, and entrances for strong first impressions.
          </GridListItem>

          <GridListItem title="Office & Professional Buildings" invert>
            Client-facing properties need to look sharp. We clean exterior surfaces,
            walkways, and common areas without disrupting business.
          </GridListItem>

          <GridListItem title="Apartments & Multi-Unit Properties" invert>
            Breezeways, sidewalks, stairwells, and common spaces cleaned to improve
            curb appeal and tenant satisfaction.
          </GridListItem>

          <GridListItem title="Sidewalk & Concrete Restoration" invert>
            We remove stains, organic buildup, and embedded grime from concrete and
            hardscape surfaces.
          </GridListItem>

          <GridListItem title="Dumpster & Service Areas" invert>
            Sanitary cleaning for dumpster pads, loading zones, and service corridors
            where odors and buildup become a problem.
          </GridListItem>

          <GridListItem title="Off-Hours Scheduling" invert>
            Early morning and evening availability to reduce disruption—perfect for
            busy storefronts and professional offices.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function WhyLocal() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Built for Lewisburg businesses
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lewisburg’s walkable downtown, seasonal traffic, and shaded sidewalks
            make exterior buildup happen faster than most people realize—especially
            around entrances and storefronts.
          </p>

          <p>
            We’re local to Central PA, so we understand how quickly algae and grime
            build up here, and we clean commercial spaces in a way that keeps your
            property looking professional without getting in your way.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function Areas() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Nearby Service Areas"
        title="Commercial cleaning throughout the Lewisburg area"
      >
        <p>
          In addition to Lewisburg, we provide commercial pressure washing for nearby
          communities and business corridors.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Milton">
            Commercial properties, sidewalks, and storefront areas.
          </GridListItem>
          <GridListItem title="Mifflinburg">
            Office buildings, small businesses, and multi-unit properties.
          </GridListItem>
          <GridListItem title="Selinsgrove">
            Retail corridors, restaurants, and high-traffic concrete.
          </GridListItem>
          <GridListItem title="New Columbia">
            Industrial and commercial properties along main routes.
          </GridListItem>
          <GridListItem title="Winfield">
            Property managers and small business exterior cleaning.
          </GridListItem>
          <GridListItem title="Central PA">
            If you’re close, ask—odds are we already service your area.
          </GridListItem>
        </GridList>
      </Container>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get a commercial cleaning quote in Lewisburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Fast quotes, flexible scheduling, and results you’ll be proud to put your name on.
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

export default function CommercialLewisburgPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/commercial-pressure-washing"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Commercial Pressure Washing
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Lewisburg, PA"
        title="Commercial pressure washing in Lewisburg, PA"
      >
        <p>
          Professional exterior cleaning for storefronts, offices, and multi-unit
          properties—built around your schedule.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Flexible" label="Off-hours scheduling" />
          <StatListItem value="Professional" label="Commercial-grade results" />
          <StatListItem value="Local" label="Central PA based" />
        </StatList>
      </Container>

      <Services />
      <WhyLocal />
      <Areas />
      <CTA />

      <ContactSection />
    </RootLayout>
  )
}