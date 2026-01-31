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
  title: 'Deck & Fence Cleaning Lewisburg PA | Professional Exterior Cleaning',
  description:
    'Deck and fence cleaning in Lewisburg, PA. Safe cleaning for wood, composite, and vinyl surfaces. Ideal for homes and rentals. Free estimates.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Deck & Fence Cleaning"
        title="Professional deck and fence cleaning in Lewisburg"
        invert
      >
        <p>
          We help Lewisburg homeowners maintain clean, safe, and attractive
          outdoor spaces without damaging wood or composite materials.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Wood Deck Cleaning" invert>
            Remove algae, mildew, and oxidation common on shaded Lewisburg decks.
          </GridListItem>

          <GridListItem title="Composite Deck Cleaning" invert>
            Low-pressure cleaning ideal for Trex and composite decking.
          </GridListItem>

          <GridListItem title="Fence Cleaning" invert>
            Restore wood and vinyl fences affected by moisture and tree cover.
          </GridListItem>

          <GridListItem title="Rental & Student Housing" invert>
            Perfect for Lewisburg rental properties that need reliable upkeep.
          </GridListItem>

          <GridListItem title="Pre-Stain Prep" invert>
            Proper cleaning before staining improves finish and longevity.
          </GridListItem>

          <GridListItem title="Residential Focused" invert>
            Tailored service for Lewisburg homes and neighborhoods.
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
          Designed for Lewisburg properties
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Lewisburg’s mix of mature trees, river humidity, and shaded yards
            creates ideal conditions for algae and mildew growth on decks and
            fences.
          </p>

          <p>
            We adjust our cleaning process specifically for these conditions,
            delivering longer-lasting results without damage.
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
        title="Serving Lewisburg and surrounding communities"
      >
        <p>
          We provide deck and fence cleaning throughout Lewisburg and nearby areas.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="East Buffalo Township" />
          <GridListItem title="West Buffalo Township" />
          <GridListItem title="Milton" />
          <GridListItem title="Mifflinburg" />
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
            Get a deck or fence cleaning quote in Lewisburg
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Safe methods, reliable service, and results you can trust.
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

export default function DeckFenceCleaningLewisburgPage() {
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
        eyebrow="Lewisburg, PA"
        title="Deck & fence cleaning in Lewisburg, PA"
      >
        <p>
          Professional deck and fence cleaning designed for Lewisburg homes,
          rentals, and outdoor living spaces.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="Low pressure" label="Surface-safe cleaning" />
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