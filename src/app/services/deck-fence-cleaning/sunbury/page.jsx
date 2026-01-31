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
  title: 'Deck & Fence Cleaning Sunbury PA | Wood & Vinyl Cleaning',
  description:
    'Professional deck and fence cleaning in Sunbury, PA. Safe cleaning for wood, composite, and vinyl surfaces. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Deck & Fence Cleaning"
        title="Restore outdoor spaces in Sunbury"
        invert
      >
        <p>
          We clean decks and fences using surface-safe methods that remove algae,
          mildew, and buildup without damaging wood or vinyl.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Wood Deck Cleaning" invert>
            Ideal for pressure-treated and older decks common in Sunbury homes.
          </GridListItem>

          <GridListItem title="Composite Decks" invert>
            Low-pressure cleaning for Trex and composite decking without fading
            or streaking.
          </GridListItem>

          <GridListItem title="Fence Cleaning" invert>
            Restore wood and vinyl fences affected by sun exposure and moisture.
          </GridListItem>

          <GridListItem title="River Valley Properties" invert>
            Extra care for decks exposed to higher humidity near the Susquehanna.
          </GridListItem>

          <GridListItem title="Pre-Stain Preparation" invert>
            Proper cleaning before staining improves finish and longevity.
          </GridListItem>

          <GridListItem title="Residential Focused" invert>
            Tailored service for Sunbury neighborhoods and surrounding townships.
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
          Built for Sunbury conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Sunbury’s river proximity and open exposure create ideal conditions
            for algae, mildew, and weathering on decks and fences.
          </p>

          <p>
            Our cleaning process accounts for these conditions, helping surfaces
            stay cleaner longer without unnecessary wear.
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
        title="Deck and fence cleaning around Sunbury"
      >
        <p>
          We provide deck and fence cleaning throughout Sunbury and nearby
          communities.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Northumberland" />
          <GridListItem title="Shamokin Dam" />
          <GridListItem title="Selinsgrove" />
          <GridListItem title="Lower Augusta Township" />
          <GridListItem title="Snyder County" />
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
            Get a deck or fence cleaning quote in Sunbury
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Safe cleaning, honest pricing, and results that last.
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

export default function DeckFenceCleaningSunburyPage() {
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
        eyebrow="Sunbury, PA"
        title="Deck & fence cleaning in Sunbury, PA"
      >
        <p>
          Professional deck and fence cleaning tailored for river-valley and
          residential properties.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Surface-safe" label="Cleaning methods" />
          <StatListItem value="Humidity-aware" label="Local approach" />
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