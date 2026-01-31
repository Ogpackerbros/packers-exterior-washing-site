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
  title: 'Roof Cleaning Lock Haven PA | Soft Wash Roof Cleaning',
  description:
    'Professional roof cleaning in Lock Haven, PA. Safe soft wash roof cleaning removes black streaks, algae, and moss without damaging shingles.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Roof Cleaning Services"
        title="Reliable roof cleaning in Lock Haven"
        invert
      >
        <p>
          We specialize in low-pressure roof cleaning that safely removes algae,
          black streaks, and moss common in the Lock Haven area.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Soft Wash Roof Cleaning" invert>
            Gentle, manufacturer-approved soft washing that protects shingles
            and roofing materials.
          </GridListItem>

          <GridListItem title="Asphalt & Architectural Shingles" invert>
            Perfect for residential homes throughout Lock Haven and surrounding
            communities.
          </GridListItem>

          <GridListItem title="Metal & Specialty Roofs" invert>
            Custom cleaning approaches for metal roofs and specialty materials.
          </GridListItem>

          <GridListItem title="Algae & Moss Treatment" invert>
            River proximity and tree coverage make algae common — we treat it
            at the source.
          </GridListItem>

          <GridListItem title="Gutter Line Restoration" invert>
            Removes dark streaks and staining caused by roof runoff.
          </GridListItem>

          <GridListItem title="Residential & Commercial" invert>
            Serving homeowners, rentals, and commercial properties.
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
          Designed for Lock Haven conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lock Haven’s river valley location, humidity, and shade create ideal
            conditions for roof algae and moss growth.
          </p>

          <p>
            Our roof cleaning process is built specifically for Central PA
            climates, helping preserve your roof and improve curb appeal.
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
            Get a roof cleaning quote in Lock Haven
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Protect your roof and restore its appearance with safe soft washing.
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

export default function RoofCleaningLockHavenPage() {
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
        eyebrow="Lock Haven, PA"
        title="Professional roof cleaning in Lock Haven"
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