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
  title: 'Deck & Fence Cleaning Lock Haven PA | Wood & Composite Cleaning',
  description:
    'Professional deck and fence cleaning in Lock Haven, PA. Safe cleaning for wood, composite, and vinyl surfaces. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Deck & Fence Cleaning"
        title="Protect and restore outdoor surfaces in Lock Haven"
        invert
      >
        <p>
          We clean decks and fences using surface-safe methods that remove algae,
          mildew, and grime without damaging wood or composite materials.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Wood Deck Cleaning" invert>
            Ideal for pressure-treated and cedar decks common in Lock Haven homes.
          </GridListItem>

          <GridListItem title="Composite Decks" invert>
            Low-pressure cleaning for Trex and composite decking without streaking
            or surface damage.
          </GridListItem>

          <GridListItem title="Fence Cleaning" invert>
            Restore wood and vinyl fences affected by moisture and shade.
          </GridListItem>

          <GridListItem title="River & Valley Properties" invert>
            Extra care for decks exposed to river moisture and valley humidity.
          </GridListItem>

          <GridListItem title="Pre-Stain Cleaning" invert>
            Proper prep before staining improves finish quality and lifespan.
          </GridListItem>

          <GridListItem title="Residential Focused" invert>
            Tailored service for Lock Haven neighborhoods and surrounding townships.
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
          Built for Lock Haven conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lock Haven’s proximity to the river and surrounding mountains creates
            ideal conditions for algae and mildew growth on decks and fences.
          </p>

          <p>
            Our cleaning process is adjusted for higher moisture exposure,
            preventing premature regrowth and surface deterioration.
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
        title="Deck and fence cleaning around Lock Haven"
      >
        <p>
          We provide deck and fence cleaning throughout Lock Haven and nearby
          communities.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Castanea" />
          <GridListItem title="Mill Hall" />
          <GridListItem title="Flemington" />
          <GridListItem title="Woolrich" />
          <GridListItem title="Clinton County" />
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
            Get a deck or fence cleaning quote in Lock Haven
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Safe cleaning, honest pricing, and results designed to last.
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

export default function DeckFenceCleaningLockHavenPage() {
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
        eyebrow="Lock Haven, PA"
        title="Deck & fence cleaning in Lock Haven, PA"
      >
        <p>
          Professional deck and fence cleaning tailored for river valley and
          mountain-region properties.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Surface-safe" label="Cleaning methods" />
          <StatListItem value="Moisture-aware" label="Local approach" />
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