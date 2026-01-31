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
  title: 'Roof Cleaning Sunbury PA | Soft Wash Roof Cleaning',
  description:
    'Professional roof cleaning in Sunbury, PA. Soft wash roof cleaning removes algae, black streaks, and moss without damaging shingles.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Roof Cleaning Services"
        title="Roof cleaning tailored to Sunbury properties"
        invert
      >
        <p>
          Sunbury’s river location and older housing stock make roof algae and
          staining a common issue across the area.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Roof Cleaning" invert>
            Gentle, low-pressure cleaning that safely eliminates algae without
            harming shingles.
          </GridListItem>

          <GridListItem title="Asphalt & Architectural Shingles" invert>
            Ideal for traditional homes and residential neighborhoods throughout
            Sunbury.
          </GridListItem>

          <GridListItem title="Metal & Specialty Roofs" invert>
            Custom cleaning solutions for metal roofs and specialty materials.
          </GridListItem>

          <GridListItem title="Algae & Moss Removal" invert>
            Moisture and shade make algae common — we kill it at the source for
            longer-lasting results.
          </GridListItem>

          <GridListItem title="Gutter Line Stain Removal" invert>
            Restores the appearance of roof edges and gutter lines.
          </GridListItem>

          <GridListItem title="Residential & Commercial" invert>
            Serving homes, rentals, and commercial buildings throughout Sunbury.
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
          Built for Sunbury’s climate
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Proximity to the Susquehanna River increases moisture levels, leading
            to faster algae growth on roofs in Sunbury.
          </p>

          <p>
            Our soft wash process is designed specifically for Central PA weather
            patterns and roofing materials.
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
            Get a roof cleaning quote in Sunbury
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Restore your roof safely with professional soft wash cleaning.
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

export default function RoofCleaningSunburyPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/roof-cleaning"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            ← Roof Cleaning Services
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Sunbury, PA"
        title="Professional roof cleaning in Sunbury"
      >
        <p>
          Soft wash roof cleaning that removes algae and black streaks without
          damaging shingles.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Local" label="Central PA based" />
          <StatListItem value="Soft Wash" label="Warranty safe" />
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