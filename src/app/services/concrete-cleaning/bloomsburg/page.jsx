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
  title: 'Concrete Cleaning Bloomsburg PA | Driveway & Sidewalk Washing',
  description:
    'Professional concrete cleaning in Bloomsburg, PA. Driveways, sidewalks, patios, and walkways cleaned evenly with commercial surface cleaners.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Concrete Cleaning Services"
        title="Concrete cleaning for Bloomsburg properties"
        invert
      >
        <p>
          Student foot traffic, shade, and seasonal weather cause concrete staining
          to build up quickly throughout Bloomsburg.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Driveways" invert>
            Removes oil stains, tire marks, and embedded grime.
          </GridListItem>
          <GridListItem title="Sidewalks & Walkways" invert>
            Restores clean, safe walking surfaces around homes and rentals.
          </GridListItem>
          <GridListItem title="Patios & Outdoor Spaces" invert>
            Eliminates algae buildup and discoloration from gathering areas.
          </GridListItem>
          <GridListItem title="Commercial Surface Cleaning" invert>
            Even pressure across the entire surface — no striping.
          </GridListItem>
          <GridListItem title="Pre-Treatment for Stains" invert>
            Targets problem areas before full cleaning.
          </GridListItem>
          <GridListItem title="Residential & Rental Properties" invert>
            Homes, student housing, and small commercial properties.
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
          Designed for Bloomsburg conditions
        </h2>
        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Heavy foot traffic, shade, and moisture cause algae and grime to build
            up faster on Bloomsburg concrete surfaces.
          </p>
          <p>
            Our surface cleaning process restores concrete evenly without etching
            or damaging the surface.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function CTA() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="rounded-4xl bg-neutral-950 px-6 py-12 sm:px-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get a concrete cleaning quote in Bloomsburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Even, streak-free concrete cleaning for driveways and walkways.
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

export default function ConcreteCleaningBloomsburgPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/concrete-cleaning"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            ← Concrete Cleaning Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Bloomsburg, PA"
        title="Professional concrete cleaning in Bloomsburg"
      >
        <p>
          Commercial-grade surface cleaning for homes, rentals, and walkways.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="No" label="Striping" />
          <StatListItem value="Even" label="Coverage" />
          <StatListItem value="Same day" label="Quotes available" />
        </StatList>
      </Container>

      <Services />
      <WhyLocal />
      <CTA />

      <ContactSection />
    </RootLayout>
  )
}