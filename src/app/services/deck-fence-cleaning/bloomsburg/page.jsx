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
  title: 'Deck & Fence Cleaning Bloomsburg PA | Professional Exterior Cleaning',
  description:
    'Deck and fence cleaning in Bloomsburg, PA. Safe cleaning for wood, composite, and vinyl decks and fences. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Deck & Fence Cleaning"
        title="Keep outdoor spaces clean in Bloomsburg"
        invert
      >
        <p>
          We help Bloomsburg homeowners and rental property owners keep decks and
          fences clean, safe, and visually appealing.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Wood Deck Cleaning" invert>
            Remove algae and oxidation common on shaded Bloomsburg properties.
          </GridListItem>

          <GridListItem title="Composite Decks" invert>
            Gentle cleaning for Trex and composite surfaces without streaks.
          </GridListItem>

          <GridListItem title="Fence Cleaning" invert>
            Restore wood and vinyl fences affected by weather and student traffic.
          </GridListItem>

          <GridListItem title="Rental & Student Housing" invert>
            Ideal for Bloomsburg rentals that need reliable seasonal upkeep.
          </GridListItem>

          <GridListItem title="Pre-Stain Prep" invert>
            Clean surfaces absorb stain better and last longer.
          </GridListItem>

          <GridListItem title="Residential & Rental" invert>
            Flexible scheduling for homeowners and landlords.
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
          Designed for Bloomsburg properties
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Bloomsburg’s mix of student housing, rentals, and tree-lined streets
            leads to faster buildup of algae and mildew on decks and fences.
          </p>

          <p>
            Our cleaning approach balances effectiveness with surface protection,
            making it ideal for high-use outdoor spaces.
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
        title="Deck and fence cleaning around Bloomsburg"
      >
        <p>
          We provide deck and fence cleaning throughout Bloomsburg and nearby
          communities.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Buckhorn" />
          <GridListItem title="Esp
leton" />
          <GridListItem title="Scott Township" />
          <GridListItem title="Columbia County" />
          <GridListItem title="Central PA" />
          <GridListItem title="Surrounding Areas" />
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
            Get a deck or fence cleaning quote in Bloomsburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Reliable service for homes, rentals, and outdoor living spaces.
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

export default function DeckFenceCleaningBloomsburgPage() {
  return (
    <RootLayout>
      <Container className="mt-12 sm:mt-16">
        <FadeIn>
          <Link
            href="/services/deck-fence-cleaning"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
          >
            <span className="relative transition group-hover:-translate-x-1">←</span>
            Deck & Fence Cleaning
          </Link>
        </FadeIn>
      </Container>

      <PageIntro
        eyebrow="Bloomsburg, PA"
        title="Deck & fence cleaning in Bloomsburg, PA"
      >
        <p>
          Professional cleaning for decks and fences serving Bloomsburg homes and
          rental properties.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Rental-safe" label="Cleaning approach" />
          <StatListItem value="Local" label="Central PA service" />
          <StatListItem value="Fast" label="Quotes available" />
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