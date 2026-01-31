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
  title: 'Deck & Fence Cleaning Williamsport PA | Wood & Composite Cleaning',
  description:
    'Professional deck and fence cleaning in Williamsport, PA. Safe cleaning for wood, composite, and vinyl surfaces. Locally owned. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Deck & Fence Cleaning"
        title="Restore your outdoor spaces in Williamsport"
        invert
      >
        <p>
          We clean decks and fences the right way — removing algae, mildew, and
          weathering without damaging wood fibers or composite materials.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Wood Deck Cleaning" invert>
            Safe cleaning for pressure-treated, cedar, and hardwood decks common
            throughout Williamsport neighborhoods.
          </GridListItem>

          <GridListItem title="Composite & Trex Decks" invert>
            Low-pressure cleaning that removes algae and grime without voiding
            manufacturer warranties.
          </GridListItem>

          <GridListItem title="Wood Fence Restoration" invert>
            Bring gray, weathered fences back to life by removing oxidation and
            organic buildup.
          </GridListItem>

          <GridListItem title="Vinyl Fence Cleaning" invert>
            Remove green algae and staining that builds up quickly in shaded
            Williamsport yards.
          </GridListItem>

          <GridListItem title="Pre-Stain Cleaning" invert>
            Proper prep before staining or sealing ensures better absorption and
            longer-lasting results.
          </GridListItem>

          <GridListItem title="Residential & Commercial" invert>
            From backyard decks to apartment complexes and businesses.
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
          Built for Williamsport weather
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Williamsport’s humidity, tree coverage, and seasonal shade make decks
            and fences prone to algae and mildew growth. Left untreated, surfaces
            become slippery, discolored, and deteriorate faster.
          </p>

          <p>
            As a Central PA company, we clean outdoor surfaces specifically for
            local conditions — not one-size-fits-all pressure washing.
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
        title="Deck and fence cleaning around Williamsport"
      >
        <p>
          We serve Williamsport and surrounding communities with professional
          deck and fence cleaning services.
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
            Get a deck or fence cleaning quote in Williamsport
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Safe cleaning, honest pricing, and professional results you’ll notice
            immediately.
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

export default function DeckFenceCleaningWilliamsportPage() {
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
        eyebrow="Williamsport, PA"
        title="Deck & fence cleaning in Williamsport, PA"
      >
        <p>
          Restore the look and safety of your outdoor spaces with professional
          deck and fence cleaning designed for Central PA conditions.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Wood-safe" label="Cleaning methods" />
          <StatListItem value="Local" label="Central PA based" />
          <StatListItem value="Same day" label="Quotes available" />
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