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
  title: 'Commercial Pressure Washing Williamsport PA | Business Exterior Cleaning',
  description:
    'Professional commercial pressure washing in Williamsport, PA. Storefronts, offices, sidewalks, and multi-unit properties cleaned safely and efficiently.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Commercial Pressure Washing"
        title="Keep your Williamsport business looking professional"
        invert
      >
        <p>
          We help businesses in Williamsport maintain clean, safe, and professional
          exteriors with scheduled and one-time commercial cleaning services.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Storefront Cleaning" invert>
            Clean entrances, sidewalks, and facades that create strong first impressions.
          </GridListItem>

          <GridListItem title="Office & Medical Buildings" invert>
            Professional exterior cleaning for client-facing properties.
          </GridListItem>

          <GridListItem title="Apartment & Multi-Unit Properties" invert>
            Sidewalks, breezeways, parking areas, and common spaces.
          </GridListItem>

          <GridListItem title="Sidewalk & Concrete Cleaning" invert>
            Remove gum, stains, and buildup from high-traffic walkways.
          </GridListItem>

          <GridListItem title="Dumpster & Service Areas" invert>
            Sanitary cleaning for waste areas and loading zones.
          </GridListItem>

          <GridListItem title="Flexible Scheduling" invert>
            Early morning, evening, and off-hours service available.
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
          Built for Williamsport businesses
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Williamsport’s foot traffic, seasonal weather, and downtown density
            make routine exterior maintenance essential for businesses.
          </p>

          <p>
            We understand local compliance needs, customer flow, and how to clean
            commercial properties without disrupting operations.
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
        title="Commercial cleaning throughout the Williamsport area"
      >
        <p>
          We provide commercial pressure washing services throughout the greater
          Williamsport region.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="South Williamsport" />
          <GridListItem title="Montoursville" />
          <GridListItem title="Jersey Shore" />
          <GridListItem title="Muncy" />
          <GridListItem title="Hughesville" />
          <GridListItem title="Central PA" />
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
            Get a commercial cleaning quote in Williamsport
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Reliable service, flexible scheduling, and professional results.
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

export default function CommercialWilliamsportPage() {
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
        eyebrow="Williamsport, PA"
        title="Commercial pressure washing in Williamsport, PA"
      >
        <p>
          Exterior cleaning services designed for businesses, property managers,
          and commercial facilities.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Flexible" label="Scheduling" />
          <StatListItem value="Professional" label="Equipment & process" />
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