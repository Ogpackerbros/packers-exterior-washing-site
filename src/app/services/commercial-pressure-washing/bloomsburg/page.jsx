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
  title: 'Commercial Pressure Washing Bloomsburg PA | Business Exterior Cleaning',
  description:
    'Professional commercial pressure washing in Bloomsburg, PA. Sidewalks, storefronts, apartments, and commercial properties cleaned safely and efficiently.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Commercial Pressure Washing"
        title="Commercial exterior cleaning for Bloomsburg businesses"
        invert
      >
        <p>
          From downtown storefronts to apartment complexes and campus-area properties,
          we help Bloomsburg businesses maintain clean, professional exteriors.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Storefront & Sidewalk Cleaning" invert>
            Heavy foot traffic and shade cause fast buildup. We clean entrances and
            sidewalks to keep them safe and presentable.
          </GridListItem>

          <GridListItem title="Apartments & Student Housing" invert>
            Breezeways, walkways, stairwells, and common areas cleaned to improve
            appearance and reduce slip hazards.
          </GridListItem>

          <GridListItem title="Office & Professional Buildings" invert>
            Client-facing properties cleaned with minimal disruption to daily
            operations.
          </GridListItem>

          <GridListItem title="Concrete & Hardscape Cleaning" invert>
            Remove stains, algae, and grime from walkways, steps, and business frontage.
          </GridListItem>

          <GridListItem title="Dumpster Pads & Service Areas" invert>
            Sanitary cleaning for areas prone to odors, grease, and organic buildup.
          </GridListItem>

          <GridListItem title="Flexible Scheduling" invert>
            Early morning and off-hours availability for busy commercial properties.
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
          Built for Bloomsburg conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Bloomsburg’s combination of student traffic, shaded walkways, and humid
            summers leads to rapid algae and grime buildup—especially around entrances
            and concrete surfaces.
          </p>

          <p>
            We’re Central PA based, so we understand how quickly commercial properties
            here get dirty and how to clean them effectively without damage.
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
        title="Commercial pressure washing around Bloomsburg"
      >
        <p>
          We provide commercial exterior cleaning in Bloomsburg and surrounding
          communities throughout Columbia County.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Buckhorn">
            Small businesses and roadside commercial properties.
          </GridListItem>
          <GridListItem title="Catawissa">
            Storefronts, sidewalks, and professional buildings.
          </GridListItem>
          <GridListItem title="Berwick">
            Retail corridors and apartment properties.
          </GridListItem>
          <GridListItem title="Orangeville">
            Commercial walkways and building exteriors.
          </GridListItem>
          <GridListItem title="Lightstreet">
            Industrial and commercial service areas.
          </GridListItem>
          <GridListItem title="Central PA">
            Ask if you’re nearby—we likely already service your area.
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
            Get a commercial cleaning quote in Bloomsburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Cleaner walkways, safer entrances, and a better-looking property—done right.
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

export default function CommercialBloomsburgPage() {
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
        eyebrow="Bloomsburg, PA"
        title="Commercial pressure washing in Bloomsburg, PA"
      >
        <p>
          Exterior cleaning for storefronts, apartments, and commercial properties—
          scheduled around your business.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Flexible" label="Scheduling" />
          <StatListItem value="Safer" label="Concrete surfaces" />
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