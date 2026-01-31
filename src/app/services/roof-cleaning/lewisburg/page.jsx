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
  title: 'Roof Cleaning Lewisburg PA | Soft Wash Roof Cleaning',
  description:
    'Professional roof cleaning in Lewisburg, PA. Safe soft wash roof cleaning removes black streaks, algae, and moss without damaging shingles.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Roof Cleaning Services"
        title="Safe, long-lasting roof cleaning in Lewisburg"
        invert
      >
        <p>
          We provide low-pressure roof cleaning designed to safely remove algae,
          black streaks, and moss common throughout the Lewisburg area.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Roof Cleaning" invert>
            Manufacturer-approved soft washing that kills algae at the root
            without damaging shingles.
          </GridListItem>

          <GridListItem title="Asphalt & Architectural Shingles" invert>
            Ideal for historic homes, residential neighborhoods, and newer
            developments around Lewisburg.
          </GridListItem>

          <GridListItem title="Metal & Specialty Roofs" invert>
            Custom cleaning solutions for metal and specialty roofing systems.
          </GridListItem>

          <GridListItem title="Algae & Moss Treatment" invert>
            Tree coverage and humidity make algae common — we treat the source
            for longer-lasting results.
          </GridListItem>

          <GridListItem title="Gutter Line Restoration" invert>
            Removes dark staining caused by roof runoff and organic buildup.
          </GridListItem>

          <GridListItem title="Residential & Commercial" invert>
            Homes, apartments, small businesses, and commercial properties.
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
          Built for Lewisburg roofs
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lewisburg’s tree-lined streets, river proximity, and seasonal humidity
            make roof algae a frequent issue for homeowners.
          </p>

          <p>
            Our roof cleaning process is designed specifically for Central PA
            conditions, helping protect your roof and extend its lifespan.
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
            Get a roof cleaning quote in Lewisburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Protect your roof and restore curb appeal with safe soft washing.
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

export default function RoofCleaningLewisburgPage() {
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
        eyebrow="Lewisburg, PA"
        title="Professional roof cleaning in Lewisburg"
      >
        <p>
          Safe soft wash roof cleaning that removes algae and black streaks
          without damaging shingles.
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