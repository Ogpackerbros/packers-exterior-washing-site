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
  title: 'Concrete Cleaning Williamsport PA | Driveway & Sidewalk Washing',
  description:
    'Professional concrete cleaning in Williamsport, PA. Driveways, sidewalks, patios, and pool decks cleaned evenly with commercial surface cleaners.',
}

function Services() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Concrete Cleaning Services"
        title="Professional concrete cleaning in Williamsport"
        invert
      >
        <p>
          Williamsport concrete surfaces collect algae, traffic grime, and winter
          residue that standard pressure washers can’t clean evenly.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Driveway Cleaning" invert>
            Removes oil stains, tire marks, and years of embedded dirt.
          </GridListItem>

          <GridListItem title="Sidewalks & Walkways" invert>
            Restores safe, clean walking surfaces around your home.
          </GridListItem>

          <GridListItem title="Patios & Pool Decks" invert>
            Eliminates slippery algae buildup and discoloration.
          </GridListItem>

          <GridListItem title="Commercial Surface Cleaners" invert>
            Even pressure across the entire surface — no zebra striping.
          </GridListItem>

          <GridListItem title="Pre & Post Treatment" invert>
            Stains and heavy buildup treated before and after cleaning.
          </GridListItem>

          <GridListItem title="Residential & Commercial" invert>
            Homes, rentals, businesses, and apartment complexes.
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
          Built for Williamsport conditions
        </h2>

        <div className="mt-6 space-y-6 text-base text-neutral-600">
          <p>
            Freeze-thaw cycles, road salt, and shade cause concrete staining to
            build up quickly in Williamsport.
          </p>

          <p>
            Our surface cleaning process is designed to restore concrete evenly
            without etching or streaking.
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
            Get a concrete cleaning quote in Williamsport
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Restore your driveway, sidewalks, and patio safely and evenly.
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

export default function ConcreteCleaningWilliamsportPage() {
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
        eyebrow="Williamsport, PA"
        title="Professional concrete cleaning in Williamsport"
      >
        <p>
          Even, streak-free concrete cleaning using commercial-grade surface
          cleaners.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="No" label="Zebra stripes" />
          <StatListItem value="Even" label="Surface cleaning" />
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